import { useNavigate } from "react-router-dom";

function EmptyShoppingCart() {
  const navigate = useNavigate();
  return (
    <div className="p-2">
      <div className="p-2 md:hidden">
        <div className="flex flex-row items-baseline justify-between">
          <div>
            <img src="/icons/Slider Arrow.svg" alt="" />
          </div>

          <h3 className="text-base font-bold text-[#353535]">سبد خرید</h3>

          <div>
            <img src="/icons/trash.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 hidden max-w-3xl flex-row items-center justify-between md:flex">
        <div className="flex items-center gap-x-1">
          <img src="/icons/shopping-cart.svg" className="w-8" alt="" />

          <h3 className="text-nowrap text-base font-bold text-green-primary-500">
            سبد خرید
          </h3>
        </div>

        <div className="flex flex-row items-center">
          <span className="text-[#CBCBCB]">----------------</span>
          <span className="text-[#CBCBCB]">--------</span>
        </div>

        <div className="flex items-center gap-x-1 text-[#CBCBCB]">
          <img src="/icons/tick-square.svg" alt="" />
          <h3 className="text-nowrap">تکمیل اطلاعات</h3>
        </div>
        <div className="text-[#CBCBCB]">-------------------------</div>

        <div className="flex items-center gap-x-1 text-[#CBCBCB]">
          <img src="/icons/wallet-2.svg" alt="" />
          <h3>پرداخت</h3>
        </div>
      </div>
      <div className="mx-auto my-8 flex min-h-80 max-w-8xl flex-col items-center justify-center rounded-md border border-gray-300">
        <div className="relative flex w-full flex-col items-center justify-center">
          <h2 className="absolute z-20 text-center text-sm text-[#757575] md:text-lg">
            شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
          </h2>
          <img src="/icons/Empty page.svg" className="md:w-52" alt="" />
        </div>
        <button
          onClick={() => navigate("/menu")}
          className="rounded-lg border border-green-primary-500 px-6 py-2 text-green-primary-500"
        >
          منوی رستوران
        </button>
      </div>
    </div>
  );
}

export default EmptyShoppingCart;
