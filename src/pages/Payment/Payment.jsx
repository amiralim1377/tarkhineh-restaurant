import PaymenProgress from "../../Components/PaymenProgress/PaymenProgress";
import useCartCalculations from "../../Components/React Custom Hooks/useCartCalculations/useCartCalculations";
import EmptyShoppingCart from "../../Features/Cart/EmptyShoppingCart/EmptyShoppingCart";
import PaymentDesktop from "../../Features/Payment/PaymentDesktop/PaymentDesktop";
import PaymentMobile from "../../Features/Payment/PaymentMobile/PaymentMobile";

function Payment() {
  const { totalItems } = useCartCalculations();

  return (
    <div>
      <div className="my-8">
        {totalItems != 0 ? (
          <>
            <PaymenProgress />
            <PaymentMobile />
            <PaymentDesktop />
          </>
        ) : (
          <EmptyShoppingCart />
        )}
      </div>
    </div>
  );
}

export default Payment;
