'use client'

import Image from 'next/image'
import { IoInformationCircleSharp } from 'react-icons/io5'
import { TbHttpOptions } from 'react-icons/tb'

import { Tooltip } from '@/app/(components)/tooltip'
import { ZINDEXES } from '@/app/(components)/z-indexes'
import { Enemy, isEnemy } from '@/app/(data)/enemies/types'
import { Item } from '@/app/(data)/items/types'
import { ArchetypeItem } from '@/app/(data)/items/types/ArchetypeItem'
import { cn } from '@/app/(utils)/classnames'
import { getImageUrl } from '@/app/(utils)/get-image-url'

/**
 * Some words are too long to fit in the item label on the builder
 * and need to be manually broken up
 */
const MANUAL_ITEM_NAME_BREAKS: Array<{ name: string; break: string }> = [
  { name: 'Hyperconductor', break: 'Hyper-conductor' },
  { name: 'Microcompressor', break: 'Micro-compressor' },
]

/**
 * Some labels are too long to fit the label, but can't be broken up
 * and need to be manually transformed to a smaller text size
 */
const MANUAL_ITEM_NAME_TEXT_TRANSFORMS: Array<{
  name: string
  transform: string
}> = [{ name: "Nightweaver's Grudge", transform: 'text-[9px]' }]

type Props = {
  isToggled?: boolean
  isEditable?: boolean
  isScreenshotMode?: boolean
  item: Item | Enemy | null
  loadingType?: 'lazy' | 'eager'
  manualWordBreaks?: boolean // If true, will use the manual word breaks for item names from MANUAL_ITEM_NAME_BREAKS constant
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'wide'
  tooltipDisabled?: boolean
  unoptimized?: boolean
  onClick?: () => void
  onItemInfoClick?: (item: Item) => void
  onToggleOptional?: (selectedItem: Item, optional: boolean) => void
}

