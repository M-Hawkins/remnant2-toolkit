import { BaseButton, BaseLink, EyeIcon, ShareIcon } from '@repo/ui';
import { urlNoCache } from '@repo/utils';
import copy from 'clipboard-copy';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import type { BuildCollectionWithBuilds } from '@/app/(user)/profile/[profileId]/collections/_types/build-collection-with-builds';

interface Props {
  collection: BuildCollectionWithBuilds;
}

export function BuildCollectionCard({ collection }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="divide-primary-800 border-primary-500 bg-background-solid col-span-1 flex flex-col divide-y rounded-lg border text-center shadow">
      <div className="flex flex-1 flex-col p-4 text-left">
        <h3 className="text-md whitespace-pre-wrap font-medium">
          <BaseLink
            href={`${pathname}/${collection.id}`}
            className="hover:underline"
          >
            {collection.name}
          </BaseLink>
        </h3>
        <div className="mt-1 flex flex-row justify-between text-sm text-gray-400">
          # of Builds: {collection.builds.length}
        </div>

        <div className="mt-0 flex flex-grow flex-col justify-start text-xs">
          <div className="text-surface-solid mt-2 h-auto max-h-[140px] w-full flex-row items-start justify-start gap-x-2 overflow-x-auto overflow-y-auto whitespace-pre-wrap text-xs">
            {collection.description || 'No collection description set.'}
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center gap-x-2 text-sm">
          <div className="flex w-full items-center justify-center gap-6 p-2 text-sm">
            <BaseButton
              plain
              aria-label="Share Build Collection"
              onClick={() => {
                const url = urlNoCache(
                  `https://remnant2toolkit.com${pathname}/${collection.id}`,
                );
                copy(url);
                toast.success('Copied Build Collection URL to clipboard.');
              }}
            >
              <div className="flex flex-col items-center justify-end text-purple-500">
                <ShareIcon className="h-4 w-4" /> Share
              </div>
            </BaseButton>
            <BaseButton
              plain
              aria-label="View Build Collection"
              onClick={() => router.push(`${pathname}/${collection.id}`)}
            >
              <div className="flex flex-col items-center justify-end text-cyan-500">
                <EyeIcon className="h-4 w-4" /> View
              </div>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}
