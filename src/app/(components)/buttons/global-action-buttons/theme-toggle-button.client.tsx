import { PaintBrushIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'

import { BaseButton } from '@/app/(components)/_base/button'
import { useState } from 'react'
import { BaseDialog } from '../../_base/dialog'
import { BaseListbox, BaseListboxOption, BaseListboxLabel } from '../../_base/listbox'
import { ColorThemes } from '../../theme-selection.client'

// WARNING: This component is not hydration-safe
// https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
export default function ToggleThemeButton() {
  const { theme, setTheme } = useTheme()
  const [isDialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <BaseButton onClick={() => setDialogOpen(!isDialogOpen)} color="dark/white">
        <PaintBrushIcon className="h-5 w-5" />
      </BaseButton>
      <BaseDialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <BaseListbox name="colorTheme" value={theme} onChange={setTheme}>
            {ColorThemes.map((selectedTheme) => (
                <BaseListboxOption key={selectedTheme.key} value={selectedTheme.key}>
                    <BaseListboxLabel>{selectedTheme.displayName}</BaseListboxLabel>
                </BaseListboxOption>
            ))}
        </BaseListbox>
      </BaseDialog>
    </>
  )
}