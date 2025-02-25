import CartProcessing from "../../../Components/CartProcessing/CartProcessing";
import DesktopCartItem from "../DesktopCartItem/DesktopCartItem";

function DesktopCart() {
  return (
    <div className="hidden px-2 md:block">
      <CartProcessing />
      <DesktopCartItem />
    </div>
  );
}

export default DesktopCart;
