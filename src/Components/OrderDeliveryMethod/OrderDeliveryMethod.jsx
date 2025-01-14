function OrderDeliveryMethod() {
  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-4">
      <div className="divide-y md:flex md:w-full md:flex-row md:divide-none">
        <div className="flex w-full items-center py-2 md:max-w-44">
          <div>
            <img src="/icons/truck.svg" className="md:w-6" alt="" />
          </div>
          <h4 className="text-sm text-[#353535] md:text-base md:font-bold">
            روش تحویل سفارش
          </h4>
        </div>
        <div className="flex w-full flex-col gap-3 py-2 md:max-w-96 md:flex-row md:justify-between">
          <div className="flex flex-row gap-2">
            <input type="checkbox" className="rounded-full" />
            <div className="flex items-center">
              <h6 className="text-xs text-[#717171] md:text-base">
                ارسال توسط پیک
              </h6>

              <img src="/icons/truck.svg" className="md:w-6" alt="" />
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" className="rounded-full" />
            <div className="flex items-center">
              <h6 className="text-xs text-[#717171] md:text-base">
                تحویل حضوری
              </h6>
              <img src="/icons/shopping-bag.svg" className="md:w-6" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDeliveryMethod;
