import { Dialog } from "@headlessui/react";
import useModal from "../React Custom Hooks/useModal/useModal";
import ContactUsMapContainer from "../ContactUsMapContainer/ContactUsMapContainer";

function ContactusBranchesItemMap({ branches, modalMapId }) {
  const { name_fa, latitude, longitude } = branches;
  const center = [latitude, longitude];

  const { isOpen, modalType, closeModalHandler, modalId } = useModal();
  return (
    <Dialog
      open={isOpen && modalType === "BranchesItemMap" && modalId == modalMapId}
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
          </Dialog.Description>
          <div className="h-full w-full p-2">
            <ContactUsMapContainer center={center} />
          </div>
          <div className="mt-2 flex justify-end space-x-2 md:mt-4">
            <button
              onClick={() => closeModalHandler()}
              className="rounded-md bg-red-500 px-3 py-1 text-xs font-medium text-white md:px-4 md:py-2 md:text-sm"
            >
              بستن
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default ContactusBranchesItemMap;
