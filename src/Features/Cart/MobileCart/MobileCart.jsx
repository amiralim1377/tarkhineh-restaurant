import { useNavigate } from "react-router-dom";
import DeleteAllItem from "../../../Components/DeleteAllItem/DeleteAllItem";
import useModal from "../../../Components/React Custom Hooks/useModal/useModal";
import MobileCartFactor from "../MobileCartFactor/MobileCartFactor";

function MobileCart() {
  const { isOpen, modalType, openModalHandler } = useModal();
  const navigate = useNavigate();

  return (
    <div className="p-2 md:hidden">
      <div className="p-2">
        <div className="flex flex-row items-baseline justify-between">
          <div onClick={() => navigate(-1)}>
            <img
              src="/icons/Slider Arrow.svg"
              className="cursor-pointer"
              alt=""
            />
          </div>
          <h3 className="text-base font-bold text-[#353535]">سبد خرید</h3>
          <div onClick={() => openModalHandler("deleteAll")}>
            <img src="/icons/trash.svg" className="cursor-pointer" alt="" />
          </div>
          {isOpen && modalType === "deleteAll" && <DeleteAllItem />}
        </div>
        <MobileCartFactor />
      </div>
    </div>
  );
}

export default MobileCart;
