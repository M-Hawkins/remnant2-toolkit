import { getServerSession } from '@/app/(lib)/auth'
import { ArmorItem } from '@/app/(types)/items/ArmorItem'
import { GenericItem } from '@/app/(types)/items/GenericItem'
import { MutatorItem } from '@/app/(types)/items/MutatorItem'
import { TraitItem } from '@/app/(types)/items/TraitItem'
import { WeaponItem } from '@/app/(types)/items/WeaponItem'
import { Build } from '@prisma/client'
import { prisma } from '@/app/(lib)/db'
import { badWordFilter } from '@/app/(lib)/badword-filter'
import { revalidatePath } from 'next/cache'
import { BuildState, buildStateSchema } from '@/app/(types)/build-state'
import { MAX_BUILD_DESCRIPTION_LENGTH } from '@/app/(lib)/constants'
import { Ratelimit } from '@upstash/ratelimit'
import { kv } from '@vercel/kv'
import { z } from 'zod'

const ratelimit = new Ratelimit({
  redis: kv,
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(5, '10 s'),
})

export const config = {
  runtime: 'edge',
}

export async function POST(request: Request) {
  // session check
  const session = await getServerSession()
  if (!session || !session.user) {
    return Response.json({ message: 'You must be logged in.' }, { status: 401 })
  }

  // rate limiting
  const userId = session.user.id
  const { limit, reset, remaining } = await ratelimit.limit(userId)

  const headers = {
    'X-RateLimit-Limit': limit.toString(),
    'X-RateLimit-Remaining': remaining.toString(),
    'X-RateLimit-Reset': reset.toString(),
  }

  // build parsing
  const unsafeBuildState = await request.json()
  const buildStateParsed = z
    .object({ upvoted: z.boolean(), buildId: z.string() })
    .safeParse(unsafeBuildState)
  if (!buildStateParsed.success) {
    console.error(
      'Error in vote data',
      buildStateParsed.error.issues.forEach((issue) => console.error(issue)),
    )
    return Response.json(
      { message: 'Error in vote data!' },
      { status: 500, headers },
    )
  }
  const buildState = buildStateParsed.data as BuildState

  if (!buildState.buildId) {
    return Response.json(
      {
        message: 'No buildId provided!',
      },
      { status: 500, headers },
    )
  }

  try {
    // Check if user has a vote for this build already
    const isVoteRegistered = await prisma?.buildVoteCounts.findFirst({
      where: {
        buildId: buildState.buildId,
        userId: session.user.id,
      },
    })

    // If user voted for this build but does not have a vote registered, add a vote
    if (!isVoteRegistered && buildState.upvoted === true) {
      await prisma?.buildVoteCounts.create({
        data: {
          buildId: buildState.buildId,
          userId: session.user.id,
        },
      })
    }
    if (isVoteRegistered && buildState.upvoted === false) {
      await prisma?.buildVoteCounts.delete({
        where: {
          id: isVoteRegistered.id,
        },
      })
    }

    // Get the new total upvotes
    const totalUpvotes = await prisma?.buildVoteCounts.count({
      where: {
        buildId: buildState.buildId,
      },
    })

    // Refresh the cache for the route
    revalidatePath(`/builder/${buildState.buildId}`)

    return Response.json(
      {
        message: 'Vote registered!',
        totalUpvotes,
      },
      { status: 200, headers },
    )
  } catch (e) {
    console.error(e)
    return Response.json(
      { message: 'Error in saving vote!' },
      { status: 500, headers },
    )
  }
}
