import { Dialog } from "@headlessui/react";
import useModal from "../React Custom Hooks/useModal/useModal";
import { deleteAddress } from "../../Slice/userSlice/userSlice";
import supabase from "../../Services/supabase";
import { useDispatch } from "react-redux";
import { resetAddress } from "../../Slice/cartSlice/cartSlice";
import { memo } from "react";

const DeleteAddress = memo(({ Address, seletedDeleteAdressId }) => {
  const { isOpen, modalType, closeModalHandler, modalId } = useModal();
  const dispatch = useDispatch();
  const { id } = Address;

  const handleDeleteAddress = async (id) => {
    const { error } = await supabase.from("addresses").delete().eq("id", id);
    if (error) {
      console.error("خطا در حذف آدرس:", error.message);
    } else {
      dispatch(deleteAddress(id));
      dispatch(resetAddress());
      closeModalHandler();
    }
  };
  return (
    <Dialog
      open={
        isOpen &&
        modalType === "DeleteAddress" &&
        modalId == seletedDeleteAdressId
      }
      onClose={closeModalHandler}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <Dialog.Panel className="flex w-full max-w-xs flex-col items-center justify-between rounded-lg bg-white p-2 md:max-w-md">
          <Dialog.Title className="text-center text-lg font-bold text-gray-900">
            حذف آدرس
          </Dialog.Title>
          <Dialog.Description className="cursor-pointer text-sm text-gray-500">
            آیا از حذف این آدرس مطمئن هستید؟
            <div className="flex w-full items-center justify-center gap-3 py-2">
              <button
                onClick={() => closeModalHandler()}
                className="rounded-lg border border-green-primary-500 px-4 py-2 text-green-primary-500"
              >
                خیر
              </button>
              <button
                onClick={() => handleDeleteAddress(id)}
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
});

DeleteAddress.displayName = "DeleteAddress";

export default memo(DeleteAddress);
