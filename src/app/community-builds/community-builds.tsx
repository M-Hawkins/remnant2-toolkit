'use client'

import { EyeIcon } from '@heroicons/react/24/solid'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { getCommunityBuilds } from '@/app/(actions)/builds/get-community-builds'
import { Link } from '@/app/(components)/_base/link'
import { BuildList } from '@/app/(components)/build-list'
import { BuildCard } from '@/app/(components)/cards/build-card'
import { BuildSecondaryFilters } from '@/app/(components)/filters/builds/secondary-filters'
import { useOrderByFilter } from '@/app/(components)/filters/builds/secondary-filters/order-by-filter/use-order-by-filter'
import { useTimeRangeFilter } from '@/app/(components)/filters/builds/secondary-filters/time-range-filter/use-time-range-filter'
import { parseUrlFilters } from '@/app/(components)/filters/builds/utils'
import { Skeleton } from '@/app/(components)/skeleton'
import { Tooltip } from '@/app/(components)/tooltip'
import { useBuildListState } from '@/app/(utils)/builds/hooks/use-build-list-state'
import { usePagination } from '@/app/(utils)/pagination/use-pagination'

interface Props {
  itemsPerPage?: number
}

export function CommunityBuilds({ itemsPerPage = 8 }: Props) {
  const searchParams = useSearchParams()
  const [buildListFilters, setBuildListFilters] = useState(
    parseUrlFilters(searchParams),
  )
  useEffect(() => {
    setBuildListFilters(parseUrlFilters(searchParams))
  }, [searchParams])

  const { buildListState, setBuildListState } = useBuildListState()
  const { builds, totalBuildCount, isLoading } = buildListState

  const { orderBy, handleOrderByChange } = useOrderByFilter('newest')
  const { timeRange, handleTimeRangeChange } = useTimeRangeFilter('all-time')

  const {
    currentPage,
    firstVisibleItemNumber,
    lastVisibleItemNumber,
    pageNumbers,
    totalPages,
    handleSpecificPageClick,
    handleNextPageClick,
    handlePreviousPageClick,
  } = usePagination({
    totalItemCount: totalBuildCount,
    itemsPerPage,
  })

  // Fetch data
  useEffect(() => {
    const getItemsAsync = async () => {
      setBuildListState((prevState) => ({ ...prevState, isLoading: true }))
      const response = await getCommunityBuilds({
        itemsPerPage,
        pageNumber: currentPage,
        timeRange,
        orderBy,
        buildListFilters,
      })

      setBuildListState((prevState) => ({
        ...prevState,
        isLoading: false,
        builds: response.items,
        totalBuildCount: response.totalItemCount,
      }))
    }
    getItemsAsync()
  }, [
    buildListFilters,
    currentPage,
    itemsPerPage,
    orderBy,
    timeRange,
    setBuildListState,
  ])

  if (!buildListFilters) {
    return <Skeleton className="min-h-[1100px] w-full" />
  }

  return (
    <>
      <BuildList
        currentPage={currentPage}
        isLoading={isLoading}
        pageNumbers={pageNumbers}
        totalItems={totalBuildCount}
        totalPages={totalPages}
        firstVisibleItemNumber={firstVisibleItemNumber}
        lastVisibleItemNumber={lastVisibleItemNumber}
        onPreviousPage={handlePreviousPageClick}
        onNextPage={handleNextPageClick}
        onSpecificPage={handleSpecificPageClick}
        headerActions={
          <BuildSecondaryFilters
            orderBy={orderBy}
            onOrderByChange={handleOrderByChange}
            timeRange={timeRange}
            onTimeRangeChange={handleTimeRangeChange}
          />
        }
      >
        <ul
          role="list"
          className="mb-4 mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {builds.map((build) => (
            <BuildCard
              key={build.id}
              build={build}
              isLoading={isLoading}
              footerActions={
                <Tooltip content="View Build">
                  <Link
                    href={`/builder/${build.id}`}
                    className="flex flex-col items-center gap-x-3 rounded-br-lg border border-transparent px-4 py-2 text-xs font-semibold text-primary hover:text-primary/50 hover:underline"
                  >
                    <EyeIcon className="h-4 w-4" /> View
                  </Link>
                </Tooltip>
              }
            />
          ))}
        </ul>
      </BuildList>
    </>
  )
}
