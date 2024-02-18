import { XCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState } from 'react'

import { BuildState } from '@/features/build/types'
import { Item } from '@/features/items/types'
import { TraitItem } from '@/features/items/types/TraitItem'
import { cn } from '@/lib/classnames'

import { DEFAULT_TRAIT_AMOUNT, MAX_TRAIT_AMOUNT } from '../constants'

export function Traits({
  buildState,
  isEditable,
  isScreenshotMode,
  showControls,
  onAddTrait,
  onItemInfoClick,
  onRemoveTrait,
  onUpdateAmount,
}: {
  buildState: BuildState
  isEditable: boolean
  isScreenshotMode: boolean
  showControls: boolean
  onAddTrait?: () => void
  onItemInfoClick?: (item: Item) => void
  onRemoveTrait: (traitItem: TraitItem) => void
  onUpdateAmount: (traitItem: TraitItem) => void
}) {
  const { trait: traitItems, archetype: archtypeItems } = buildState.items

  const [editingTraitItem, setEditingTraitItem] = useState<TraitItem | null>(
    null,
  )

  const totalTraitAmount = traitItems.reduce(
    (total, traitItem) => total + traitItem.amount,
    0,
  )

  function shouldAllowEdit(traitItem: TraitItem) {
    // if the trait being edited is the linked archtype with an amount of 10,
    // it should not be editable
    const primaryArchtype = archtypeItems[0]
    if (
      primaryArchtype?.linkedItems?.traits?.some(
        (linkedTraitItem) =>
          linkedTraitItem.name === traitItem.name &&
          linkedTraitItem.amount === 10,
      )
    ) {
      return false
    }

    const secondaryArchtype = archtypeItems[1]
    if (
      secondaryArchtype?.linkedItems?.traits?.some(
        (linkedTraitItem) =>
          linkedTraitItem.name === traitItem.name &&
          linkedTraitItem.amount === 10,
      )
    ) {
      return false
    }

    return true
  }

  function shouldAllowDelete(traitItem: TraitItem) {
    // Default values based on editable and wheisEditable && showControlsther controls are shown
    let shouldAllowDelete = isEditable && showControls

    // If the trait is linked to an archtype, it should not be deletable
    if (isArchtypeTrait(traitItem)) {
      shouldAllowDelete = false
    }

    return shouldAllowDelete
  }

  function isArchtypeTrait(traitItem: TraitItem) {
    // If the trait is linked to an archtype, it should not be deletable
    const primaryArchtype = archtypeItems[0]
    if (
      primaryArchtype?.linkedItems?.traits?.some(
        (linkedTraitItem) => linkedTraitItem.name === traitItem.name,
      )
    ) {
      return true
    }

    // If the trait is linked to the secondary archtype, it should not be deletable
    // but only if it's the main archtype trait, i.e. amount is 10
    const secondaryArchtype = archtypeItems[1]
    if (
      secondaryArchtype?.linkedItems?.traits?.some(
        (linkedTraitItem) =>
          linkedTraitItem.name === traitItem.name &&
          linkedTraitItem.amount === 10,
      )
    ) {
      return true
    }
  }

  function isArchtypeCoreTrait(traitItem: TraitItem) {
    // If the trait is linked to an archtype, it should not be deletable
    const primaryArchtype = archtypeItems[0]
    if (
      primaryArchtype?.linkedItems?.traits?.some(
        (linkedTraitItem) =>
          linkedTraitItem.name === traitItem.name &&
          linkedTraitItem.amount === 10,
      )
    ) {
      return true
    }

    // If the trait is linked to the secondary archtype, it should not be deletable
    // but only if it's the main archtype trait, i.e. amount is 10
    const secondaryArchtype = archtypeItems[1]
    if (
      secondaryArchtype?.linkedItems?.traits?.some(
        (linkedTraitItem) =>
          linkedTraitItem.name === traitItem.name &&
          linkedTraitItem.amount === 10,
      )
    ) {
      return true
    }
  }

  return (
    <>
      <div
        className={cn(
          'grid grid-cols-1 gap-2 sm:grid-cols-2',
          isScreenshotMode && 'grid-cols-2',
        )}
      >
        <div className="col-span-full mx-auto mb-2 max-w-[300px] border border-purple-800 p-2 text-center text-xs text-gray-300">
          <span
            className={cn(
              'text-lg font-bold',
              totalTraitAmount > MAX_TRAIT_AMOUNT && 'text-red-500',
            )}
          >
            {totalTraitAmount}
          </span>
          /<span className="font-bold">{MAX_TRAIT_AMOUNT}</span> Trait Points
          <p className="text-cyan-500">
            5 Core + 20 Archtype + 85 Player Choice
          </p>
        </div>

        {traitItems.map((traitItem) => (
          <div
            key={traitItem.name}
            className={cn(
              'flex items-center border border-transparent border-b-green-500 text-sm',
              isArchtypeTrait(traitItem) &&
                isArchtypeCoreTrait(traitItem) &&
                'border-b-purple-500',
              isArchtypeTrait(traitItem) &&
                !isArchtypeCoreTrait(traitItem) &&
                'border-b-purple-500',
              isArchtypeTrait(traitItem) &&
                !isArchtypeCoreTrait(traitItem) &&
                isEditable &&
                'border-b-yellow-500',
            )}
          >
            <div className="mr-4 flex items-center text-lg font-bold text-green-400">
              {traitItem.name === editingTraitItem?.name &&
              isEditable &&
              shouldAllowEdit(editingTraitItem) ? (
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={editingTraitItem.amount}
                  // Update the parent state when the user presses enter
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      onUpdateAmount(editingTraitItem)
                      setEditingTraitItem(null)
                    }
                  }}
                  // Select the text when the input is focused
                  onFocus={(e) => e.target.select()}
                  // Update the local state when the user types
                  onChange={(e) => {
                    const { value } = e.target

                    if (value.trim() === '') return

                    let amount = Number(value)

                    setEditingTraitItem(
                      new TraitItem({
                        ...traitItem,
                        amount: isNaN(amount) ? 0 : amount,
                      }),
                    )
                  }}
                  // Update the parent state when the input is blurred
                  onBlur={() => {
                    onUpdateAmount(editingTraitItem)
                    setEditingTraitItem(null)
                  }}
                  autoFocus
                  className="w-12 border border-green-500 bg-transparent p-1 text-center text-green-400"
                />
              ) : (
                <button
                  onClick={() => setEditingTraitItem(traitItem)}
                  aria-label="Edit Trait Amount"
                  className="min-w-[30px] text-left"
                >
                  {traitItem.amount ?? DEFAULT_TRAIT_AMOUNT}
                </button>
              )}
            </div>
            <button
              className="relative flex items-center justify-start gap-x-2 text-sm text-gray-200"
              aria-label="Trait Information"
              onClick={() => onItemInfoClick && onItemInfoClick(traitItem)}
            >
              <div>{traitItem.name}</div>
              {!isScreenshotMode && onItemInfoClick && (
                <Image
                  src={`https://${process.env.NEXT_PUBLIC_IMAGE_URL}/information.png`}
                  alt="Bleed Resistance"
                  width={32}
                  height={32}
                  className="h-3 w-3"
                  loading="eager"
                />
              )}
            </button>
            {shouldAllowDelete(traitItem) && (
              <button
                onClick={() => onRemoveTrait(traitItem)}
                aria-label="Remove Trait"
                className="flex grow items-end justify-end text-red-500"
              >
                <XCircleIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
          </div>
        ))}
      </div>
      {showControls && isEditable && (
        <button
          onClick={onAddTrait}
          aria-label="Add Trait"
          className="mx-auto mt-4 flex max-w-[250px] items-center justify-center rounded border border-purple-700 px-4 py-2 text-xs font-bold text-white hover:border-purple-400 hover:bg-purple-500"
        >
          Add Trait
        </button>
      )}
    </>
  )
}
