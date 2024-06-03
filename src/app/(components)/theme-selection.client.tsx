'use client'

import { ThemeProvider } from 'next-themes'

export interface ColorThemeProps {
  displayName: string
  key: string
  baseTheme: "system" | "light" | "dark"
  customThemes: string[]
}

export const ColorThemes: ColorThemeProps[] = [
  {
      displayName: "Default (Follow system preference)",
      key: "system",
      baseTheme: "system",
      customThemes: [],
  }, 
  {
      displayName: "Default (Light)",
      key: "light",
      baseTheme: "light",
      customThemes: [],
  },
  {
      displayName: "Default (Dark)",
      key: "dark",
      baseTheme: "dark",
      customThemes: [],
  },
  {
      displayName: "Nord Snow (Light)",
      key: "nord-snow",
      baseTheme: "light",
      customThemes: ["nord-snow"],
  },
  {
      displayName: "Nord Polar (Dark)",
      key: "nord-polar",
      baseTheme: "dark",
      customThemes: ["nord-polar"],
  },
  {
      displayName: "Solarized (Light)",
      key: "solarized-light",
      baseTheme: "light",
      customThemes: ["solarized-base", "solarized-light"],
  },
  {
      displayName: "Solarized (Dark)",
      key: "solarized-dark",
      baseTheme: "dark",
      customThemes: ["solarized-base", "solarized-dark"],
  },
] as const
export type ColorTheme = typeof ColorThemes[number]
let colorThemes: Record<string, string> = {}
ColorThemes.forEach(({ key, baseTheme, customThemes }) => colorThemes[key] = [baseTheme, ...customThemes].join(" "))

export default function ThemeSelection({ children }: { children: React.ReactNode }) {
  // By default: enableSystem is true and is the default theme
  return (
    <ThemeProvider
      themes={Object.keys(colorThemes)}
      value={colorThemes}
    >
      {children}
    </ThemeProvider>
  )
}