import {
  BaseButton,
  BaseDialog,
  BaseDialogBody,
  BaseDialogDescription,
  BaseDialogTitle,
  BaseListbox,
  BaseListboxLabel,
  BaseListboxOption,
} from '@repo/ui';
import { useEffect, useState } from 'react';

import { Pagination } from '@/app/_components/pagination';
import { usePagination } from '@/app/_hooks/use-pagination';
import { ArmorSuggestionCard } from '@/app/(builds)/_components/armor-suggestion-card';
import { getArmorSuggestions } from '@/app/(builds)/_libs/get-armor-suggestions';
import {
  type ArmorSuggestion,
  type WeightClassKeysWithDefault,
} from '@/app/(builds)/_types/armor-calculator';
import { type BuildState } from '@/app/(builds)/_types/build-state';
import { ItemInfoDialog } from '@/app/(items)/_components/item-info-dialog';
import { type Item } from '@/app/(items)/_types/item';

const ITEMS_PER_PAGE = 8;

function ArmorInfoContainer({
  children,
  isDialogOpen,
  itemInfo,
  isItemInfoOpen,
  onDialogClose,
  onInfoClose,
}: {
  children: React.ReactNode;
  isDialogOpen: boolean;
  itemInfo: Item | null;
  isItemInfoOpen: boolean;
  onDialogClose: () => void;
  onInfoClose: () => void;
}) {
  return (
    <BaseDialog open={isDialogOpen} onClose={onDialogClose} size="7xl">
      <ItemInfoDialog
        item={itemInfo}
        open={isItemInfoOpen}
        onClose={onInfoClose}
      />
      <BaseDialogTitle>Armor Calculator</BaseDialogTitle>
      <BaseDialogDescription>
        Get optimal armor values for the current build and equipped armor.
      </BaseDialogDescription>
      <BaseDialogBody>
        <div className="flex flex-col items-center justify-start sm:pr-4">
          {children}
        </div>
      </BaseDialogBody>
    </BaseDialog>
  );
}

interface Props {
  buildState: BuildState;
  open: boolean;
  onClose: () => void;
  onApplySuggestions: (newBuildState: BuildState) => void;
}

