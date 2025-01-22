import { useNavigate } from "react-router-dom";
import MobileCartItem from "../../../Components/MobileCartItem/MobileCartItem";
import useCart from "../../../Components/React Custom Hooks/useCart/useCart";

function MobileCart() {
  const { handleClearCart } = useCart();
  const navigate = useNavigate();
  return (
    <div className="p-2 md:hidden">
      <div className="p-2">
        <div className="flex flex-row items-baseline justify-between">
          <img
            src="/icons/Slider Arrow.svg"
            onClick={() => navigate(-1)}
            alt=""
          />

          <h3 className="text-base font-bold text-[#353535]">سبد خرید</h3>
          <img
            src="/icons/trash.svg"
            onClick={() => handleClearCart()}
            alt=""
          />
        </div>
        <MobileCartItem />
      </div>
    </div>
  );
}

export default MobileCart;
