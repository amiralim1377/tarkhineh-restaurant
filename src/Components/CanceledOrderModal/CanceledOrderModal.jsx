import { Dialog } from "@headlessui/react";
import useModal from "../React Custom Hooks/useModal/useModal";
import { memo } from "react";
import useCanceledOrder from "../React Custom Hooks/useCanceledOrder/useCanceledOrder";
import toast from "react-hot-toast";

const CanceledOrderModal = memo(({ order_id }) => {
  const { selectedItem, isOpen, modalType, modalId, closeModalHandler } =
    useModal();
  const { mutate: cancelOrderById } = useCanceledOrder();

  const handleCancelOrder = () => {
    cancelOrderById(order_id);
    closeModalHandler();
  };

  return (
    <Dialog
      open={isOpen && modalType === "CanceledOrder" && modalId === order_id}
      onClose={closeModalHandler}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <Dialog.Panel className="flex w-full max-w-xs flex-col items-center justify-between rounded-lg bg-white p-2 md:max-w-md">
          <Dialog.Title className="text-center text-lg font-bold text-gray-900">
            لغو سفارش
          </Dialog.Title>
          <Dialog.Description className="cursor-pointer text-sm text-gray-500">
            آیا از لغو سفارش خود مطمئن هستید؟{" "}
            <div className="flex w-full items-center justify-center gap-3 py-2">
              <button
                onClick={closeModalHandler}
                className="rounded-lg border border-green-primary-500 px-4 py-2 text-green-primary-500"
              >
                بازگشت
              </button>
              <button
                onClick={handleCancelOrder}
                className="rounded-lg border border-red-500 px-4 py-2 text-red-500"
              >
                لغو سفارش
              </button>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
});

CanceledOrderModal.displayName = "CanceledOrder";

export default memo(CanceledOrderModal);
