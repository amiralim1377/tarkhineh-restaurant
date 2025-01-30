function DashboardOrderTrackingSecondItem() {
  return (
    <div id="2" className="flex flex-row items-start justify-between">
      <div className="flex flex-col items-start text-xs text-[#757575]">
        <span className="flex items-center gap-1">
          <img src="/icons/calendar.svg" alt="" />
          شنبه، ۸ مرداد، ساعت ۱۸:۵۳
        </span>
        <span className="flex items-center gap-1">
          <img src="/icons/location.svg" className="h-3 w-3" alt="" />
          تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
        </span>
        <div className="flex items-center gap-3">
          <div>
            <span className="flex items-center gap-1">
              <img src="/icons/wallet-3.svg" className="h-3 w-3" alt="" />
              مبلغ:۲۲۸٬۵۰۰ تومان
            </span>
          </div>
          <div>
            <span>تخفیف:</span>
            <span>۲۸٬۵۰۰ تومان</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <img src="/icons/clock.svg" alt="" />
        <span className="text-xs text-[#717171]">آماده تحویل تا</span>
        <span className="text-xs text-[#417F56]">18:۳۳</span>
      </div>
    </div>
  );
}

export default DashboardOrderTrackingSecondItem;
