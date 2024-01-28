'use client'

import ArchtypeLabel from './ArchtypeLabel'
import { StarIcon } from '@heroicons/react/24/solid'
import { cn } from '@/lib/classnames'
import { FlagIcon as FlagIconOff } from '@heroicons/react/24/outline'
import { FlagIcon as FlagIconOn } from '@heroicons/react/24/solid'
import Link from 'next/link'
import PopularBuildBadge from './PopularBuildBadge'
import { DBBuild } from '../types'
import { POPULAR_VOTE_THRESHOLD } from '../constants'
import { format } from 'date-fns'
import { dbBuildToBuildState } from '../lib/dbBuildToBuildState'
import Tooltip from '@/features/ui/Tooltip'

interface Props {
  build: DBBuild
  footerActions?: React.ReactNode
  memberFrameEnabled?: boolean
  onReportBuild: ((buildId: string) => void) | undefined
}

export default function BuildCard({
  build,
  footerActions,
  memberFrameEnabled = true,
  onReportBuild,
}: Props) {
  const buildState = dbBuildToBuildState(build)
  const isPopular = buildState.totalUpvotes >= POPULAR_VOTE_THRESHOLD

  return (
    <div
      className={cn(
        'relative col-span-1 flex h-full flex-col rounded-lg border border-purple-500 bg-black shadow',
        buildState.isMember &&
          memberFrameEnabled &&
          'border-2 border-yellow-300 shadow-lg shadow-yellow-600',
      )}
    >
      {isPopular && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform">
          <PopularBuildBadge />
        </div>
      )}
      <div className="flex w-full flex-1 items-start justify-start space-x-6 p-4">
        <div className="flex-1">
          <div className="flex flex-col items-start justify-start ">
            <Link
              href={`/builder/${build.id}`}
              className="w-full text-green-500 hover:text-green-700 hover:underline"
            >
              <h3
                className={cn(
                  'text-md whitespace-pre-wrap font-medium',
                  isPopular && 'mt-2',
                )}
              >
                {build.name}
              </h3>
            </Link>
            <div className="mb-2 grid w-full grid-cols-3 truncate text-sm">
              <div className="col-span-2 truncate text-left text-gray-500">
                by{' '}
                <Tooltip
                  content={
                    <span className="rounded-md border-2 border-cyan-500 bg-black p-2 text-xs text-white">
                      See all builds from {build.createdByDisplayName}
                    </span>
                  }
                >
                  <Link
                    href={`/profile/${build.createdById}`}
                    className="text-purple-500 underline hover:text-purple-700"
                  >
                    {build.createdByDisplayName}
                  </Link>
                </Tooltip>
              </div>
              <div className="flex flex-row items-center justify-end gap-x-2">
                {onReportBuild && (
                  <Tooltip
                    content={
                      <span className="rounded-md border-2 border-red-500 bg-black p-2 text-xs text-red-500">
                        Report this build
                      </span>
                    }
                  >
                    <button
                      onClick={() => onReportBuild(build.id)}
                      className="flex items-center justify-end text-right text-red-500"
                    >
                      {buildState.reported ? (
                        <FlagIconOn className="mr-0.5 h-4 w-4" />
                      ) : (
                        <FlagIconOff className="mr-0.5 h-4 w-4" />
                      )}
                    </button>
                  </Tooltip>
                )}
                <Tooltip
                  content={
                    <span className="rounded-md border-2 border-yellow-500 bg-black p-2 text-xs text-yellow-500">
                      Total Favorites
                    </span>
                  }
                >
                  <div className="flex items-center justify-end text-right text-yellow-500">
                    <StarIcon className="mr-1 h-4 w-4" /> {build.totalUpvotes}
                  </div>
                </Tooltip>
              </div>
            </div>
            <div className="mb-2 flex flex-row items-center justify-start gap-x-2">
              {build.updatedAt && (
                <p className="text-left text-xs text-gray-500">
                  Last Updated:{' '}
                  <span className="text-gray-400">
                    {format(
                      new Date(build.updatedAt ?? new Date()),
                      'yyyy-MM-dd hh:mm a',
                    )}
                  </span>
                </p>
              )}
            </div>
            <div className="mt-2 flex flex-row items-center justify-start gap-x-2">
              {buildState.items.archtype[0] && (
                <ArchtypeLabel name={buildState.items.archtype[0].name} />
              )}
              {buildState.items.archtype[1] && (
                <ArchtypeLabel name={buildState.items.archtype[1].name} />
              )}
            </div>
            {buildState.description && (
              <div className="mt-4 flex max-h-[100px] flex-row items-start justify-start gap-x-2 overflow-y-auto text-ellipsis whitespace-break-spaces text-xs text-gray-300">
                {buildState.description}
              </div>
            )}
          </div>
        </div>
      </div>
      <div>{footerActions}</div>
    </div>
  )
}
