import { useSelector } from "react-redux";
import DesktopCartListing from "../../../Components/DesktopCartListing/DesktopCartListing";
import "./custom-scrollbar.css";

function DesktopCartItemCards() {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="border-gray-30 custom-scrollbar flex max-h-[560px] w-full max-w-3xl flex-col space-y-4 overflow-y-scroll rounded-lg border-2 p-3 lg:max-w-4xl">
      {cart?.map((cartItem) => (
        <DesktopCartListing key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
}

export default DesktopCartItemCards;
