import { Dialog } from "@headlessui/react";
import useModal from "../React Custom Hooks/useModal/useModal";

function ContactusBranchesItemMap({ branches }) {
  const { name_fa, latitude, longitude } = branches;
  const { isOpen, modalType, closeModalHandler } = useModal();
  return (
    <Dialog
      open={isOpen && modalType === "BranchesItemMap"}
      onClose={closeModalHandler}
    >
      <Dialog.Panel className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto bg-black bg-opacity-70 px-2">
        <div className="relative w-full max-w-xs rounded-md bg-white p-4 md:max-w-sm">
          <Dialog.Title className="text-sm font-bold md:text-lg">
            نقشه
          </Dialog.Title>
          <Dialog.Description className="mb-2 text-xs md:mb-4 md:text-sm">
            موقعیت شعبه {name_fa} روی نقشه.
          </Dialog.Description>
          <iframe
            title="Map"
            src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
            className="h-32 w-full border-none md:h-48"
          ></iframe>
          <div className="mt-2 flex justify-end space-x-2 md:mt-4">
            <button
              onClick={closeModalHandler}
              className="rounded-md bg-red-500 px-3 py-1 text-xs font-medium text-white md:px-4 md:py-2 md:text-sm"
            >
              بستن
            </button>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default ContactusBranchesItemMap;

// نسخه نادرست
