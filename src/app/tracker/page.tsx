'use client'

import { remnantItemTypes, remnantItems } from '@/data/items'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Fragment, useState } from 'react'
import type { Filters } from './Filters'
import dynamic from 'next/dynamic'
import { ItemType } from '@/types'
import TrackerFilters from './Filters'

const ListItems = dynamic(() => import('./ListItems'), {
  ssr: false,
})

export default function TrackerPage() {
  const { itemTracker, setItemTracker } = useLocalStorage()
  const { discoveredItemIds } = itemTracker

  const skipItemTypes: ItemType[] = ['concoction', 'consumable']

  const items = remnantItems
    .filter((item) => skipItemTypes.includes(item.type) === false)
    .map((item) => ({
      ...item,
      discovered: discoveredItemIds.includes(item.id),
    }))
  const itemTypes = remnantItemTypes.filter(
    (item) => skipItemTypes.includes(item) === false,
  )

  const [filters, setFilters] = useState<Filters>({
    undiscovered: true,
    discovered: true,
  })

  return (
    <Fragment>
      <div className="w-full">
        <div className="mb-12 p-4 text-center">
          <h1 className="w-full text-2xl font-semibold leading-6 text-white">
            Remnant 2 Item Tracker
          </h1>
        </div>
        <TrackerFilters
          filters={filters}
          onFiltersChange={(newFilters: Filters) => {
            setFilters(newFilters)
          }}
        />
        <div className="mb-12 mt-12">
          <ListItems
            filters={filters}
            items={items}
            itemTypes={itemTypes}
            onClick={(itemId: string) => {
              // If the item is already discovered, undiscover it
              if (discoveredItemIds.includes(itemId)) {
                const newDiscoveredItemIds = discoveredItemIds.filter(
                  (id) => id !== itemId,
                )
                setItemTracker({
                  ...itemTracker,
                  discoveredItemIds: newDiscoveredItemIds,
                })
                return
              }

              const newDiscoveredItemIds = [...discoveredItemIds, itemId]
              setItemTracker({
                ...itemTracker,
                discoveredItemIds: newDiscoveredItemIds,
              })
            }}
          />
        </div>
      </div>
    </Fragment>
  )
}
