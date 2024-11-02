import type { AmuletFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/amulet-filter';
import type { ArchetypeFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/archetype-filter';
import type { ArchetypeSlotFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/archetype-slot-filter';
import type { BuildTagFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/build-tag-filter';
import type { FusionFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/fusion-filter';
import type { HandGunFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/hand-gun-filter';
import type { LegendaryFragmentFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/legendary-fragment-filter';
import type { LongGunFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/long-gun-filter';
import type { MeleeFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/melee-filter';
import type { ModFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/mod-filter';
import type { MutatorFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/mutator-filter';
import type { ReleasesFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/releases-filter';
import type { RelicFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/relic-filter';
import type { RelicFragmentFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/relic-fragment-filter';
import type { RingFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/ring-filter';
import type { SearchTextFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/search-text-filter';
import type { SkillFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/skill-filter';
import type { TraitFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/trait-filter';
import type { WithCollectionFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/with-collection';
import type { WithOptionalPrismValue } from '@/app/(builds)/_features/filters/_libs/filters/with-optional-prism';
import type { WithPatchAffectedFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/with-patch-affected-filter';
import type { WithQualityFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/with-quality-filter';
import type { WithReferenceFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/with-reference-filter';
import type { WithVideoFilterValue } from '@/app/(builds)/_features/filters/_libs/filters/with-video-filter';

export interface BuildFilterFields {
  amulets: AmuletFilterValue;
  archetypes: ArchetypeFilterValue;
  archetypeSlot: ArchetypeSlotFilterValue;
  buildTags: BuildTagFilterValue;
  fusions: FusionFilterValue;
  handGuns: HandGunFilterValue;
  legendaryFragments: LegendaryFragmentFilterValue;
  longGuns: LongGunFilterValue;
  melees: MeleeFilterValue;
  mods: ModFilterValue;
  mutators: MutatorFilterValue;
  releases: ReleasesFilterValue;
  relics: RelicFilterValue;
  relicFragments: RelicFragmentFilterValue;
  rings: RingFilterValue;
  searchText: SearchTextFilterValue;
  skills: SkillFilterValue;
  traits: TraitFilterValue;
  withCollection: WithCollectionFilterValue;
  withOptionalPrism: WithOptionalPrismValue;
  withPatchAffected: WithPatchAffectedFilterValue;
  withQuality: WithQualityFilterValue;
  withVideo: WithVideoFilterValue;
  withReference: WithReferenceFilterValue;
}

export type BuildFilterFieldKey = keyof BuildFilterFields;