import { Dialog } from "@headlessui/react";
import useModal from "../React Custom Hooks/useModal/useModal";
import { memo } from "react";
import useFavorites from "../React Custom Hooks/useFavorites/useFavorites";
import useUserData from "../React Custom Hooks/useUserData/useUserData";

const FavoriteFoodDeleteModal = memo(({ FavoritesItemId, favorite }) => {
  const { isOpen, modalType, modalId, closeModalHandler } = useModal();
  const { id } = favorite;

  const { removeFromFavorites } = useFavorites();
  const { userId } = useUserData();

  const handleDeleteFood = () => {
    removeFromFavorites({ userId, foodId: id });
    closeModalHandler();
  };

  return (
    <Dialog
      open={
        isOpen &&
        modalType === "FavoriteFoodDeleteModal" &&
        modalId === FavoritesItemId
      }
      onClose={closeModalHandler}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <Dialog.Panel className="flex w-full max-w-xs flex-col items-center justify-between rounded-lg bg-white p-2 md:max-w-md">
          <Dialog.Title className="text-center text-lg font-bold text-gray-900">
            حذف غذای مورد علاقه
          </Dialog.Title>
          <Dialog.Description className="cursor-pointer text-sm text-gray-500">
            آیا از حذف غذای مورد علاقه خود مطمئن هستید؟
            <div className="flex w-full items-center justify-center gap-3 py-2">
              <button
                onClick={closeModalHandler}
                className="rounded-lg border border-green-primary-500 px-4 py-2 text-green-primary-500"
              >
                بازگشت
              </button>
              <button
                onClick={handleDeleteFood}
                className="rounded-lg border border-red-500 px-4 py-2 text-red-500"
              >
                حذف غذا
              </button>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
});

FavoriteFoodDeleteModal.displayName = "FavoriteFoodDeleteModal";

export default memo(FavoriteFoodDeleteModal);
