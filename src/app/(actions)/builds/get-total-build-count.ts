'use server'

import { prisma } from '@/features/db'

export async function getTotalBuildCount() {
  const count = await prisma.build.count({
    where: {
      isPublic: true,
    },
  })
  return count
}
