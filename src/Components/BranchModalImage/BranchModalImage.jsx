import { Dialog } from "@headlessui/react";
import useModal from "../React Custom Hooks/useModal/useModal";
import { memo } from "react";
import BranchesImageModalItem from "../BranchesImageModalItem/BranchesImageModalItem";

const BranchModalImage = memo(({ modalImageId, branch_images }) => {
  const { isOpen, modalType, modalId, closeModalHandler } = useModal();

  return (
    <Dialog
      open={
        isOpen && modalType === "branchModalImage" && modalId == modalImageId
      }
      onClose={closeModalHandler}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center px-4">
        <Dialog.Panel className="mx-auto flex w-full max-w-xs flex-col items-center justify-between space-y-2 rounded-lg bg-white p-4 md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
          <Dialog.Title className="text-center text-lg font-bold text-gray-900">
            عکس های شعبه
          </Dialog.Title>
          <BranchesImageModalItem branch_images={branch_images} />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
});

BranchModalImage.displayName = "BranchModalImage";

export default memo(BranchModalImage);
