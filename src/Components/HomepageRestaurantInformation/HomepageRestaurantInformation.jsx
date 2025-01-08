function HomepageRestaurantInformation() {
  return (
    <div className="bg-homepageinformation mt-16 flex flex-col items-center justify-center md:justify-center">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between space-y-2 p-2 md:flex-row md:items-center md:space-y-6">
        <div className="max-w-80 space-y-1 text-white md:max-w-sm md:space-y-10 lg:max-w-xl xl:max-w-3xl">
          <h4 className="text-base font-bold md:text-xl">
            رستوران‌های زنجیره‌ای ترخینه
          </h4>
          <p className="text-justify text-sm text-white md:text-lg lg:text-xl">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <div className="flex justify-end">
            <button className="flex items-center rounded-md border-2 border-white p-2 md:px-4 md:py-2">
              اطلاعات بیشتر
              <img src="/icons/arrow-left.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="grid w-full max-w-80 grid-cols-2 items-center gap-6 text-nowrap">
          <div className="flex flex-col items-center text-sm font-semibold text-white md:text-lg">
            <img
              src="/public/icons/user.svg"
              className="h-6 w-6 fill-white md:h-12 md:w-12"
              alt=""
            />
            <h6>پرسنلی مجرب و حرفه‌ای</h6>
          </div>
          <div className="flex flex-col items-center text-sm font-semibold text-white md:text-lg">
            <img
              src="/icons/diagram.svg"
              className="h-6 w-6 fill-white md:h-12 md:w-12"
              alt=""
            />
            <h6>کیفیت بالای غذاها</h6>
          </div>
          <div className="flex flex-col items-center text-sm font-semibold text-white md:text-lg">
            <img
              src="/icons/home-wifi.svg"
              className="h-6 w-6 fill-white md:h-12 md:w-12"
              alt=""
            />
            <h6>محیطی دلنشین و آرام</h6>
          </div>
          <div className="flex flex-col items-center text-sm font-semibold text-white md:text-lg">
            <img
              src="/icons/menu-board.svg"
              className="h-6 w-6 fill-white md:h-12 md:w-12"
              alt=""
            />
            <h6>منوی متنوع</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageRestaurantInformation;
