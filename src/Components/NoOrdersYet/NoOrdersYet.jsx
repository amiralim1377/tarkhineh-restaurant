import { useState } from "react";
import BranchSelectionModal from "../BranchSelectionModal/BranchSelectionModal";
import useModal from "../React Custom Hooks/useModal/useModal";
import { v4 as uuidv4 } from "uuid";

function NoOrdersYet() {
  const [branchSelectionId, setBranchSelectionId] = useState();
  const { isOpen, modalType, modalId, openModalHandler } = useModal();

  const handleOpenBranchSelectionModal = () => {
    const newModalId = uuidv4();
    setBranchSelectionId(newModalId);
    openModalHandler("BranchSelectionModal", null, newModalId);
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center p-6">
        <div className="relative flex w-full items-center justify-center">
          <img src="/icons/Empty page.svg" className="" alt="" />
          <span className="absolute top-8 z-10 text-center text-lg text-[#717171]">
            شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
          </span>
        </div>
        <button
          onClick={handleOpenBranchSelectionModal}
          className="w-full max-w-sm rounded-lg border border-green-primary-500 px-6 py-3 text-green-primary-500"
        >
          منوی رستوران
        </button>
      </div>
      {isOpen &&
        modalType === "BranchSelectionModal" &&
        modalId === branchSelectionId && (
          <BranchSelectionModal branchSelectionId={branchSelectionId} />
        )}
    </>
  );
}

export default NoOrdersYet;
