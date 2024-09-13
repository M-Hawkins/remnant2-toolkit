import {
  BaseButton,
  BaseDialog,
  BaseDialogActions,
  BaseDialogBody,
  BaseDialogDescription,
  BaseDialogTitle,
  BaseDivider,
  BaseField,
  BaseInput,
  BaseLabel,
  BaseTextarea,
} from '@repo/ui';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { MAX_BUILD_DESCRIPTION_LENGTH } from '@/app/(builds)/_constants/max-build-description-length';
import { lockLinkedBuild } from '@/app/(builds)/builder/linked/_admin/actions/lock-linked-build';
import { unlockLinkedBuild } from '@/app/(builds)/builder/linked/_admin/actions/unlock-linked-build';
import { updateLinkedBuild } from '@/app/(builds)/builder/linked/_admin/actions/update-linked-build';
import { type LinkedBuildState } from '@/app/(builds)/builder/linked/_types/linked-build-state';

interface Props {
  open: boolean;
  onClose: () => void;
  buildToModerate: LinkedBuildState;
}

export function ModeratorLinkedBuildToolsDialog({
  buildToModerate,
  open,
  onClose,
}: Props) {
  // Allows us to reflect changes without reloading the page
  const [localBuild, setLocalBuild] =
    useState<LinkedBuildState>(buildToModerate);

  const [buildName, setBuildName] = useState(localBuild.name);
  const [buildDescription, setBuildDescription] = useState(
    localBuild.description,
  );

  const [buildItems, setBuildItems] = useState(localBuild.linkedBuildItems);

  const { data: sessionData } = useSession();
  if (sessionData?.user?.role !== 'admin') {
    return null;
  }

  const saveButtonDisabled =
    buildName === buildToModerate.name &&
    buildDescription === buildToModerate.description &&
    buildItems.every((item, index) => {
      return item.label === localBuild.linkedBuildItems[index]?.label;
    });

  return (
    <BaseDialog open={open} onClose={onClose}>
      <BaseDialogTitle>Moderator Tools</BaseDialogTitle>
      <BaseDialogDescription>
        Moderation tools for build:{' '}
        <strong className="text-primary-500">{localBuild.name}</strong>
      </BaseDialogDescription>
      <BaseDialogBody>
        <BaseDialogTitle>Build Name</BaseDialogTitle>

        <BaseInput
          value={buildName}
          onChange={(e) => setBuildName(e.target.value)}
          className="mt-2"
        />
        <BaseDivider className="my-4" />
        <BaseDialogTitle>Build Description</BaseDialogTitle>
        <BaseField>
          <BaseLabel>{`(${
            buildDescription?.length ?? 0
          }/${MAX_BUILD_DESCRIPTION_LENGTH})`}</BaseLabel>
          <BaseTextarea
            name="description"
            onChange={(e) => setBuildDescription(e.target.value)}
            value={buildDescription ?? ''}
            maxLength={MAX_BUILD_DESCRIPTION_LENGTH}
            className="h-[215px] w-full"
          />
        </BaseField>
        <BaseDivider className="my-4" />
        <BaseDialogTitle>Build Items</BaseDialogTitle>
        {buildItems.map((item, index) => (
          <div key={item.id} className="mt-2">
            <BaseInput
              value={item.label}
              onChange={(e) => {
                const newItems = [...buildItems];
                newItems[index] = { ...item, label: e.target.value };
                setBuildItems(newItems);
              }}
            />
          </div>
        ))}
      </BaseDialogBody>
      <BaseDialogActions>
        <BaseButton
          onClick={async () => {
            const response = await updateLinkedBuild({
              ...localBuild,
              name: buildName,
              description: buildDescription,
              linkedBuildItems: buildItems,
            });
            if (response.status === 'error') {
              toast.error(response.message);
              return;
            }
            setLocalBuild({
              ...localBuild,
              name: buildName,
              description: buildDescription,
            });
            toast.success(response.message);
          }}
          disabled={saveButtonDisabled}
        >
          Save Changes
        </BaseButton>
      </BaseDialogActions>
      <BaseDivider className="my-4" />
      <BaseDialogBody>
        <BaseDialogTitle>Other Actions</BaseDialogTitle>

        <div className="mt-2 flex flex-wrap items-start justify-start gap-2">
          {localBuild.isModeratorLocked ? (
            <BaseButton
              onClick={async () => {
                const response = await unlockLinkedBuild(localBuild.id);
                if (response.status === 'error') {
                  toast.error(response.message);
                  return;
                }
                setLocalBuild({ ...localBuild, isModeratorLocked: false });
                toast.success(response.message);
              }}
            >
              Unlock Build
            </BaseButton>
          ) : (
            <BaseButton
              onClick={async () => {
                const response = await lockLinkedBuild(localBuild.id);
                if (response.status === 'error') {
                  toast.error(response.message);
                  return;
                }
                setLocalBuild({ ...localBuild, isModeratorLocked: true });
                toast.success(response.message);
              }}
            >
              Lock Build
            </BaseButton>
          )}
        </div>
      </BaseDialogBody>
    </BaseDialog>
  );
}