export function ArmorSuggestionDialog({
  buildState,
  open,
  onClose,
  onApplySuggestions,
}: Props) {
  const [isCalculating, setIsCalculating] = useState(false);

  // Tracks the item the user wants info on
  const [itemInfo, setItemInfo] = useState<Item | null>(null);
  // If the item info is defined, the modal should be open
  const isItemInfoOpen = Boolean(itemInfo);

  const [desiredWeightClass, setDesiredWeightClass] =
    useState<WeightClassKeysWithDefault>('CHOOSE');

  const [armorSuggestions, setArmorSuggestions] = useState<ArmorSuggestion[]>(
    [],
  );

  const totalItems = armorSuggestions.length;

  const itemsOnThisPage = armorSuggestions.length;

  const {
    currentPage,
    firstVisibleItemNumber,
    lastVisibleItemNumber,
    isNextPageDisabled,
    pageNumbers,
    handleNextPageClick,
    handlePreviousPageClick,
    handleSpecificPageClick,
  } = usePagination({
    itemsPerPage: ITEMS_PER_PAGE,
    totalItems: armorSuggestions.length,
  });

  useEffect(() => {
    if (!isCalculating) return;
    if (desiredWeightClass === 'CHOOSE') return;

    // Start a timeout to delay the calculation
    // This allows the loading indicator to render
    const timeoutId = setTimeout(() => {
      setArmorSuggestions(
        getArmorSuggestions({ buildState, desiredWeightClass }),
      );
      setIsCalculating(false);
    }, 250);

    // Clear the timeout when the component unmounts or when the dependencies change
    return () => clearTimeout(timeoutId);
  }, [buildState, desiredWeightClass, isCalculating]);

  const allSlotsFull = Boolean(
    buildState.items.helm &&
      buildState.items.torso &&
      buildState.items.gloves &&
      buildState.items.legs,
  );

  function handleWeightClassChange(weightClass: WeightClassKeysWithDefault) {
    if (weightClass === 'CHOOSE') {
      setArmorSuggestions([]);
      setDesiredWeightClass(weightClass);
      return;
    }
    setDesiredWeightClass(weightClass);
    setIsCalculating(true);
  }

  function clearArmorSuggestions() {
    setDesiredWeightClass('CHOOSE');
    setArmorSuggestions([]);
  }

  const armorInfoProps = {
    itemInfo: itemInfo,
    isDialogOpen: open,
    isItemInfoOpen: isItemInfoOpen,
    onDialogClose: onClose,
    onInfoClose: () => setItemInfo(null),
  };

  if (allSlotsFull) {
    return (
      <ArmorInfoContainer {...armorInfoProps}>
        <div className="text-md mt-4 text-center font-semibold text-accent3-500">
          All armor slots are full. Clear at least one slot for suggestions.
        </div>
      </ArmorInfoContainer>
    );
  }

  if (isCalculating) {
    return (
      <ArmorInfoContainer {...armorInfoProps}>
        <div className="flex flex-col items-center justify-center">
          <p className="text-md mt-4 animate-bounce text-center font-semibold">
            Calculating armor suggestions...this may take a moment.
          </p>
        </div>
      </ArmorInfoContainer>
    );
  }

  // #region Render

  return (
    <ArmorInfoContainer {...armorInfoProps}>
      <div className="flex w-full flex-row items-end justify-center gap-x-2 text-left">
        <div className="flex w-full max-w-md items-end justify-center gap-x-2">
          <BaseListbox
            key={desiredWeightClass}
            name="weight-class"
            value={desiredWeightClass}
            onChange={handleWeightClassChange}
          >
            {[
              { label: 'Choose', value: 'CHOOSE' },
              { label: 'Light', value: 'LIGHT' },
              { label: 'Medium', value: 'MEDIUM' },
              { label: 'Heavy', value: 'HEAVY' },
              { label: 'Ultra', value: 'ULTRA' },
            ].map(({ label, value }) => (
              <BaseListboxOption key={value} value={value}>
                <BaseListboxLabel>{label}</BaseListboxLabel>
              </BaseListboxOption>
            ))}
          </BaseListbox>
          <BaseButton
            color="red"
            className="mt-4"
            aria-label="Clear armor suggestions"
            onClick={clearArmorSuggestions}
          >
            Clear
          </BaseButton>
        </div>
      </div>
      {armorSuggestions.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-md mt-4 text-center font-bold text-accent3-500">
            No armor suggestions found for the selected weight class.
          </div>
        </div>
      )}
      {itemsOnThisPage > 0 && (
        <div className="mt-4 flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center">
            <Pagination
              isLoading={isCalculating}
              currentPage={currentPage}
              firstVisibleItemNumber={firstVisibleItemNumber}
              lastVisibleItemNumber={lastVisibleItemNumber}
              isNextPageDisabled={isNextPageDisabled}
              pageNumbers={pageNumbers}
              totalItems={totalItems}
              onPreviousPage={handlePreviousPageClick}
              onNextPage={handleNextPageClick}
              onSpecificPage={handleSpecificPageClick}
            />
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {armorSuggestions
                .slice(
                  (currentPage - 1) * ITEMS_PER_PAGE,
                  currentPage * ITEMS_PER_PAGE,
                )
                .map((suggestion, index) => (
                  <div
                    key={index}
                    className="border-primary-700 flex w-full flex-col items-center justify-center rounded-md border-2 bg-gray-900 p-4"
                  >
                    <ArmorSuggestionCard
                      suggestion={suggestion}
                      desiredWeightClass={desiredWeightClass}
                      isItemInfoOpen={isItemInfoOpen}
                      onItemInfoOpen={setItemInfo}
                    />
                    <BaseButton
                      color="cyan"
                      className="mt-4"
                      aria-label="Equip armor suggestions"
                      onClick={() =>
                        onApplySuggestions({
                          ...buildState,
                          items: {
                            ...buildState.items,
                            helm: suggestion.helm,
                            torso: suggestion.torso,
                            gloves: suggestion.gloves,
                            legs: suggestion.legs,
                          },
                        })
                      }
                    >
                      Equip Armor
                    </BaseButton>
                  </div>
                ))}
            </div>
            <Pagination
              isLoading={isCalculating}
              currentPage={currentPage}
              firstVisibleItemNumber={firstVisibleItemNumber}
              lastVisibleItemNumber={lastVisibleItemNumber}
              isNextPageDisabled={isNextPageDisabled}
              pageNumbers={pageNumbers}
              totalItems={totalItems}
              onPreviousPage={handlePreviousPageClick}
              onNextPage={handleNextPageClick}
              onSpecificPage={handleSpecificPageClick}
            />
          </div>
        </div>
      )}
    </ArmorInfoContainer>
  );
}
