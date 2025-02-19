function NoDeliveredOrders() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-6">
      <div className="relative flex w-full items-center justify-center">
        <img src="/icons/Empty page.svg" className="" alt="" />
        <span className="absolute top-8 z-10 text-center text-lg text-[#717171]">
          شما در حال حاضر هیچ سفارش تحویل‌شده‌ای ندارید!
        </span>
      </div>
      <button className="w-full max-w-sm rounded-lg border border-green-primary-500 px-6 py-3 text-green-primary-500">
        منوی رستوران
      </button>
    </div>
  );
}

export default NoDeliveredOrders;
