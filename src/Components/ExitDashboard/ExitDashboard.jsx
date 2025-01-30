import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import useModal from "../React Custom Hooks/useModal/useModal";
import useCart from "../React Custom Hooks/useCart/useCart";

function ExitDashboard() {
  const { isOpen, modalType, closeModalHandler } = useModal();
  const { handleClearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && modalType === "exitDashboard" && (
        <Dialog
          open={isOpen}
          onClose={closeModalHandler}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex w-full max-w-xs flex-col items-center justify-between rounded-lg bg-white p-2 md:max-w-md"
            >
              <Dialog.Panel>
                <Dialog.Title className="text-center text-lg font-bold text-gray-900">
                  خروج
                </Dialog.Title>
                <Dialog.Description className="cursor-pointer text-sm text-gray-500">
                  آیا از حذف این سبد خرید مطمئن هستید؟
                  <div className="flex w-full items-center justify-center gap-3 py-2">
                    <button
                      onClick={() => closeModalHandler()}
                      className="rounded-lg border border-green-primary-500 px-4 py-2 text-green-primary-500"
                    >
                      خروچ
                    </button>
                    <button
                      onClick={() => handleClearCart()}
                      className="rounded-lg border border-red-500 px-4 py-2 text-red-500"
                    >
                      بازگشت
                    </button>
                  </div>
                </Dialog.Description>
              </Dialog.Panel>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default ExitDashboard;
