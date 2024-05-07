import { z } from 'zod'

import { BuildState } from '@/features/build/types'

// Leaving this here in case we need to revert
// TODO remove maybe?

export const oldBuildStateSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  isPatchAffected: z.boolean().nullable(),
  isPublic: z.boolean().nullable(),
  buildLink: z.string().nullable(),
  buildTags: z
    .array(
      z.object({
        tag: z.string(),
      }),
    )
    .nullable(),
  buildId: z.string().nullable(),
  isFeaturedBuild: z.boolean().nullable(),
  createdById: z.string().nullable(),
  upvoted: z.boolean().nullable(),
  items: z.object({
    helm: z.any(),
    torso: z.any(),
    legs: z.any(),
    gloves: z.any(),
    relic: z.any(),
    amulet: z.any(),
    weapon: z.array(z.any()),
    ring: z.array(z.any()),
    archetype: z.array(z.any()),
    skill: z.array(z.any()),
    concoction: z.array(z.any()),
    consumable: z.array(z.any()),
    mod: z.array(z.any()),
    mutator: z.array(z.any()),
    relicfragment: z.array(z.any()),
    trait: z.array(z.any()),
    perk: z.array(z.any()),
  }),
})

const baseItemShape = {
  id: z.string(),
  name: z.string(),
  category: z.enum([
    'helm',
    'torso',
    'legs',
    'gloves',
    'relic',
    'amulet',
    'weapon',
    'archetype',
    'concoction',
    'consumable',
    'mod',
    'mutator',
    'relicfragment',
    'ring',
    'skill',
    'trait',
    'perk',
  ]),
  dlc: z.enum(['base', 'dlc1', 'dlc2']),
  imagePath: z.string(),
  saveFileSlug: z.string().optional(),
  description: z.string().optional(),
  cooldown: z.number().optional(),
  wikiLinks: z.array(z.string()).optional(),
  health: z.number().optional(),
  healthPercent: z.number().optional(),
  healthCap: z.number().optional(),
  stamina: z.number().optional(),
  staminaPercent: z.number().optional(),
  armor: z.number().optional(),
  armorPercent: z.number().optional(),
  weight: z.number().optional(),
  weightPercent: z.number().optional(),
  weightThreshold: z.number().optional(),
  bleedResistance: z.number().optional(),
  bleedResistancePercent: z.number().optional(),
  fireResistance: z.number().optional(),
  fireResistancePercent: z.number().optional(),
  shockResistance: z.number().optional(),
  shockResistancePercent: z.number().optional(),
  blightResistance: z.number().optional(),
  blightResistancePercent: z.number().optional(),
  toxinResistance: z.number().optional(),
  toxinResistancePercent: z.number().optional(),
}

const armorItemSchema = z.object({
  ...baseItemShape,
  category: z.enum(['helm', 'torso', 'legs', 'gloves']),
  set: z.string().optional(),
})

const relicItemSchema = z.object({
  ...baseItemShape,
  category: z.enum(['relic']),
})

const amuletItemSchema = z.object({
  ...baseItemShape,
  category: z.enum(['amulet']),
})

export function validateBuildState(buildState: any) {
  const buildStateSchema: z.ZodType<BuildState> = z.object({
    name: z.string(),
    description: z.string().nullable(),
    isPatchAffected: z.boolean(),
    isPublic: z.boolean(),
    buildLink: z.string().nullable(),
    buildTags: z
      .array(
        z.object({
          id: z.string(),
          tag: z.enum([
            'Melee',
            'Ranged',
            'Mods',
            'Skills',
            'StatusEffects',
            'Tank',
            'Support',
          ]),
          buildId: z.string(),
          createdAt: z.date(),
          updatedAt: z.date().nullable(),
        }),
      )
      .nullable(),
    buildId: z.string().nullable(),
    isFeaturedBuild: z.boolean(),
    dateFeatured: z.date().nullable(),
    isMember: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date().nullable(),
    createdById: z.string().nullable(),
    createdByDisplayName: z.string().nullable(),
    upvoted: z.boolean(),
    thumbnailUrl: z.string().nullable(),
    videoUrl: z.string().nullable(),
    totalUpvotes: z.number(),
    reported: z.boolean(),
    items: z.object({
      helm: armorItemSchema.nullable(),
      torso: armorItemSchema.nullable(),
      legs: armorItemSchema.nullable(),
      gloves: armorItemSchema.nullable(),
      relic: relicItemSchema.nullable(),
      amulet: amuletItemSchema.nullable(),
      weapon: z.array(z.any()),
      ring: z.array(z.any()),
      archetype: z.array(z.any()),
      skill: z.array(z.any()),
      concoction: z.array(z.any()),
      consumable: z.array(z.any()),
      mod: z.array(z.any()),
      mutator: z.array(z.any()),
      relicfragment: z.array(z.any()),
      trait: z.array(z.any()),
      perk: z.array(z.any()),
    }),
  })
  return buildStateSchema.safeParse(buildState)
}
