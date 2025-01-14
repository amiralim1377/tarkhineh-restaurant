function MenuItemsSandwiches() {
  return (
    <div className="mx-auto w-full p-2">
      <div className="my-4 flex flex-row items-center justify-between">
        <h3 className="text-base font-bold leading-6 text-[#353535] md:text-2xl">
          غذاهای ایرانی
        </h3>
        <button className="flex flex-row items-center gap-x-2 rounded-lg border border-green-primary-500 p-2 text-xs font-normal text-green-primary-500 md:text-base">
          <img src="/icons/shopping-cart.svg" alt="" />
          تکمیل خرید
        </button>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {Array.from({ length: 10 }, (_, i) => (
          <>
            <div className="flex max-w-md flex-row items-center justify-between overflow-hidden rounded-lg border border-gray-300 md:max-w-3xl md:gap-2">
              <div className="w-full max-w-24 md:max-w-52">
                <img
                  src="/menu/IranianFood/e6cffba4adc1773badfc393fdcd5331f.jpg"
                  alt=""
                  className="min-h-28 object-cover md:min-h-44"
                />
              </div>
              <div className="flex w-full max-w-80 flex-col space-y-2 p-2 md:max-w-lg">
                <div className="flex flex-row items-center justify-between">
                  <h3 className="text-xs text-[#353535] md:text-xl md:font-semibold">
                    کوفته برنجی
                  </h3>
                  <div className="flex w-full max-w-20 items-center justify-between text-[10px] md:hidden">
                    <div className="w-full text-[#ADADAD] line-through">
                      ۱۸۰٬۰۰۰
                    </div>
                    <div className="flex w-6 items-center justify-center rounded-full bg-red-200 p-1 text-[9px] text-red-800">
                      %۳۵
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <img src="/icons/heart.svg" className="h-6 w-6" alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] md:text-sm">
                  <div className="line-clamp-1 w-full max-w-28 text-[#353535] md:line-clamp-2 md:max-w-64">
                    <p>
                      برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز
                    </p>
                  </div>
                  <div className="hidden w-full max-w-28 flex-col items-center gap-3 md:flex">
                    <div className="flex w-full items-center justify-between text-base">
                      <div className="w-full text-[#ADADAD] line-through">
                        ۱۸۰٬۰۰۰
                      </div>
                      <div className="flex w-10 items-center justify-center rounded-full bg-red-200 px-1 py-2 text-red-800 md:text-xs">
                        %۳۵
                      </div>
                    </div>
                    <div className="text-lg">۱۴۵٬۰۰۰تومان </div>
                  </div>

                  <div className="md:hidden">۱۴۵٬۰۰۰تومان </div>
                </div>
                <div className="flex w-full flex-row items-center justify-between md:justify-end">
                  <div className="md:hidden">
                    <img src="/icons/heart.svg" alt="" />
                  </div>
                  <button className="w-full max-w-28 text-nowrap rounded-lg bg-green-primary-500 p-2 text-[10px] text-white md:max-w-80 md:text-base">
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default MenuItemsSandwiches;
