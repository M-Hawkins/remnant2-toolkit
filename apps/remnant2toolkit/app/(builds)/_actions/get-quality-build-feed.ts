'use server';

import { Prisma } from '@repo/db';
import { bigIntFix } from '@repo/utils';

import { getOrderBySegment } from '@/app/(builds)/_features/filters/_libs/queries/segments/order-by';
import { limitByWithQualityBuildsSegment } from '@/app/(builds)/_features/filters/_libs/queries/segments/with-quality';
import { type DBBuild } from '@/app/(builds)/_types/db-build';
import { getSession } from '@/app/(user)/_auth/services/sessionService';

import { getBuildList } from './get-build-list';

export async function getQualityBuildFeed(): Promise<{
  builds: DBBuild[];
}> {
  const session = await getSession();
  const userId = session?.user?.id;

  const orderBySegment = getOrderBySegment('newest');

  const includeBuildVariants = false;

  const { builds } = await getBuildList({
    includeBuildVariants,
    itemsPerPage: 4,
    orderBy: orderBySegment,
    pageNumber: 1,
    searchText: '',
    userId,
    whereConditions: Prisma.sql`
WHERE Build.isPublic = true
AND Build.isPatchAffected = false
${limitByWithQualityBuildsSegment(true, includeBuildVariants)}
    `,
    withCollection: 0,
  });

  return bigIntFix({ builds });
}
