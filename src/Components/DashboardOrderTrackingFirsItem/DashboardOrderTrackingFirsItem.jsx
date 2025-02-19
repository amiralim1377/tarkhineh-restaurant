function DashboardOrderTrackingFirsItem({ order, branch }) {
  const { order_status, delivery_method } = order;

  const { name_fa } = branch;

  return (
    <div id="1" className="flex w-full flex-row items-center justify-between">
      <span className="text-xs text-[#757575] md:text-sm">شعبه {name_fa}</span>
      <div className="flex items-center gap-3">
        {delivery_method === "delivery" ? (
          <span className="rounded-lg bg-[#EDEDED] p-2 text-xs text-[##353535]">
            ارسال توسط پیک
          </span>
        ) : (
          <span className="rounded-lg bg-[#EDEDED] p-2 text-xs text-[##353535]">
            تحویل حضوری
          </span>
        )}
        {order_status === "Processing" && (
          <span className="rounded-lg bg-[#FFF8E1] px-4 py-2 text-[10px] text-[#A9791C]">
            جاری
          </span>
        )}
        {order_status === "Canceled" && (
          <span className="rounded-lg bg-[#FFF2F2] px-4 py-2 text-[10px] text-[#C30000]">
            لغو شده
          </span>
        )}
        {order_status === "Delivered" && (
          <span className="rounded-lg bg-green-100 px-4 py-2 text-[10px] text-green-primary-500">
            تحویل شده
          </span>
        )}
      </div>
    </div>
  );
}

export default DashboardOrderTrackingFirsItem;
