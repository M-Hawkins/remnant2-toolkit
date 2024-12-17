import {
  BaseButton,
  BaseCode,
  BaseDialog,
  BaseDialogActions,
  BaseDialogBody,
  BaseDialogDescription,
  BaseDialogTitle,
  BaseField,
  BaseInput,
  BaseLabel,
} from '@repo/ui';
import React from 'react';

import { ImportSaveSubmitButton } from '@/app/_components/import-save-submit-button';
import LocatingProfileSav from '@/app/_components/locating-profile-sav';

interface Props {
  open: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onClose: () => void;
  onSubmit: (payload: FormData) => void;
}

export function ImportItemsDialog({
  open,
  fileInputRef,
  onClose,
  onSubmit,
}: Props) {
  return (
    <BaseDialog open={open} onClose={onClose}>
      <form action={onSubmit}>
        <BaseDialogTitle>Import Save</BaseDialogTitle>
        <BaseDialogDescription>
          Automatically import discovered items from your{' '}
          <BaseCode>profile.sav</BaseCode>
        </BaseDialogDescription>
        <BaseDialogDescription>
          <span className="text-accent3-500">
            Note: This will overwrite any existing discovered items and then
            reimport.
          </span>
        </BaseDialogDescription>
        <BaseDialogBody>
          <BaseField>
            <BaseLabel>Select Save File</BaseLabel>
            <BaseInput name="saveFile" type="file" ref={fileInputRef} />
          </BaseField>
        </BaseDialogBody>
        <BaseDialogActions>
          <BaseButton plain onClick={onClose}>
            Cancel
          </BaseButton>
          <ImportSaveSubmitButton
            label="Import profile.sav"
            className="w-[200px]"
          />
        </BaseDialogActions>
      </form>
      <LocatingProfileSav />
    </BaseDialog>
  );
}
