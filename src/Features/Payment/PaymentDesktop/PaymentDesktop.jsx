import { useSelector } from "react-redux";
import ImportantPaymentPoint from "../ImportantPaymentPoint/ImportantPaymentPoint";
import PaymentDesktopFactor from "../PaymentDesktopFactor/PaymentDesktopFactor";

import PaymentGateway from "../PaymentGateway/PaymentGateway";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import PaymentRegisterDiscountCode from "../PaymentRegisterDiscountCode/PaymentRegisterDiscountCode";

function PaymentDesktop() {
  const paymentMethod = useSelector((state) => state.cart?.paymentMethod);
  return (
    <div className="mx-auto hidden w-full max-w-8xl flex-row justify-between gap-4 md:flex">
      <div className="flex w-full max-w-4xl flex-col space-y-4">
        <PaymentRegisterDiscountCode />
        <PaymentMethod />
        {paymentMethod == "online" ? (
          <PaymentGateway />
        ) : (
          <ImportantPaymentPoint />
        )}
      </div>
      <div className="w-full max-w-lg">
        <PaymentDesktopFactor />
      </div>
    </div>
  );
}

export default PaymentDesktop;
