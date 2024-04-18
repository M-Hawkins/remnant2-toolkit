import { DEFAULT_TRAIT_AMOUNT } from '@/features/build/constants'

import { TraitItem } from './types/TraitItem'

export const traitItems: TraitItem[] = [
  {
    category: 'trait',
    name: 'Affliction',
    imagePath: '/trait/affliction.png',
    id: 'dj8zx4',
    tags: ['Status Effect', 'Status Duration'],
    description: `Increases STATUS EFFECT duration against enemies by 10%.`,
    maxLevelBonus: `At max level, Affliction Increases STATUS EFFECT duration against enemies by +100%
    However, it does NOT increase a Status Total Damage, effectively reducing Status Damage by 1/2.`,
    wikiLinks: [`https://remnant.wiki/Affliction`],
    linkedItems: {
      archetype: {
        name: 'Ritualist',
      },
    },
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Ammo Reserves',
    imagePath: '/trait/ammo_reserves.png',
    id: 'wu3w8t',
    tags: ['Ammo Reserves'],
    description: `Increases Ammo Reserves`,
    maxLevelBonus: `At max level, Ammo Reserves Increases Ammo Reserves by +50%`,
    wikiLinks: [`https://remnant.wiki/Ammo_Reserves`],
    linkedItems: {
      archetype: {
        name: 'Gunslinger',
      },
    },
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Amplitude',
    imagePath: '/trait/amplitude.png',
    id: 'pb5neu',
    description: `Increases AOE Size`,
    maxLevelBonus: `At max level, Amplitude Increases AOE Size by +50%`,
    wikiLinks: [`https://remnant.wiki/Amplitude`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Arcane Strike',
    imagePath: '/trait/arcane_strike.png',
    id: '6o5ckl',
    tags: ['Mod Power', 'Melee Damage'],
    description: `Increases Mod Power Generation from Melee Damage`,
    maxLevelBonus: `At max level, Arcane Strike Increases Mod Power Generation from Melee Damage by 50%`,
    wikiLinks: [`https://remnant.wiki/Arcane_Strike`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Barkskin',
    imagePath: '/trait/barkskin.png',
    id: '2vgobq',
    tags: ['Damage Reduction'],
    description: `Reduces ALL incoming Damage`,
    maxLevelBonus: `At max level, Barkskin Reduces ALL incoming Damage by 10%`,
    wikiLinks: [`https://remnant.wiki/Barkskin`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Blood Bond',
    imagePath: '/trait/blood_bond.png',
    id: '1ke6u2',
    tags: ['Summon', 'Damage Reduction'],
    description: `Archetype Summons absorb X% of damage taken by the caster`,
    maxLevelBonus: `At max level, Blood Bond Summons absorb 10% of damage taken by the caster`,
    wikiLinks: [`https://remnant.wiki/Blood_Bond`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Bloodstream',
    imagePath: '/trait/bloodstream.png',
    id: 'yvttbq',
    tags: ['Grey Health'],
    description: `Increases Grey Health regen`,
    maxLevelBonus: `At max level, Bloodstream Increases Grey Health regen by 3.0/s`,
    wikiLinks: [`https://remnant.wiki/Bloodstream`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Dark Pact',
    imagePath: '/trait/dark_pact.png',
    id: 'mjkf4t',
    tags: ['Grey Health'],
    description: `Reduces GREY HEALTH regen rate by 9%`,
    maxLevelBonus: `At max level, Dark Pact Reduces GREY HEALTH regen rate by -90%`,
    wikiLinks: [`https://remnant.wiki/Dark_Pact`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Endurance',
    imagePath: '/trait/endurance.png',
    id: 'wgzz0q',
    tags: ['Stamina'],
    description: `Increases Maximum Stamina`,
    maxLevelBonus: `At max level, Endurance Increases Max Stamina by 30`,
    wikiLinks: [`https://remnant.wiki/Endurance`],
    amount: DEFAULT_TRAIT_AMOUNT,
    staminaStep: 3,
  },
  {
    category: 'trait',
    name: 'Expertise',
    imagePath: '/trait/expertise.png',
    id: '6kxk5x',
    tags: ['Reduce Skill Cooldown'],
    description: `Reduces Skill Cooldowns`,
    maxLevelBonus: `At max level, Expertise Reduces Skill Cooldown by -20%`,
    wikiLinks: [`https://remnant.wiki/Expertise`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Fitness',
    imagePath: '/trait/fitness.png',
    id: 'qcvmt0',
    tags: ['Neutral Dodge', 'Perfect Dodge', 'Perfect Neutral Evade'],
    description: `Increases Evade Distance`,
    maxLevelBonus: `At max level, Fitness Increases Evade Distance by +30%`,
    wikiLinks: [`https://remnant.wiki/Fitness`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Flash Caster',
    imagePath: '/trait/flash_caster.png',
    id: 'm6i4dl',
    tags: ['Mod Cast Speed', 'Skill Cast Speed'],
    description: `Increases Mod and Casting Speed`,
    maxLevelBonus: `At max level, Flash Caster Increases Mod and Casting Speed by 50%`,
    wikiLinks: [`https://remnant.wiki/Flash_Caster`],
    linkedItems: {
      archetype: {
        name: 'Archon',
      },
    },
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Footwork',
    imagePath: '/trait/footwork.png',
    id: 'ay1dkh',
    tags: ['Movement Speed'],
    description: `Increases Movement Speed while Aiming`,
    maxLevelBonus: `At max level, Footwork Increases Movement Speed while Aiming by +50%`,
    wikiLinks: [`https://remnant.wiki/Footwork`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Fortify',
    imagePath: '/trait/fortify.png',
    id: 'osj7se',
    tags: ['Armor Increase', 'Damage Reduction'],
    description: `Increases Armor Effectiveness`,
    maxLevelBonus: `At max level, Fortify Increases Armor Effectiveness by 50%`,
    wikiLinks: [`https://remnant.wiki/Fortify`],
    linkedItems: {
      archetype: {
        name: 'Engineer',
      },
    },
    armorStepPercent: 0.05,
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Glutton',
    imagePath: '/trait/glutton.png',
    id: 'cvsois',
    tags: ['Relic Use Speed'],
    description: `Increases the Use Speed of Consumables and Relics`,
    maxLevelBonus: `At max level, Glutton Increases the Use Speed of Consumables and Relics by +30%`,
    wikiLinks: [`https://remnant.wiki/Glutton`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Handling',
    imagePath: '/trait/handling.png',
    id: '8baa52',
    tags: ['Spread', 'Recoil'],
    description: `Reduces Weapon Spread and Recoil`,
    maxLevelBonus: `At max level, Handling Reduces Weapon Spread and Recoil by 40%`,
    wikiLinks: [`https://remnant.wiki/Handling`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Kinship',
    imagePath: '/trait/kinship.png',
    id: 'vn3gsg',
    tags: ['Damage Reduction'],
    description: `Reduces Friendly Fire damage dealt and received`,
    maxLevelBonus: `At max level, Kinship Reduces Friendly Dealt and Received by 80%`,
    wikiLinks: [`https://remnant.wiki/Kinship`],
    linkedItems: {
      archetype: {
        name: 'Handler',
      },
    },
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Longshot',
    imagePath: '/trait/longshot.png',
    id: '157qcj',
    tags: ['Range'],
    description: `Increases Weapon Ideal Range`,
    maxLevelBonus: `At max level, Longshot Increases Weapon Ideal Range by 600(cm)`,
    wikiLinks: [`https://remnant.wiki/Longshot`],
    linkedItems: {
      archetype: {
        name: 'Hunter',
      },
    },
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  // {
  //   category: 'trait',
  //   name: 'Parasitic',
  //   id: 'v6JuVn',
  //   imagePath: '',
  //   description: '',
  //   maxLevelBonus: '',
  //   wikiLinks: [''],
  // },
  {
    category: 'trait',
    name: 'Potency',
    imagePath: '/trait/potency.png',
    id: 'v1uiyd',
    tags: ['Concoction'],
    description: `Increases Consumable Duration`,
    maxLevelBonus: `At max level, Potency Increases Consumable Duration by 100%`,
    wikiLinks: [`https://remnant.wiki/Potency`],
    linkedItems: {
      archetype: {
        name: 'Alchemist',
      },
    },
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Recovery',
    imagePath: '/trait/recovery.png',
    id: '7z3ejv',
    tags: ['Stamina'],
    description: `Increases Stamina Regen`,
    maxLevelBonus: `At max level, Recovery Increases Stamina Regen by 30/s`,
    wikiLinks: [`https://remnant.wiki/Recovery`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Regrowth',
    imagePath: '/trait/regrowth.png',
    id: 'ysp1wu',
    tags: ['Health'],
    description: `Increases Health Regeneration`,
    maxLevelBonus: `At max level, Regrowth Increases Health Regen by 1.5/s`,
    wikiLinks: [`https://remnant.wiki/Regrowth`],
    linkedItems: {
      archetype: {
        name: 'Summoner',
      },
    },
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Resonance',
    imagePath: '/trait/resonance.png',
    id: 'dmizlm',
    description: `Increases Aura Size`,
    maxLevelBonus: `At max level, Resonance Increases Aura Size by +50%`,
    wikiLinks: [`https://remnant.wiki/Resonance`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Revivalist',
    imagePath: '/trait/revivalist.png',
    id: 'a4idgl',
    description: `Increases the Speed of Reviving and being Revived`,
    maxLevelBonus: `At max level, Revivalist Increases the Speed of Reviving and being Revived by +50%`,
    wikiLinks: [`https://remnant.wiki/Revivalist`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Rugged',
    imagePath: '/trait/rugged.png',
    id: 'ykxzf1',
    tags: ['Summon'],
    description: `Increases the Health of Archetype Summons`,
    maxLevelBonus: `At max level, Rugged Increases the Health of Archetype Summons by +100%`,
    wikiLinks: [`https://remnant.wiki/Rugged`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Scholar',
    imagePath: '/trait/scholar.png',
    id: '6j7cn1',
    description: `Increases Experience Gain`,
    maxLevelBonus: `At max level, Scholar Increases Experience Gain by +15%`,
    wikiLinks: [`https://remnant.wiki/Scholar`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Shadeskin',
    imagePath: '/trait/shadeskin.png',
    id: 'jk0ot9',
    tags: ['Damage Reduction'],
    description: `Increases Resistance to Elemental Status Effect Damage`,
    maxLevelBonus: `At max level, Shadeskin Increases Resistance to Elemental Status Effect Damage by 20%`,
    wikiLinks: [`https://remnant.wiki/Shadeskin`],
    // Increases by 2% per level, but since 10 fire resistance is 10%
    // we add the percentage
    elementalResistanceStep: 2,
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Siphoner',
    imagePath: '/trait/siphoner.png',
    id: 'x9umnf',
    tags: ['Lifesteal'],
    description: `Increases Lifesteal`,
    maxLevelBonus: `At max level, Siphoner grants 3.0% base damage as Lifesteal.`,
    wikiLinks: [`https://remnant.wiki/Siphoner`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Spirit',
    imagePath: '/trait/spirit.png',
    id: 'p4b2v6',
    tags: ['Mod Power'],
    description: `Increases Mod Power Generation`,
    maxLevelBonus: `At max level, Spirit Increases Mod Power Generation by 20%`,
    wikiLinks: [`https://remnant.wiki/Spirit`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Strong Back',
    imagePath: '/trait/strong_back.png',
    id: 'sd2hry',
    tags: ['Neutral Dodge', 'Perfect Dodge', 'Perfect Neutral Evade'],
    description: `Reduces dodge weight threshold (incrementing the weight you can carry before increasing your dodge class).`,
    maxLevelBonus: `At max level, Strong Back Reduces weight threshold by 15`,
    wikiLinks: [`https://remnant.wiki/Strong_Back`],
    linkedItems: {
      archetype: {
        name: 'Challenger',
      },
    },
    weightThresholds: [2, 3, 5, 6, 8, 9, 11, 12, 14, 15],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Swiftness',
    imagePath: '/trait/swiftness.png',
    id: '3ochlm',
    tags: ['Movement Speed'],
    description: `Increases movement`,
    maxLevelBonus: `At max level, Swiftness Increases all Movement Speed by 15%`,
    wikiLinks: [`https://remnant.wiki/Swiftness`],
    linkedItems: {
      archetype: {
        name: 'Explorer',
      },
    },
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Triage',
    imagePath: '/trait/triage.png',
    id: 'pbak5a',
    tags: ['Heal', 'Healing Effectivness'],
    description: `Increases Healing done by all sources, including Relics, skills, equipment, and weapon mods. `,
    maxLevelBonus: `At max level, Triage Increases healing by 50%`,
    wikiLinks: [`https://remnant.wiki/Triage`],
    linkedItems: {
      archetype: {
        name: 'Medic',
      },
    },
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Untouchable',
    imagePath: '/trait/untouchable.png',
    id: 'pkmmg6',
    tags: ['Neutral Dodge', 'Perfect Dodge', 'Perfect Neutral Evade'],
    description: `Increases Evade Window`,
    maxLevelBonus: `At max level, Untouchable Increases Evade Window by 30%`,
    wikiLinks: [`https://remnant.wiki/Untouchable`],
    linkedItems: {
      archetype: {
        name: 'Invader',
      },
    },
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Vigor',
    imagePath: '/trait/vigor.png',
    id: 'o6mx2t',
    tags: ['Health'],
    description: `Increases Maximum Health`,
    maxLevelBonus: `At max level, Vigor Increases Max Health by 30`,
    wikiLinks: [`https://remnant.wiki/Vigor`],
    healthStep: 3,
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Wayfarer',
    imagePath: '/trait/wayfarer.png',
    id: 'b3rey4',
    tags: ['Movement Speed'],
    description: `Increases Environment Movement Speed (Vaulting, Ladders, Wading)`,
    maxLevelBonus: `At max level, Wayfarer Increeses Traversal Movement by +50%`,
    wikiLinks: [`https://remnant.wiki/Wayfarer`],
    amount: DEFAULT_TRAIT_AMOUNT,
  },
  {
    category: 'trait',
    name: 'Gifted',
    imagePath: '/trait/gifted-placeholder.png',
    id: 'c9af3B',
    dlc: 'dlc2',
    tags: [],
    description: 'Increases Skill Duration',
    maxLevelBonus: 'At max level, Gifted increases Skill Duration by +30%',
    wikiLinks: [],
    amount: DEFAULT_TRAIT_AMOUNT,
    linkedItems: {
      archetype: {
        name: 'Invoker',
      },
    },
  },
]
