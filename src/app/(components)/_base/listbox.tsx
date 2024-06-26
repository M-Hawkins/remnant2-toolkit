'use client'

import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'

import { ZINDEXES } from '@/app/(components)/z-indexes'

export function BaseListbox<T>({
  className,
  placeholder,
  autoFocus,
  multiple = false,
  'aria-label': ariaLabel,
  children: options,
  ...props
}: {
  className?: string
  placeholder?: React.ReactNode
  autoFocus?: boolean
  'aria-label'?: string
  children?: React.ReactNode
} & Headless.ListboxProps<typeof Fragment, T>) {
  return (
    <Headless.Listbox {...props} multiple={multiple}>
      <Headless.ListboxButton
        autoFocus={autoFocus}
        data-slot="control"
        aria-label={ariaLabel}
        className={clsx([
          className,

          // Basic layout
          'group relative block w-full',

          // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
          'before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-surface-solid before:shadow',

          // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
          'before:hidden',

          // Hide default focus styles
          'focus:outline-none',

          // Focus ring
          'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:data-[focus]:ring-2 sm:after:data-[focus]:ring-blue-500',

          // Disabled state
          'data-[disabled]:opacity-50 before:data-[disabled]:bg-zinc-950/5 before:data-[disabled]:shadow-none',
        ])}
      >
        <Headless.ListboxSelectedOption
          as="span"
          options={options}
          placeholder={
            placeholder && (
              <span className="block truncate text-zinc-500">
                {placeholder}
              </span>
            )
          }
          className={clsx([
            // Basic layout
            'relative block w-full appearance-none rounded-lg py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',

            // Set minimum height for when no value is selected
            'min-h-11 sm:min-h-9',

            // Horizontal padding
            'pl-[calc(theme(spacing[3.5])-1px)] pr-[calc(theme(spacing.7)-1px)] sm:pl-[calc(theme(spacing.3)-1px)]',

            // Typography
            'text-left text-base/6 text-surface-solid placeholder:text-zinc-500 sm:text-sm/6 forced-colors:text-[CanvasText]',

            // Border
            'group-data-[hover]:surface-solid/20 border border-surface-solid/10 group-data-[active]:border-surface-solid/20',

            // Background color
            'bg-surface-solid/5',

            // Invalid state
            'group-data-[invalid]:border-red-600 group-data-[invalid]:group-data-[hover]:border-red-600',

            // Disabled state
            'group-data-[disabled]:border-surface-solid/15 group-data-[disabled]:bg-surface-solid/[2.5%] group-data-[disabled]:opacity-100 data-[hover]:group-data-[disabled]:border-surface-solid/15',
          ])}
        />
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className="size-5 stroke-zinc-400 group-data-[disabled]:stroke-zinc-600 sm:size-4 forced-colors:stroke-[CanvasText]"
            viewBox="0 0 16 16"
            aria-hidden="true"
            fill="none"
          >
            <path
              d="M5.75 10.75L8 13L10.25 10.75"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.25 5.25L8 3L5.75 5.25"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Headless.ListboxButton>
      <Headless.Transition
        as={Fragment}
        leave="transition-opacity duration-100 ease-in pointer-events-none"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Headless.ListboxOptions
          anchor={{
            to: 'selection start',
          }}
          className={clsx(
            // positioning
            'absolute',

            ZINDEXES.LISTBOX_OPTIONS,

            // Anchor positioning
            '[--anchor-offset:-1.625rem] [--anchor-padding:theme(spacing.4)] sm:[--anchor-offset:-1.375rem]',

            // Base styles
            'isolate w-max min-w-[calc(var(--button-width)+1.75rem)] select-none scroll-py-1 rounded-xl p-1',

            // Invisible border that is only visible in `forced-colors` mode for accessibility purposes
            'outline outline-1 outline-transparent focus:outline-none',

            // Handle scrolling when menu won't fit in viewport
            'overflow-y-scroll overscroll-contain',

            // Popover background
            'bg-zinc-800/75 backdrop-blur-xl',

            // Shadows
            'shadow-lg ring-1 ring-inset ring-surface-solid/10',
          )}
        >
          {options}
        </Headless.ListboxOptions>
      </Headless.Transition>
    </Headless.Listbox>
  )
}

export function BaseListboxOption<T>({
  children,
  className,
  ...props
}: { children?: React.ReactNode } & Headless.ListboxOptionProps<'div', T>) {
  const sharedClasses = clsx(
    // Base
    'flex min-w-0 items-center',

    // Icons
    '[&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-zinc-500 [&>[data-slot=icon]]:group-data-[focus]/option:text-surface-solid sm:[&>[data-slot=icon]]:size-4 forced-colors:[&>[data-slot=icon]]:text-[CanvasText] forced-colors:[&>[data-slot=icon]]:group-data-[focus]/option:text-[Canvas]',

    // Avatars
    '[&>[data-slot=avatar]]:size-6 sm:[&>[data-slot=avatar]]:size-5',
  )

  return (
    <Headless.ListboxOption as={Fragment} {...props}>
      {({ selectedOption }) => {
        if (selectedOption) {
          return (
            <div className={clsx(className, sharedClasses)}>{children}</div>
          )
        }

        return (
          <div
            className={clsx(
              // Basic layout
              'group/option grid cursor-default grid-cols-[theme(spacing.5),1fr] items-baseline gap-x-1.5 rounded-lg py-2.5 pl-2.5 pr-3.5 sm:grid-cols-[theme(spacing.4),1fr] sm:py-1.5 sm:pl-2 sm:pr-3',

              // Typography
              'text-base/6 text-surface-solid sm:text-sm/6 forced-colors:text-[CanvasText]',

              // Focus
              'outline-none data-[focus]:bg-blue-500 data-[focus]:text-surface-solid',

              // Forced colors mode
              'forced-color-adjust-none forced-colors:data-[focus]:bg-[Highlight] forced-colors:data-[focus]:text-[HighlightText]',

              // Disabled
              'data-[disabled]:opacity-50',
            )}
          >
            <svg
              className="relative hidden size-5 self-center stroke-current group-data-[selected]/option:inline sm:size-4"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 8.5l3 3L12 4"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={clsx(className, sharedClasses, 'col-start-2')}>
              {children}
            </span>
          </div>
        )
      }}
    </Headless.ListboxOption>
  )
}

export function BaseListboxLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={clsx(
        className,
        'ml-2.5 truncate first:ml-0 sm:ml-2 sm:first:ml-0',
      )}
      {...props}
    />
  )
}

export function BaseListboxDescription({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={clsx(
        className,
        'flex flex-1 overflow-hidden text-zinc-400 before:w-2 before:min-w-0 before:shrink group-data-[focus]/option:text-surface-solid',
      )}
      {...props}
    >
      <span className="flex-1 truncate">{children}</span>
    </span>
  )
}
