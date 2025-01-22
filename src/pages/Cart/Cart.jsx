import useCartCalculations from "../../Components/React Custom Hooks/useCartCalculations/useCartCalculations";
import DesktopCart from "../../Features/Cart/DesktopCart/DesktopCart";
import EmptyShoppingCart from "../../Features/Cart/EmptyShoppingCart/EmptyShoppingCart";
import MobileCart from "../../Features/Cart/MobileCart/MobileCart";

function Cart() {
  const { totalItems } = useCartCalculations();
  return (
    <div>
      {totalItems != 0 ? (
        <>
          <DesktopCart />
          <MobileCart />
        </>
      ) : (
        <EmptyShoppingCart />
      )}
    </div>
  );
}

export default Cart;
