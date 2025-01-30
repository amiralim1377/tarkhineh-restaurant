function DashboardOrderTrackingFirsItem() {
  return (
    <div id="1" className="flex w-full flex-row items-center justify-between">
      <span className="text-xs text-[#757575]">شعبه اقدسیه</span>
      <div className="flex items-center gap-3">
        <span className="rounded-lg bg-[#EDEDED] p-2 text-xs text-[##353535]">
          تحویل حضوری
        </span>
        <span className="rounded-lg bg-[#FFF8E1] px-4 py-2 text-[10px] text-[#A9791C]">
          جاری
        </span>
        <span className="rounded-lg bg-[#FFF2F2] px-4 py-2 text-[10px] text-[#C30000]">
          لغو شده
        </span>
      </div>
    </div>
  );
}

export default DashboardOrderTrackingFirsItem;
