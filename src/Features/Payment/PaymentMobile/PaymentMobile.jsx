import { useNavigate } from "react-router-dom";
import ImportantPaymentPoint from "../ImportantPaymentPoint/ImportantPaymentPoint";
import PaymentFactor from "../PaymentFactor/PaymentFactor";
import PaymentGateway from "../PaymentGateway/PaymentGateway";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import PaymentRegisterDiscountCode from "../PaymentRegisterDiscountCode/PaymentRegisterDiscountCode";
import { useSelector } from "react-redux";

function PaymentMobile() {
  const navigate = useNavigate();
  const PaymentMethodFromRedux = useSelector(
    (state) => state.cart?.paymentMethod,
  );
  return (
    <div className="px-2 md:hidden">
      <div className="my-4 flex items-center justify-between md:hidden">
        <div onClick={() => navigate(-1)}>
          <img
            src="/public/icons/arrow-left-blakc.svg"
            className="rotate-180 cursor-pointer"
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
        {PaymentMethodFromRedux === "online" ? (
          <PaymentGateway />
        ) : (
          <ImportantPaymentPoint />
        )}
        <PaymentFactor />
      </div>
    </div>
  );
}

export default PaymentMobile;
