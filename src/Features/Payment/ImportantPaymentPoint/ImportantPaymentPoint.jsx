function ImportantPaymentPoint() {
  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-4">
      <div className="divide-y md:flex md:w-full md:flex-row md:divide-none">
        <div className="flex w-full items-center py-2 md:max-w-44">
          <div>
            <img src="/icons/warning-3.svg" className="md:w-6" alt="" />
          </div>
          <h4 className="text-sm text-[#353535] md:text-base md:font-bold">
            قابل توجه
          </h4>
        </div>
        <div className="flex w-full flex-row gap-3 py-2 md:w-full md:flex-row md:justify-between">
          <p className="text-xs text-[#717171]">
            هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از تحویل
            کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از درخواست برای
            پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر از همراهی شما.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImportantPaymentPoint;
