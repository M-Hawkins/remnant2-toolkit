import { relicItems } from '@/app/(items)/_constants/relic-items';

import { type FilterDefinition } from '../_types/filter-definition';

export const relicFilter: FilterDefinition = {
  buildFilterKey: 'relic',
  defaultValue: relicItems.map((item) => ({
    label: item.name,
    value: item.id,
    state: 'default',
  })),
  label: 'Relic',
  validOptions: relicItems.map((item) => item.id),
};
