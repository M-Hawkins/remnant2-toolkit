import { RelicItem } from './types/RelicItem'

export const relicItems: RelicItem[] = [
  {
    category: 'relic',
    name: 'Bloodless Heart',
    imagePath: '/relic/bloodless_heart.png',
    id: 'LQho3X',
    dlc: 'dlc2',
    description: `Innate 50% Use Speed bonus. One use, grants a SHIELD that prevents nearly all damage for 3s.

    Cannot prevent certain death mechanics`,
    wikiLinks: [`https://remnant.wiki/Bloodless_Heart`],
  },
  {
    category: 'relic',
    name: 'Blooming Heart',
    imagePath: '/relic/blooming_heart.png',
    id: 'soyjpp',
    description: `On use, heals the user for 35% of caster's Max Health over 5s. Spawns 3 Healing Orbs which grant 35% of caster's Max Health over 5s. Orbs last 20s. Recasting removes previous Orbs`,
    wikiLinks: [`https://remnant.wiki/Blooming_Heart`],
  },
  {
    category: 'relic',
    name: 'Broken Heart',
    imagePath: '/relic/broken_heart.png',
    dlc: 'dlc1',
    id: 'm71h9m',
    // TODO check wording
    description: `Innate 50% Use Speed Bonus. On use, sets current Health to 50% of max Health over 0.25s. Innate -2.0 Health Regeneration if above 50% Health.`,
    wikiLinks: [`https://remnant.wiki/Broken_Heart`],
  },
  {
    category: 'relic',
    name: 'Bloodless Heart',
    imagePath: '/relic/blodless_heart.png',
    dlc: 'dlc2',
    id: 'm71h9s',
    tags:['Relic Use Speed', 'Damage Reduction'],
    description: `Innate 50% Use Speed bonus. One use, grants a SHIELD that prevents nearly all damage for 3s.

    Cannot prevent certain death mechanics`,
    wikiLinks: [`https://remnant.wiki/Bloodless_Heart`],
  },
  {
    category: 'relic',
    name: 'Constrained Heart',
    imagePath: '/relic/constrained_heart1.png',
    id: 'rlezcg',
    description: `On use regenerates 20 Health per second for 5s and grants 2 Stacks of BULWARK while heal is active.`,
    wikiLinks: [`https://remnant.wiki/Constrained_Heart`],
  },
  {
    category: 'relic',
    name: 'Crystal Heart',
    imagePath: '/relic/crystal_heart.png',
    id: '67tfbl',
    description: `On use, regenerates 100% of Max Health over 10s, Movement Speed is reduced by 50%, and incoming damage is reduced by 25%. Lasts 10s.`,
    wikiLinks: [`https://remnant.wiki/Crystal_Heart`],
  },
  {
    category: 'relic',
    name: 'Decayed Heart',
    imagePath: '/relic/decayed_heart.png',
    id: 'vhjydw',
    description: `On use, causes the next 3 instances of enemy damage taken to trigger 40 Health regeneration over 3s. Lasts 30s.`,
    wikiLinks: [`https://remnant.wiki/Decayed_Heart`],
  },
  {
    category: 'relic',
    name: 'Diverting Heart',
    imagePath: '/relic/diverting_heart.png',
    id: '96f26y',
    tags: ['Reduce Skill Cooldown'],
    description: `On use, reduces Skill Cooldowns by 1s for sec. Lasts 15s.`,
    wikiLinks: [`https://remnant.wiki/Diverting_Heart`],
  },
  {
    category: 'relic',
    name: 'Dragon Heart',
    imagePath: '/relic/dragon_heart.png',
    id: 'f96bom',
    description: `On use, heals 70 Health over 0.5s.`,
    wikiLinks: [`https://remnant.wiki/Dragon_Heart`],
  },
  {
    category: 'relic',
    name: 'Enlarged Heart',
    imagePath: '/relic/enlarged_heart1.png',
    id: '4y2xb3',
    description: `Innate double use speed. On use, heals 140 over 0.5s. Relic capacity is halved.`,
    wikiLinks: [`https://remnant.wiki/Enlarged_Heart`],
  },
  {
    category: 'relic',
    name: 'Lifeless Heart',
    imagePath: '/relic/lifeless_heart.png',
    id: 'k1de0f',
    // TODO check wording
    description: `Innade 50% Use speed bonus. Relic capacity is doubled`,
    wikiLinks: [`https://remnant.wiki/Lifeless_Heart`],
  },
  {
    category: 'relic',
    name: 'Paper Heart',
    imagePath: '/relic/paper_heart.png',
    dlc: 'dlc1',
    id: 'n9fm2r',
    // TODO check wording
    description: `On use, heals for up to 100% of current health over 0.1s. Gain 10 Stack of "Paper Heart" for 10 seconds. Dealing 75 Base Damage of any Damage Type Removes 1 Stack of “Paper Health”. After 15s, remaining Stacks are converted to Grey Health (10% per Stack). `,
    wikiLinks: [`https://remnant.wiki/Paper_Heart`],
  },
  {
    category: 'relic',
    name: 'Pulsing Heart',
    imagePath: '/relic/pulsing_heart.png',
    id: 'xfwkzp',
    description: `On use, pulses every 3s, healing allies within 7m for 20 Health over 0.5s per pulse. Lasts 15s.`,
    wikiLinks: [`https://remnant.wiki/Pulsing_Heart`],
  },
  {
    category: 'relic',
    name: 'Quilted Heart',
    imagePath: '/relic/quilted_heart.png',
    id: '4v7sf3',
    description: `Does not provide standard healing. On use, negates Stamina Drain and cause Evades to heal for 15 Health over 0.25s. Lasts 20s.`,
    wikiLinks: [`https://remnant.wiki/Quilted_Heart`],
  },
  {
    category: 'relic',
    name: 'Profane Heart',
    imagePath: '/relic/profane_heart.png',
    id: '4v7sf4',
    dlc: 'dlc2',
    tags: ['Lifesteal'],
    description: `Innate 3% Lifesteal bonus. On use, increases all Lifesteal Efficacy by 50% for 15s.`,
    wikiLinks: [`https://remnant.wiki/Profane_Heart`],
  },
  {
    category: 'relic',
    name: 'Reprocessed Heart',
    imagePath: '/relic/reprocessed_heart.png',
    id: '06pxhy',
    tags: ['Grey Health'],
    description: `On use, converts 5 Health as Grey Health to 40 Mod Power per second for 25s for Both Weapons. Cannot die from conversion.`,
    wikiLinks: [`https://remnant.wiki/Reprocessed_Heart`],
  },
  {
    category: 'relic',
    name: 'Resonating Heart',
    imagePath: '/relic/resonating_heart.png',
    id: '6ruk95',
    description: `On use, regenerates 50% of Max Health over 5s. When heal ends, any overhealed Health is Doubled and awarded over the next 20s.`,
    wikiLinks: [`https://remnant.wiki/Resonating_Heart`],
  },
  {
    category: 'relic',
    name: 'Ripened Heart',
    imagePath: '/relic/ripened_heart.png',
    id: '5azu1p',
    description: `On use, heals 35 Health over 0.5s and an additional 70 over 5s.`,
    wikiLinks: [`https://remnant.wiki/Ripened_Heart`],
  },
  {
    category: 'relic',
    name: 'Runed Heart',
    imagePath: '/relic/runed_heart.png',
    id: 'yb7v4c',
    description: `On use, increases Health Regeneration by 5 and generates 500 Mod Power over 10s.`,
    wikiLinks: [`https://remnant.wiki/Runed_Heart`],
  },
  {
    category: 'relic',
    name: 'Salvaged Heart',
    imagePath: '/relic/salvaged_heart.png',
    id: '2rnl2d',
    description: `Innate 25% Use Speed bonus. On use, heals 30 Health over 0.25s and restore 300% of current Grey Health.`,
    wikiLinks: [`https://remnant.wiki/Salvaged_Heart`],
  },
  {
    category: 'relic',
    name: 'Shielded Heart',
    imagePath: '/relic/shielded_heart.png',
    id: 'sge99k',
    description: `On use, grants a SHIELD for 100% of Current Health. Lasts 20s or until SHIELD is removed by damage`,
    wikiLinks: [`https://remnant.wiki/Shielded_Heart`],
  },
  {
    category: 'relic',
    name: 'Siphon Heart',
    imagePath: '/relic/siphon_heart.png',
    id: '3awf5n',
    description: `On use, grants 10% of base damage dealt as Lifesteal for 15s.`,
    wikiLinks: [`https://remnant.wiki/Siphon_Heart`],
  },
  {
    category: 'relic',
    name: 'Tormented Heart',
    imagePath: '/relic/tormented_heart.png',
    id: 'rtmajx',
    description: `Innate 25% Use Speed bonus. On use, deals 420 Explosive damage [E] to enemies within 10m [A] and Lifesteals 20% of damage dealt.`,
    wikiLinks: [`https://remnant.wiki/Tormented_Heart`],
  },
  {
    category: 'relic',
    name: 'Tranquil Heart',
    imagePath: '/relic/tranquil_heart.png',
    id: 'thgp2z',
    description: `Passively grants 2 Health Regeneration per second. On use, doubles All Health Regeneration for 15s.`,
    wikiLinks: [`https://remnant.wiki/Tranquil_Heart`],
  },
  {
    category: 'relic',
    name: 'Unsullied Heart',
    imagePath: '/relic/unsullied_heart.png',
    id: 'pj4ika',
    description: `On use, heals for 100% of Current Health over 0.5s.`,
    wikiLinks: [`https://remnant.wiki/Unsullied_Heart`],
  },
  {
    category: 'relic',
    name: 'Void Heart',
    imagePath: '/relic/void_heart.png',
    id: 'weaetb',
    description: `On use, reduces incoming damage by 50% for 4s. When buff ends, heals 100% of missing Health over 0.75s.`,
    wikiLinks: [`https://remnant.wiki/Void_Heart`],
  },
]
