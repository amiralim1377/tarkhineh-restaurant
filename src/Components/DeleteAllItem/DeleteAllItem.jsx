import { Dialog } from "@headlessui/react";
import useModal from "../React Custom Hooks/useModal/useModal";
import useCart from "../React Custom Hooks/useCart/useCart";

function DeleteAllItem() {
  const { isOpen, modalType, closeModalHandler } = useModal();
  const { handleClearCart } = useCart();
  return (
    <Dialog
      open={isOpen && modalType === "deleteAll"}
      onClose={closeModalHandler}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <Dialog.Panel className="flex w-full max-w-xs flex-col items-center justify-between rounded-lg bg-white p-2 md:max-w-md">
          <Dialog.Title className="text-center text-lg font-bold text-gray-900">
            حذف محصولات
          </Dialog.Title>
          <Dialog.Description className="cursor-pointer text-sm text-gray-500">
            آیا از حذف این سبد خرید مطمئن هستید؟{" "}
            <div className="flex w-full items-center justify-center gap-3 py-2">
              <button
                onClick={() => closeModalHandler()}
                className="rounded-lg border border-green-primary-500 px-4 py-2 text-green-primary-500"
              >
                خیر
              </button>
              <button
                onClick={() => handleClearCart()}
                className="rounded-lg border border-red-500 px-4 py-2 text-red-500"
              >
                بله
              </button>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default DeleteAllItem;
