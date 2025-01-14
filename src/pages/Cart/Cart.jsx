import DesktopCart from "../../Features/Cart/DesktopCart/DesktopCart";
import MobileCart from "../../Features/Cart/MobileCart/MobileCart";

function Cart() {
  return (
    <div>
      <DesktopCart />
      <MobileCart />
    </div>
  );
}

export default Cart;
