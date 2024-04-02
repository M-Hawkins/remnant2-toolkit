import { XMarkIcon } from '@heroicons/react/24/solid'

import { SearchInput } from '@/features/ui/SearchInput'
import { cn } from '@/lib/classnames'

interface Props {
  searchText: string
  showLabel?: boolean
  onApplyFilters: () => void
  onChange: (searchQuery: string) => void
}

export function SearchBuildsFilter({
  searchText,
  showLabel = false,
  onApplyFilters,
  onChange,
}: Props) {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-x-4 gap-y-2">
      <div
        className={cn(
          'flex w-full items-center justify-start text-left text-sm font-bold text-primary-500',
          !showLabel && 'sr-only',
        )}
      >
        By Build Name, Builder Name, or Description
      </div>

      <div className="relative flex w-full flex-row items-center shadow-sm">
        <SearchInput
          onKeyDown={onApplyFilters}
          onChange={onChange}
          value={searchText}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {searchText && (
            <button onClick={() => onChange('')} aria-label="Clear search text">
              <XMarkIcon
                className="h-5 w-5 text-primary-400"
                aria-hidden="true"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
