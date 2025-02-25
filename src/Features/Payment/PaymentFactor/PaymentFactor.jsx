import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { formatPrice } from "../../../helper_functions/formatPrice";
import useCartCalculations from "../../../Components/React Custom Hooks/useCartCalculations/useCartCalculations";
import useSendOrder from "../../../Components/React Custom Hooks/useSendOrder/useSendOrder";
import PaymentButtons from "../../../Components/PaymentButtons/PaymentButtons";

function PaymentFactor() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart?.cart);
  const DeliveryMethod = useSelector((state) => state.cart?.deliveryMethod);
  const paymentMethod = useSelector((state) => state.cart?.paymentMethod);
  const selectedBank = useSelector((state) => state.cart?.paymentGateway);

  const {
    totalItems,
    totalDiscount,
    extraDiscount,
    totalPrice,
    deliveryCost,
    totalCost,
    totalTime,
  } = useCartCalculations();
  const { mutate: sendOrderToServer, isLoading } = useSendOrder();

  const notifyError = () =>
    toast.error("لطفاً بر روی یک درگاه پرداخت کلیک کنید !", {
      position: "top-left",
      style: {
        background: "#f44336",
        color: "white",
      },
    });

  const handleGoToPaymentGateway = () => {
    if (!selectedBank) {
      notifyError();
    } else {
      navigate("/successful-payment");
    }
  };
  return (
    <div className="rounded-lg border border-gray-300 bg-white p-3">
      <div className="flex flex-col items-start space-y-4 divide-y">
        <div className="mt-2 flex w-full items-center justify-between">
          <h5 className="text-sm text-[#353535]">تخفیف محصولات</h5>
          <span className="text-sm text-[#717171]">
            {formatPrice(totalDiscount)}
          </span>
        </div>
        {DeliveryMethod === "delivery" && (
          <div className="flex w-full flex-col">
            <div className="mt-2 flex w-full items-center justify-between">
              <h5 className="text-sm text-[#353535]">هزینه ارسال</h5>
              <span className="text-sm text-[#717171]">
                {formatPrice(deliveryCost)}
              </span>
            </div>
          </div>
        )}
        <div className="flex w-full items-center justify-between py-2">
          <span className="text-sm text-[#353535]"> مبلغ قابل پرداخت</span>
          <span className="text-sm font-semibold text-green-primary-500">
            {formatPrice(totalCost)}
          </span>
        </div>
        <div className="mt-3 w-full">
          <PaymentButtons />
        </div>
      </div>
    </div>
  );
}

export default PaymentFactor;