export function ItemButton({
  isEditable = true,
  isScreenshotMode = false,
  isToggled,
  item,
  loadingType = 'eager',
  manualWordBreaks = false,
  size = 'md',
  tooltipDisabled = true,
  unoptimized = false,
  onClick,
  onItemInfoClick,
  onToggleOptional,
}: Props) {
  let tooltipDescription = item && !isEnemy(item) ? item.description : null
  // Truncate text at 150 characters
  if (tooltipDescription && tooltipDescription.length > 150) {
    tooltipDescription = `${tooltipDescription.substring(0, 150)}...`
  }

  let imageSize = {
    height: 50,
    width: 50,
  }
  switch (size) {
    case 'sm':
      imageSize = {
        height: 22,
        width: 22,
      }
      break
    case 'md':
      imageSize = {
        height: 66,
        width: 66,
      }
      break
    case 'lg':
      imageSize = {
        height: 99,
        width: 99,
      }
      break
    case 'xl':
      imageSize = {
        height: 200,
        width: 200,
      }
      break
    case 'wide':
      imageSize = {
        height: 66,
        width: 149,
      }
      break
  }

  const showOptionalToggle =
    item &&
    !isEnemy(item) &&
    !isScreenshotMode &&
    isEditable &&
    onToggleOptional &&
    onClick

  const clickShowsInfo =
    !isEditable &&
    item &&
    onItemInfoClick &&
    !isEnemy(item) &&
    isToggled === undefined

  let buttonClickAction = clickShowsInfo ? () => onItemInfoClick(item) : onClick

  return (
    <div
      className={cn(
        'relative flex items-start justify-center',
        size === 'sm' && 'mb-0 flex-row justify-start',
        size === 'md' && 'mb-2 w-[66px] flex-col',
        size === 'lg' && 'mb-2 w-[99px] flex-col',
        size === 'xl' && 'mb-2 w-[200px] flex-col',
        size === 'wide' && 'mb-2 w-[149px] flex-col',
        isToggled === true && 'grayscale-0',
        isToggled === false && 'grayscale',
      )}
      suppressHydrationWarning
    >
      {!isScreenshotMode && item && onItemInfoClick && (
        <Tooltip
          content={tooltipDescription}
          trigger="mouseenter"
          interactive={false}
          disabled={tooltipDisabled}
        >
          <button
            className={cn(
              'absolute right-0 top-0 rounded-full border-transparent bg-black',
              ZINDEXES.ITEM_BUTTON,
              size === 'sm' && 'right-[-20px]',
            )}
            onClick={() =>
              onItemInfoClick && !isEnemy(item) && onItemInfoClick(item)
            }
            aria-label="Item Information"
          >
            <IoInformationCircleSharp
              className={cn(
                'h-4 w-4 text-accent1-500',
                (size === 'lg' || size === 'xl') && 'h-5 w-5',
              )}
            />
          </button>
        </Tooltip>
      )}
      {showOptionalToggle && (
        <Tooltip
          content={`Toggle item as optional`}
          trigger="mouseenter"
          interactive={false}
          disabled={tooltipDisabled}
        >
          <button
            className={cn(
              'absolute left-0 top-0 rounded-full border-transparent bg-black',
              ZINDEXES.ITEM_BUTTON,
              size === 'sm' && 'left-auto right-[-40px]',
            )}
            onClick={() => onToggleOptional(item, !item.optional)}
            aria-label="Toggle item as optional"
          >
            <TbHttpOptions className="h-4 w-4 text-accent1-500" />
          </button>
        </Tooltip>
      )}
      <button
        onClick={buttonClickAction}
        className={cn(
          'relative z-0 flex items-center justify-center overflow-hidden border-2 border-secondary-900',
          `bg-background-solid`,
          // if the button is editable, give it a hover effect
          isEditable && 'border-secondary-900 hover:border-secondary-500',
          // if no item is present, give the button a rounded bordoer
          !item && size !== 'sm' && 'rounded-b-lg',
          !item && size === 'sm' && 'rounded-md',
          // if the item is optional, give it a dashed border
          item &&
            !isEnemy(item) &&
            item.optional &&
            'border-b-0 border-dashed border-secondary-400',
          // if the item is optional and the size is small, remove the right border and add a bottom border
          item &&
            !isEnemy(item) &&
            item.optional &&
            size === 'sm' &&
            'border-b-2 border-r-0',
          // If the item is an archetype item, give it a black background
          item &&
            !isEnemy(item) &&
            ArchetypeItem.isArchetypeItem(item) &&
            'bg-black',
          size === 'sm' && 'h-[23px] w-[22px] rounded-l-md',
          size === 'md' && 'h-[66px] w-[66px] rounded-t-lg',
          size === 'lg' && 'h-[99px] w-[99px] rounded-t-lg',
          size === 'xl' && 'h-[200px] w-[200px] rounded-t-lg',
          size === 'wide' && 'h-[99px] w-[149px] rounded-t-lg',
          // If the item is toggled, give it a primary border
          isToggled === true && 'border-primary-500',
          isToggled === false && 'border-gray-700',
        )}
        aria-label="Remnant 2 Item Button"
        suppressHydrationWarning
      >
        {item && (
          <Image
            src={getImageUrl(item.imagePath ?? '')}
            alt={`${item.name} icon`}
            loading={loadingType}
            width={imageSize.width}
            height={imageSize.height}
            quality={74}
            unoptimized={unoptimized}
          />
        )}
      </button>

      {item?.name && (
        <div
          className={cn(
            'flex items-center justify-center border-2 border-secondary-900 bg-secondary-900 px-1 py-0.5 text-center text-[10px] text-gray-100',
            MANUAL_ITEM_NAME_TEXT_TRANSFORMS.some(
              (i) => i.name === item.name,
            ) && 'text-[9px]',
            size === 'sm' && 'min-h-[22px] min-w-[22px] rounded-r-lg text-left',
            size === 'md' && 'min-h-[49px] w-[66px] rounded-b-lg',
            size === 'lg' && 'min-h-[40px] w-[99px] rounded-b-lg',
            size === 'xl' && 'text-md min-h-[40px] w-[200px] rounded-b-lg',
            size === 'wide' && 'min-h-[22px] w-[149px] rounded-b-lg',
          )}
        >
          {manualWordBreaks
            ? MANUAL_ITEM_NAME_BREAKS.find((b) => b.name === item.name)
                ?.break || item.name
            : item.name}
        </div>
      )}
    </div>
  )
}
