import PaymentFactor from "../PaymentFactor/PaymentFactor";
import PaymentGateway from "../PaymentGateway/PaymentGateway";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import PaymentRegisterDiscountCode from "../PaymentRegisterDiscountCode/PaymentRegisterDiscountCode";

function PaymentMobile() {
  return (
    <div className="px-2 md:hidden">
      <div className="my-4 flex items-center justify-between md:hidden">
        <div>
          <img
            src="/public/icons/arrow-left-blakc.svg"
            className="rotate-180"
            alt=""
          />
        </div>
        <div className="w-full">
          <h3 className="text-center font-bold">تکمیل اطلاعات</h3>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <PaymentRegisterDiscountCode />
        <PaymentMethod />
        <PaymentGateway />
        <PaymentFactor />
      </div>
    </div>
  );
}

export default PaymentMobile;
