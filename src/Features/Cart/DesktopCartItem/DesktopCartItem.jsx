function DesktopCartItem() {
  return (
    <div className="mx-auto my-8 flex max-w-8xl flex-row items-start justify-between gap-x-4">
      <div className="border-gray-30 flex max-h-[560px] w-full max-w-4xl flex-col space-y-4 overflow-y-scroll rounded-lg border-2 p-3">
        {Array.from({ length: 20 }).map((_, index) => (
          <>
            <div className="flex flex-row rounded-lg border hover:bg-[#EDEDED]">
              <div className="w-full max-w-44">
                <img
                  src="/public/menu/IranianFood/c18324ae6672db4300937e223eb47955.jpg"
                  className="min-h-40 object-cover"
                  alt=""
                />
              </div>
              <div className="w-full p-2">
                <div className="flex h-full flex-col justify-between p-2">
                  <div className="flex flex-row items-center justify-between">
                    <h5 className="text-xl font-semibold text-[#353535]">
                      پاستا سبزیجات
                    </h5>
                    <div>
                      <img
                        src="/public/icons/trash.svg"
                        className="w-6"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div>
                      <p className="text-sm">
                        اسفناج تازه، پیاز، سیر، پنیر پیتزا، قارچ
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-base text-[#CBCBCB] line-through">
                        ۲۸۰٬۰۰۰
                      </div>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-300 text-xs text-red-800">
                        %۱۰
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex w-full max-w-16 flex-row items-center justify-center gap-3 rounded-lg bg-[#E5F2E9] p-2">
                      <div>
                        <img src="/icons/+.svg" alt="" />
                      </div>
                      <span className="text-sm text-green-primary-500">2</span>

                      <div>
                        <img src="/icons/-.svg" alt="" />
                      </div>
                    </div>
                    <div className="text-xl text-[#353535]">۲۵۲٬۰۰۰تومان</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="w-full max-w-lg rounded-lg border-2 border-gray-300 px-4 py-6">
        <div className="flex w-full flex-col space-y-5 divide-y-2 divide-gray-300">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center">
              <h4 className="text-base text-[#353535]">سبد خرید</h4>
              <span className="text-[#353535]">(۴)</span>
            </div>
            <div>
              <img src="/icons/trash.svg" className="w-6" alt="" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between py-2">
            <div>
              <h4 className="text-sm text-[#353535]">تخفیف محصولات</h4>
            </div>
            <div className="text-[#717171]">
              <span>۶۳٬۰۰۰تومان</span>
            </div>
          </div>
          <div className="flex flex-col py-2">
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-sm text-[#353535]">هزینه ارسال</h4>
              <h6 className="text-sm text-[#353535]">0تومان</h6>
            </div>
            <div className="mt-4 flex flex-row gap-2">
              <div>
                <img src="/icons/warning-2.svg" alt="" />
              </div>
              <div>
                <p className="text-xs text-[#A9791C]">
                  هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی
                  شما محاسبه و به این مبلغ اضافه خواهد شد.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between py-2">
            <h5 className="text-sm text-[#353535]">مبلغ قابل پرداخت</h5>
            <span className="text-base text-green-primary-500">
              ۵۴۲٬۰۰۰تومان
            </span>
          </div>
          <div className="mt-3 w-full py-2">
            <button className="flex w-full flex-row items-center justify-center rounded-md bg-green-primary-500 p-2 text-xs text-white">
              تکمیل اطلاعات <img src="/icons/arrow-left.svg" alt="" />
            </button>
          </div>
          <div className="mt-3 w-full py-2">
            <button className="flex min-h-10 w-full flex-row items-center justify-center gap-1 rounded-md bg-green-primary-500 p-2 text-xs text-white">
              <img src="/public/icons/user.svg" className="h-4 w-4" alt="" />
              ورود/ثبت‌نام
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopCartItem;
