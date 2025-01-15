import DesktopCart from "../../Features/Cart/DesktopCart/DesktopCart";
import EmptyShoppingCart from "../../Features/Cart/EmptyShoppingCart/EmptyShoppingCart";
import MobileCart from "../../Features/Cart/MobileCart/MobileCart";

function Cart() {
  return (
    <div>
      <DesktopCart />
      <MobileCart />
      <EmptyShoppingCart />
    </div>
  );
}

export default Cart;
