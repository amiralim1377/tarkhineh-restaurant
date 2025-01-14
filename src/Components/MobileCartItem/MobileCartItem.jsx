function MobileCartItem() {
  return (
    <div className="mt-4 rounded-lg border border-gray-300 bg-white p-3">
      <div className="flex flex-col items-start">
        <div className="max-h-44 w-full overflow-y-scroll rounded-md bg-[#F9F9F9] p-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="mx-auto flex w-full flex-row items-center justify-between space-y-4 hover:bg-[#EDEDED]"
            >
              <div className="flex flex-col">
                <h5 className="text-xs">پاستا سبزیجات</h5>
                <h6 className="text-[10px]">۱۴۰٬۰۰۰تومان</h6>
              </div>
              <div className="flex w-full max-w-14 items-center justify-between">
                <div>
                  <img src="/icons/+.svg" alt="" />
                </div>
                <span>1</span>
                <div>
                  <img src="/icons/greentrash.svg" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex w-full items-center justify-between">
          <h5 className="text-sm text-[#353535]">تخفیف محصولات</h5>
          <div className="text-sm text-[#717171]">۶۳٬۰۰۰تومان</div>
        </div>
        <div className="flex w-full flex-col">
          <div className="mt-2 flex w-full items-center justify-between">
            <h5 className="text-sm text-[#353535]">هزینه ارسال</h5>
            <div className="text-sm text-[#717171]">۶۳٬۰۰۰تومان</div>
          </div>
          <div className="mt-2 flex w-full flex-row items-start justify-between gap-4">
            <img
              src="/public/icons/warning-2.svg"
              className="object-cover"
              alt=""
            />
            <p className="text-xs text-[#A9791C]">
              هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
              محاسبه و به این مبلغ اضافه خواهد شد.
            </p>
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
            تکمیل اطلاعات <img src="/icons/arrow-left.svg" alt="" />
          </button>
        </div>
        <div className="mt-3 w-full">
          <button className="flex w-full flex-row items-center justify-center gap-1 rounded-md bg-green-primary-500 p-2 text-xs text-white">
            <img src="/public/icons/user.svg" className="h-4 w-4" alt="" />
            ورود/ثبت‌نام
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileCartItem;
