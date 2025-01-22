import { useNavigate } from "react-router-dom";
import MobileCartListing from "../../../Components/MobileCartListing/MobileCartListing";
import { useSelector } from "react-redux";
import useCart from "../../../Components/React Custom Hooks/useCart/useCart";

function CompletionInformationDesktopFactor() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart?.cart);
  const { handleClearCart } = useCart();
  return (
    <div className="rounded-lg border border-gray-300 bg-white p-3">
      <div className="flex flex-col items-start space-y-4 divide-y">
        <div className="flex w-full flex-row items-center justify-between py-2">
          <div>
            <h4>سبد خرید(۴)</h4>
          </div>
          <button onClick={() => handleClearCart()}>
            <img src="/icons/trash.svg" className="w-6" alt="" />
          </button>
        </div>
        <div className="max-h-44 w-full overflow-y-scroll rounded-md bg-[#F9F9F9] p-2">
          {cart.map((cartItem) => (
            <MobileCartListing key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="mt-2 flex w-full items-center justify-between py-2">
          <h5 className="text-sm text-[#353535]">تخفیف محصولات</h5>
          <div className="text-sm text-[#717171]">۶۳٬۰۰۰تومان</div>
        </div>
        <div className="flex w-full flex-col">
          <div className="mt-2 flex w-full items-center justify-between">
            <h5 className="text-sm text-[#353535]">هزینه ارسال</h5>
            <div className="text-sm text-[#717171]">۶۳٬۰۰۰تومان</div>
          </div>
          <div className="mt-2 flex w-full flex-row items-start justify-between gap-4">
            <img
              src="/public/icons/warning-2.svg"
              className="object-cover"
              alt=""
            />
            <p className="text-xs text-[#A9791C]">
              هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
              محاسبه و به این مبلغ اضافه خواهد شد.
            </p>
          </div>
        </div>
        <div className="mt-2 flex w-full items-center justify-between">
          <h5 className="text-sm text-[#353535]"> مبلغ قابل پرداخت</h5>
          <div className="text-sm font-semibold text-green-primary-500">
            ۵۴۲٬۰۰۰تومان
          </div>
        </div>

        <div className="mt-3 w-full">
          <button
            onClick={() => navigate("/payment")}
            className="flex w-full flex-row items-center justify-center rounded-md bg-green-primary-500 p-2 text-xs text-white"
          >
            <img src="/icons/tick-circle.svg" alt="" />
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompletionInformationDesktopFactor;
