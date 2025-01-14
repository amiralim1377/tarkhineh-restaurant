function PaymentFactor() {
  return (
    <div className="rounded-lg border border-gray-300 bg-white p-3">
      <div className="flex flex-col items-start space-y-4 divide-y">
        <div className="mt-2 flex w-full items-center justify-between">
          <h5 className="text-sm text-[#353535]">تخفیف محصولات</h5>
          <div className="text-sm text-[#717171]">۶۳٬۰۰۰تومان</div>
        </div>
        <div className="flex w-full flex-col">
          <div className="mt-2 flex w-full items-center justify-between">
            <h5 className="text-sm text-[#353535]">هزینه ارسال</h5>
            <div className="text-sm text-[#717171]">۶۳٬۰۰۰تومان</div>
          </div>
        </div>
        <div className="mt-2 flex w-full items-center justify-between">
          <h5 className="text-sm text-[#353535]"> مبلغ قابل پرداخت</h5>
          <div className="text-sm font-semibold text-green-primary-500">
            ۵۴۲٬۰۰۰تومان
          </div>
        </div>

        <div className="mt-3 w-full">
          <button className="flex w-full flex-row items-center justify-center rounded-md bg-green-primary-500 p-2 text-xs text-white">
            <img src="/icons/tick-circle.svg" alt="" />
            تایید و پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentFactor;
