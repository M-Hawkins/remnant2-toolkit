import { components, type MultiValueGenericProps } from 'react-select';
import { cn } from '../../../utils/classnames';
import { CheckIcon } from '../../icons/check';
import { XIcon } from '../../icons/x';
import type { FilterOption } from './types';

export function MultiValueLabel(props: MultiValueGenericProps<FilterOption>) {
  const data = props.data as FilterOption;

  let icon = <CheckIcon className={cn('ui-w-3 ui-h-3 text-accent2-500')} />;

  if (data.state === 'excluded') {
    icon = <XIcon className={cn('ui-w-3 ui-h-3 text-accent3-500')} />;
  }

  return (
    <div
      className={cn(
        'ui-bg-background-solid ui-text-xs ui-text-surface-solid ui-flex ui-flex-row ui-justify-start ui-items-center ui-p-1 ui-mb-1',
      )}
    >
      <div className="ui-bg-background-solid ui-flex ui-items-center ui-justify-center mr-0.5">
        {icon}
      </div>
      <components.MultiValueLabel {...props} />
    </div>
  );
}
