import { useNavigate } from "react-router-dom";
import EmptyShoppingCartProgress from "../../../Components/EmptyShoppingCartProgress/EmptyShoppingCartProgress";
import { useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useModal from "../../../Components/React Custom Hooks/useModal/useModal";
import BranchSelectionModal from "../../../Components/BranchSelectionModal/BranchSelectionModal";

function EmptyShoppingCart() {
  const navigate = useNavigate();
  const [menuId, setMenuId] = useState();
  const { isOpen, modalType, openModalHandler, modalId } = useModal();
  const isBranchSelected = useSelector(
    (state) => state.branches.selectedBranch.id,
  );

  const handleOpenMenuItem = () => {
    if (!isBranchSelected) {
      const newModalId = uuidv4();
      setMenuId(newModalId);
      openModalHandler("BranchSelectionModal", null, newModalId);
    } else {
      navigate("/menu");
    }
  };

  return (
    <div className="p-2">
      <div className="p-2 md:hidden">
        <div className="flex flex-row items-baseline justify-between">
          <div>
            <img src="/icons/Slider Arrow.svg" alt="" />
          </div>

          <h3 className="text-base font-bold text-[#353535]">سبد خرید</h3>

          <div>
            <img src="/icons/trash.svg" alt="" />
          </div>
        </div>
      </div>
      <EmptyShoppingCartProgress />
      <div className="mx-auto my-8 flex min-h-80 max-w-8xl flex-col items-center justify-center rounded-md border border-gray-300">
        <div className="relative flex w-full flex-col items-center justify-center">
          <h2 className="absolute z-20 text-center text-sm text-[#757575] md:text-lg">
            شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
          </h2>
          <img src="/icons/Empty page.svg" className="md:w-52" alt="" />
        </div>
        <button
          onClick={() => handleOpenMenuItem()}
          className="rounded-lg border border-green-primary-500 px-6 py-2 text-green-primary-500"
        >
          منوی رستوران
        </button>
      </div>
      {isOpen && modalType == "BranchSelectionModal" && modalId == menuId && (
        <BranchSelectionModal branchSelectionId={menuId} />
      )}
    </div>
  );
}

export default EmptyShoppingCart;
