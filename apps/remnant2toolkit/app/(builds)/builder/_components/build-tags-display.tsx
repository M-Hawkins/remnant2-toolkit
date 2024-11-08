import { type BuildTags } from '@repo/db';
import { BaseButton, BaseFieldset, BaseLabel, cn } from '@repo/ui';

import { ALL_BUILD_TAGS } from '@/app/(builds)/_constants/all-build-tags';
import { MAX_BUILD_TAGS } from '@/app/(builds)/_constants/max-build-tags';
import { type BuildTag } from '@/app/(builds)/_types/build-tag';

import { BuildTagItem } from './build-tag-item';

interface Props {
  buildTags: BuildTags[] | null;
  isEditable: boolean;
  isScreenshotMode: boolean;
  showLabel?: boolean;
  onChange?: (tags: BuildTags[]) => void;
}

export function BuildTagsDisplay({
  buildTags,
  isEditable,
  isScreenshotMode,
  showLabel = true,
  onChange,
}: Props) {
  if (!buildTags) return null;

  function handleTagClick({
    tag,
    isActive,
  }: {
    tag: BuildTag;
    isActive: boolean;
  }) {
    if (!onChange) return;
    if (!buildTags) return;

    if (isActive) {
      onChange(buildTags.filter((t) => t.tag !== tag.value));
    } else {
      onChange([
        ...buildTags,
        {
          id: '',
          category: tag.category,
          tag: tag.value,
          createdAt: new Date(),
          updatedAt: new Date(),
          buildId: '',
        },
      ]);
    }
  }

  return (
    <BaseFieldset className="flex w-full max-w-full flex-col items-center justify-center">
      {showLabel && isEditable && (
        <BaseLabel className="my-2 flex w-full items-center justify-center">
          Build Tags{' '}
          {!isScreenshotMode && isEditable && `(Limit ${MAX_BUILD_TAGS})`}
        </BaseLabel>
      )}
      <div
        className={cn(
          'mb-2 flex w-full flex-wrap items-center justify-center gap-2',
          !showLabel && 'justify-center',
        )}
      >
        {ALL_BUILD_TAGS.filter((tag) => tag.category === 'Type').map(
          (tag, index) => {
            const isActive = buildTags.some((t) => t.tag === tag.value);
            if (!isEditable && !isActive) return null;

            return isEditable ? (
              <BaseButton
                plain
                key={index}
                onClick={() => handleTagClick({ tag, isActive })}
              >
                <BuildTagItem
                  isActive={isActive}
                  isEditable={isEditable}
                  isScreenshotMode={isScreenshotMode}
                  tag={tag}
                />
              </BaseButton>
            ) : (
              <BuildTagItem
                key={index}
                isActive={isActive}
                isEditable={isEditable}
                isScreenshotMode={isScreenshotMode}
                tag={tag}
              />
            );
          },
        )}
      </div>
      <div
        className={cn(
          'flex w-full flex-wrap items-center justify-center gap-2',
        )}
      >
        {ALL_BUILD_TAGS.filter((tag) => tag.category === 'Tag').map(
          (tag, index) => {
            const isActive = buildTags.some((t) => t.tag === tag.value);

            if (!isEditable && !isActive) return null;

            return isEditable ? (
              <BaseButton
                plain
                key={index}
                onClick={() => handleTagClick({ tag, isActive })}
              >
                <BuildTagItem
                  isActive={isActive}
                  isEditable={isEditable}
                  isScreenshotMode={isScreenshotMode}
                  tag={tag}
                />
              </BaseButton>
            ) : (
              <BuildTagItem
                key={index}
                isActive={isActive}
                isEditable={isEditable}
                isScreenshotMode={isScreenshotMode}
                tag={tag}
              />
            );
          },
        )}
      </div>
    </BaseFieldset>
  );
}
