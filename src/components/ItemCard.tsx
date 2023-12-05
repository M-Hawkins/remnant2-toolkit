import { capitalize, cn } from '@/lib/utils'
import type { Item, ItemType, LoadoutItem } from '@/types'
import Image from 'next/image'

export interface ItemCardProps {
  footer?: React.ReactNode
  item: Item | LoadoutItem | null
  type?: ItemType
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'blue'
  onClick?: () => void
}

function CardImage({
  item,
  variant,
  size,
}: {
  item: ItemCardProps['item']
  variant: ItemCardProps['variant']
  size: ItemCardProps['size']
}) {
  return (
    <div
      className={cn(
        'relative flex w-full grow items-center justify-center',
        variant === 'default'
          ? "bg-[url('https://d2sqltdcj8czo5.cloudfront.net/card-body-bg.jpg')]"
          : "bg-[url('https://d2sqltdcj8czo5.cloudfront.net/card-body-bg-blue.jpg')]",
        size === 'sm' && 'h-[64px]',
        size === 'md' && 'h-[96px]',
        size === 'lg' && 'h-[128px]',
      )}
    >
      {item && (
        <Image
          src={`https://d2sqltdcj8czo5.cloudfront.net${item.path}`}
          alt={item.name}
          className="pointer-events-none h-full max-h-full w-auto max-w-full"
          width={64}
          height={64}
        />
      )}
    </div>
  )
}

export default function ItemCard({
  item,
  type,
  size = 'md',
  footer,
  variant = 'default',
  onClick,
}: ItemCardProps) {
  return (
    <div className="relative w-full min-w-full">
      <div
        className={cn(
          'flex w-full min-w-full flex-col items-center justify-center',
        )}
      >
        <div
          className={cn(
            "w-full bg-[url('https://d2sqltdcj8czo5.cloudfront.net/card-title-bg.jpg')] p-2 text-center",
            size === 'sm' && 'h-[42px]',
            size === 'md' && 'h-[64px]',
            size === 'lg' && 'h-[80px]',
          )}
        >
          <h3
            className={cn(
              'text-purple-400',
              size === 'sm' && 'text-xs',
              size === 'md' && 'text-md',
              size === 'lg' && 'text-lg',
            )}
          >
            {item?.name}
          </h3>
          <p
            className={cn(
              'text-[#ff9900]',
              size === 'sm' && 'text-[10px]',
              size === 'md' && 'text-sm',
              size === 'lg' && 'text-md',
            )}
          >
            {item?.type ? capitalize(item.type) : capitalize(type || '')}
          </p>
        </div>
        {onClick ? (
          <button
            onClick={onClick}
            className="h-full max-h-full w-full max-w-full"
          >
            <CardImage item={item} variant={variant} size={size} />
          </button>
        ) : (
          <CardImage item={item} variant={variant} size={size} />
        )}

        {footer && (
          <div className="flex w-full items-center justify-center bg-[url('https://d2sqltdcj8czo5.cloudfront.net/card-footer-bg-darker.jpg')] p-1">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
