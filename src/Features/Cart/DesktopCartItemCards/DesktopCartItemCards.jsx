import { useSelector } from "react-redux";
import DesktopCartListing from "../../../Components/DesktopCartListing/DesktopCartListing";

function DesktopCartItemCards() {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="border-gray-30 flex max-h-[560px] w-full max-w-4xl flex-col space-y-4 overflow-y-scroll rounded-lg border-2 p-3">
      {cart.map((cartItem) => (
        <DesktopCartListing key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
}

export default DesktopCartItemCards;
