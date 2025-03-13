function AboutUsFeatures() {
  return (
    <div className="mt-8 w-full bg-[#EDEDED] px-2 py-6 md:py-11">
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between">
        <div className="flex flex-col items-center">
          <img
            src="/about-us/menu-board.svg"
            className="h-4 w-4 md:h-12 md:w-12"
            alt=""
          />
          <h3 className="max-w-16 text-center text-[10px] md:max-w-48 md:text-lg">
            منوی متنوع
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/about-us/user.svg"
            className="h-4 w-4 md:h-12 md:w-12"
            alt=""
          />
          <h3 className="max-w-16 text-center text-[10px] md:max-w-48 md:text-lg">
            پرسنلی مجرب و حرفه‌ای
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/about-us/diagram.svg"
            className="h-4 w-4 md:h-12 md:w-12"
            alt=""
          />
          <h3 className="max-w-16 text-center text-[10px] md:max-w-48 md:text-lg">
            کیفیت بالای غذا
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/about-us/home-wifi.svg"
            className="h-4 w-4 stroke-black md:h-12 md:w-12"
            alt=""
          />
          <h3 className="max-w-16 text-center text-[10px] md:max-w-48 md:text-lg">
            محیط دلنشین و آرام
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AboutUsFeatures;
