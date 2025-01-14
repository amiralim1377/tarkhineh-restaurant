import PaymentDesktopFactor from "../PaymentDesktopFactor/PaymentDesktopFactor";

import PaymentGateway from "../PaymentGateway/PaymentGateway";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import PaymentRegisterDiscountCode from "../PaymentRegisterDiscountCode/PaymentRegisterDiscountCode";

function PaymentDesktop() {
  return (
    <div className="mx-auto flex w-full max-w-8xl flex-row justify-between gap-4">
      <div className="flex w-full max-w-4xl flex-col space-y-4">
        <PaymentRegisterDiscountCode />
        <PaymentMethod />
        <PaymentGateway />
      </div>
      <div className="w-full max-w-xl">
        <PaymentDesktopFactor />
      </div>
    </div>
  );
}

export default PaymentDesktop;
