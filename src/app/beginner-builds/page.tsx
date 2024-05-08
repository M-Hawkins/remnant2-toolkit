'use server'

import { BuildFilters } from '@/app/(components)/filters/builds/build-filters'
import { BeginnerBuilds } from '@/app/beginner-builds/beginner-builds'
import { NAV_ITEMS } from '@/features/navigation/constants'
import { DEFAULT_ITEMS_PER_PAGE } from '@/features/pagination/constants'
import { PageHeader } from '@/features/ui/PageHeader'

export default async function Page() {
  return (
    <>
      <PageHeader
        title="Beginner builds"
        subtitle={NAV_ITEMS.beginnerBuilds.description}
      />

      <div className="flex w-full items-center justify-center sm:mb-6">
        <BuildFilters key="beginner-build-filters" />
      </div>
      <div className="mb-2 grid w-full grid-cols-1 gap-2">
        <BeginnerBuilds itemsPerPage={DEFAULT_ITEMS_PER_PAGE} />
      </div>
    </>
  )
}
