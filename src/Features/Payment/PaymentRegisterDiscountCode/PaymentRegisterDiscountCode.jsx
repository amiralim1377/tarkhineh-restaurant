function PaymentRegisterDiscountCode() {
  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-4 text-white">
      <div className="divide-y md:flex md:w-full md:flex-row md:divide-none">
        <div className="flex w-full items-center py-2 md:max-w-44">
          <div>
            <img src="/icons/discount-shape.svg" className="md:w-6" alt="" />
          </div>
          <h4 className="text-sm text-[#353535] md:text-base md:font-bold">
            ثبت کد تخفیف
          </h4>
        </div>
        <div className="flex w-full flex-row gap-3 py-2 md:max-w-96 md:flex-row md:justify-between">
          <input
            type="text"
            placeholder="کد تخفیف"
            className="w-full rounded-md border border-gray-300"
          />
          <button className="text-nowrap rounded-md bg-[#CBCBCB] p-1 md:px-6 md:py-2">
            ثبت کد
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentRegisterDiscountCode;
