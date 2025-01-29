import { Dialog } from "@headlessui/react";
import useModal from "../React Custom Hooks/useModal/useModal";

function ContactusBranchesItemMap({ branches }) {
  const { name_fa, latitude, longitude } = branches;
  const { isOpen, modalType, closeModalHandler } = useModal();
  return (
    <Dialog
      open={isOpen && modalType === "BranchesItemMap"}
      onClose={closeModalHandler}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <Dialog.Panel className="flex w-full max-w-xs flex-col items-center justify-between rounded-lg bg-white p-2 md:max-w-md">
          <Dialog.Title className="text-center text-lg font-bold text-gray-900">
            نقشه
          </Dialog.Title>
          <Dialog.Description className="cursor-pointer text-sm text-gray-500">
            موقعیت شعبه {name_fa} روی نقشه.
            <div className="overflow-hidden rounded-lg p-2">
              <iframe
                title="Map"
                src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
                className="h-32 w-full rounded-md border-none md:h-48"
              ></iframe>
            </div>
            <div className="mt-2 flex justify-end space-x-2 md:mt-4">
              <button
                onClick={() => closeModalHandler()}
                className="rounded-md bg-red-500 px-3 py-1 text-xs font-medium text-white md:px-4 md:py-2 md:text-sm"
              >
                بستن
              </button>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default ContactusBranchesItemMap;
