import { Item } from '@/app/(data)/items/types'
import { ReleaseKey } from '@/app/(data)/releases/types'
import { ItemLocation } from '@/app/(types)/locations'

export type EnemyCategory =
  | 'add'
  | 'enemy'
  | 'boss'
  | 'world boss'
  | 'aberration'

export type BossCategory = 'boss' | 'world boss' | 'aberration'

export interface Enemy {
  id: string
  name: string
  imagePath?: string
  dlc?: ReleaseKey
  category: EnemyCategory
  location?: ItemLocation
  wikiLinks: string[]
  bleedResistance?: number | 'immune'
  fireResistance?: number | 'immune'
  shockResistance?: number | 'immune'
  acidResistance?: number | 'immune'
  meleeResistance?: number | 'immune'
  notes?: string
  showOnTracker?: boolean
}

export function isEnemy(enemy: Enemy | Item): enemy is Enemy {
  return (
    enemy.category === 'enemy' ||
    enemy.category === 'boss' ||
    enemy.category === 'world boss' ||
    enemy.category === 'aberration' ||
    enemy.category === 'add'
  )
}
