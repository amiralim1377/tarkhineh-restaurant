import AboutUsFeatures from "../../Components/AboutUsFeatures/AboutUsFeatures";

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="bg-aboutus flex w-full items-center justify-center">
        <h2 className="text-base font-bold text-white md:text-4xl">
          درباره ترخینه بیشتر بدانید!
        </h2>
      </div>
      <div className="mx-auto mt-6 w-full max-w-8xl">
        <h2 className="px-2 text-2xl font-bold text-[#353535]">درباره‌ما:</h2>
        <div className="mx-auto w-full max-w-md px-2 md:hidden">
          <div className="mx-auto flex w-full max-w-md flex-row justify-between gap-2">
            <p className="w-full max-w-md text-justify text-[10px] text-[#717171]">
              رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
              این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع
              در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها
              اولویت جلب رضایت مشتریان بوده است.
            </p>
            <div className="flex w-full max-w-40 items-start justify-start">
              <img
                src="/about-us/6ea6f971b29ed1930912d8ecff3a24ed.jpg"
                className="h-32 w-full rounded-md object-cover"
                alt=""
              />
            </div>
          </div>
          <p className="w-full text-justify text-[10px] text-[#717171]">
            دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت
            غذاهای خود را در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های
            مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات
            خودرا افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری
            جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا
            را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و
            آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما
            عزیزان می‌باشند. چشم انداز: در آینده ای نزدیک تالار پذیرایی شعبات
            راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند
            بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.
          </p>
        </div>
        <div className="hidden flex-row justify-between gap-2 px-2 md:flex">
          <p className="w-full max-w-2xl text-justify text-[#717171] md:text-base md:leading-7 lg:leading-9 xl:text-xl xl:leading-10">
            رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
            این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در
            تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب
            رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در
            طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با
            نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است.
            ترخینه شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای
            برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با
            کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه
            پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس
            به شما عزیزان می‌باشند. چشم انداز: در آینده‌ای نزدیک تالار پذیرایی
            شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما
            خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.
          </p>
          <div className="w-full max-w-2xl">
            <img
              src="/about-us/6ea6f971b29ed1930912d8ecff3a24ed.jpg"
              alt=""
              className="h-96 min-h-[492px] w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <AboutUsFeatures />
    </div>
  );
}

export default AboutUs;
