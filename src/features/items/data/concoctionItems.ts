import { ConcoctionItem } from '../types/ConcoctionItem'

export const concoctionItems: ConcoctionItem[] = [
  {
    category: 'concoction',
    name: 'Bark Extract',
    imagePath: '/concoction/bark_extract.png',
    id: 'hqjxyn',
    tags: ['Armor Increase', 'Damage Reduction'],
    description: `Increases Armor by 30. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Bark_Extract`],
    armor: 30,
  },
  {
    category: 'concoction',
    name: 'Bottled Shaedberry',
    imagePath: '/concoction/bottled_shaedberry.png',
    id: 'qj302c',
    tags: ['Mod Power'],
    description: `Increases Mod Power Generation by 10%. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Bottled_Shaedberry`],
  },
  {
    category: 'concoction',
    name: 'Chilled Steam',
    imagePath: '/concoction/chilled_steam.png',
    id: 'fhm256',
    tags: ['Movement Speed'],
    description: `Increases Movement Speed by 10%. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Chilled_Steam`],
  },
  {
    category: 'concoction',
    name: 'Dark Cider',
    imagePath: '/concoction/dark_cider.png',
    id: '8p2sj3',
    tags: ['Health', 'Stamina', 'Movement Speed'],
    description: `Increases Health by 6.66%, Stamina by 6.66%, and Movement Speed by 6.66%. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Dark_Cider`],
    healthPercent: 0.0666,
    staminaPercent: 0.0666,
  },
  {
    category: 'concoction',
    name: 'Dark Fluid',
    imagePath: '/concoction/dark_fluid.png',
    id: 'byi9a5',
    tags: ['Perfect Dodge', 'Neutral Dodge', 'Perfect Neutral Evade'],
    description: `Increases Distance of Evade and Combat Slide by 15% and reduces the cost by 20%. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Dark_Fluid`],
  },
  {
    category: 'concoction',
    name: 'Meat Shake',
    imagePath: '/concoction/meat_shake.png',
    id: '4yzeco',
    tags: ['Damage Reduction'],
    description: `Reduces Damage by 8%. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Meat_Shake`],
  },
  {
    category: 'concoction',
    name: "Mudtooth's Elixir",
    imagePath: '/concoction/mudtooths_elixir.png',
    id: 'yduuj3',
    description: `Increases Experience Gains by 15%. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Mudtooth's_Elixir`],
  },
  {
    category: 'concoction',
    name: "Mudtooth's Stew",
    imagePath: '/concoction/mudtooths_stew.png',
    id: '5yrxf1',
    tags: ['Stamina'],
    description: `Increases Max Stamina by 25, Lasts 60m and will stay in effect after death Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Mudtooth's_Stew`],
    stamina: 25,
  },
  {
    category: 'concoction',
    name: "Mudtooth's Tonic",
    imagePath: '/concoction/mudtooths_tonic.png',
    id: 'p0ru94',
    tags: ['Health'],
    description: `Increases Max Health by 25. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Mudtooth%27s_Tonic`],
    health: 25,
  },
  {
    category: 'concoction',
    name: 'Root Water',
    imagePath: '/concoction/root_water.png',
    id: '56vkqr',
    tags: ['Heal'],
    description: `Regenerates 0.75 Health per second. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Root_Water`],
  },
  {
    category: 'concoction',
    name: 'Sacred Lakewater',
    imagePath: '/concoction/sacred_lakewater.png',
    id: 'dk9yg4',
    tags: ['Grey Health', 'Heal'],
    description: `Increases Grey Health Conversion by 50% and Grey Health Regen by 1 per second. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Sacred_Lakewater`],
  },
  {
    category: 'concoction',
    name: 'Sanguine Vapor',
    imagePath: '/concoction/sanguine_vapor.png',
    id: 'kyulid',
    tags: ['Lifesteal'],
    description: `Increases Ranged and Melee Lifesteal by 3.5% of base damage. Increases damage taken by 10%. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Sanguine_Vapor`],
  },
  {
    category: 'concoction',
    name: 'Strong Drink',
    imagePath: '/concoction/strong_drink.png',
    id: 'to2dcw',
    tags: ['Encumbrance'],
    description: `Reduces Encumbrance by 10. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Strong_Drink`],
    weight: -10,
  },
  {
    category: 'concoction',
    name: 'Tranquility Font',
    imagePath: '/concoction/tranquility_font.png',
    id: 'l7r9sm',
    tags: ['Spread', 'Recoil'],
    description: `Reduces Reticle Sway, Spread, and Gun Recoil by 25%. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Tranquility_Font`],
  },
  {
    category: 'concoction',
    name: 'Verdant Tea',
    imagePath: '/concoction/verdant_tea.png',
    id: 'qgare2',
    tags: ['Stamina'],
    description: `Increases Stamina Recovery by 20 per second and reduces Stamina Regen Penalty by 50%. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Verdant_Tea`],
  },
  {
    category: 'concoction',
    name: 'Xenoplasm',
    imagePath: '/concoction/xenoplasm.png',
    id: '2jeq07',
    tags: ['Reduce Skill Cooldown'],
    description: `Reduces Skill Cooldowns by 10%. Lasts 60m and will stay in effect after death. Only one Concoction may be active at a time.`,
    wikiLinks: [`https://remnant.wiki/Xenoplasm`],
  },
]
