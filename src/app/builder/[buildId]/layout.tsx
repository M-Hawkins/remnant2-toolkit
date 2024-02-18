import { Metadata, ResolvingMetadata } from 'next'

import { dbBuildToBuildState } from '@/features/build/lib/dbBuildToBuildState'
import { getArchetypeBuildName } from '@/features/build/lib/getArchetypeBuildName'
import { isErrorResponse } from '@/features/error-handling/isErrorResponse'
import { Archetype } from '@/features/items/types'
import { PageHeader } from '@/features/ui/PageHeader'

import { getBuild } from '../actions'
import BuildPage from './page'

export async function generateMetadata(
  { params: { buildId } }: { params: { buildId: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const buildData = await getBuild(buildId)
  if (isErrorResponse(buildData)) {
    console.error(buildData.errors)
    return {
      title: 'Error loading build',
      description:
        'There was an error loading this build. It may have been removed',
      openGraph: {
        title: 'Error loading build',
        description:
          'There was an error loading this build. It may have been removed',
        url: `https://remnant2toolkit.com/builder/${buildId}`,
        images: [
          {
            url: 'https://d2sqltdcj8czo5.cloudfront.net/toolkit/og-image-sm.jpg',
            width: 150,
            height: 150,
          },
        ],
        type: 'website',
      },
      twitter: {
        title: 'Error loading build',
        description:
          'There was an error loading this build. It may have been removed',
      },
    }
  }

  const { build } = buildData

  if (!build.isPublic) {
    return {
      title: 'Private Build',
      description: 'This build is private.',
      openGraph: {
        title: 'Private Build',
        description: 'This build is private.',
        url: `https://remnant2toolkit.com/builder/${build.id}`,
        images: [
          {
            url: 'https://d2sqltdcj8czo5.cloudfront.net/toolkit/og-image-sm.jpg',
            width: 150,
            height: 150,
          },
        ],
        type: 'website',
      },
      twitter: {
        title: 'Private Build',
        description: 'This build is private.',
      },
    }
  }

  const buildState = dbBuildToBuildState(build)
  const archetypes = buildState.items.archetype.map(
    (a) => a?.name.toLowerCase(),
  )
  const buildLabel = getArchetypeBuildName({
    archetype1: (archetypes[0] as Archetype) ?? null,
    archetype2: (archetypes[1] as Archetype) ?? null,
  })

  const title = `${build.name} by ${build.createdByDisplayName}`
  let description = `${buildLabel} Build`
  description +=
    build.description ??
    'A build for Remnant 2, generated by remnant2toolkit.com'

  return {
    title,
    description,
    openGraph: {
      title,
      description: description,
      siteName: 'Remnant 2 Toolkit',
      url: `https://remnant2toolkit.com/builder/${build.id}`,
      images: [
        {
          url: 'https://d2sqltdcj8czo5.cloudfront.net/toolkit/og-image-sm.jpg',
          width: 150,
          height: 150,
        },
      ],
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
  }
}

export default async function Layout({
  params: { buildId },
}: {
  params: { buildId: string }
}) {
  const buildData = await getBuild(buildId)
  if (isErrorResponse(buildData)) {
    console.error(buildData.errors)
    return (
      <div className="flex max-w-lg flex-col">
        <PageHeader
          title="Something went wrong!"
          subtitle="The build either can't be found or is marked private."
        />
      </div>
    )
  }
  const { build } = buildData

  return <BuildPage params={{ build }} />
}
