function PaymentMethod() {
  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-4">
      <div className="divide-y md:flex md:w-full md:flex-row md:divide-none">
        <div className="flex w-full items-center py-2 md:max-w-44">
          <div>
            <img src="/icons/wallet-money.svg" className="md:w-6" alt="" />
          </div>
          <h4 className="text-sm text-[#353535] md:text-base md:font-bold">
            روش پرداخت
          </h4>
        </div>
        <div className="flex w-full flex-row gap-3 py-2 md:max-w-96 md:flex-row md:justify-between">
          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <h5 className="text-xs text-[#717171]">پرداخت اینترنتی</h5>
            <img src="/icons/card-pos.svg" alt="" />
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <h5 className="text-xs text-[#717171]">پرداخت در محل</h5>
            <img src="/icons/wallet-3.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
