import "swiper/css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HomepageSlider() {
  return (
    <div className="flex h-[336px] w-full font-Estedad">
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-full"
      >
        <SwiperSlide className="relative bg-gray-200">
          <img
            src="/slider/23879f9f8eb72cd3ec37eb55f5c078b5.jpg"
            alt="اولین اسلاید"
            className="h-[336px] w-full object-cover brightness-50 filter"
          />
          <div className="font-estedad absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-center text-xl font-bold md:text-5xl">
              تجربه غذای سالم وگیاهی به سبک ترخینه
            </h2>
            <button className="mt-4 rounded-md bg-[#417F56] px-4 py-2 font-semibold">
              سفارش آنلاین غذا
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative bg-gray-200">
          <img
            src="/slider/53a6ec15fe6e2b7e0720ac84c1398215.jpg"
            alt="دومین اسلاید"
            className="h-[336px] w-full object-cover brightness-50 filter"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center font-Estedad text-white">
            <h2 className="text-center text-xl font-bold md:text-5xl">
              طعم بی‌نظیر طبیعت!
            </h2>
            <button className="mt-4 rounded-md bg-[#417F56] px-4 py-2 font-semibold">
              سفارش آنلاین غذا
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative bg-gray-200">
          <img
            src="/slider/3.jpg"
            alt="دومین اسلاید"
            className="h-[336px] w-full object-cover brightness-50 filter"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center font-Estedad text-white">
            <h2 className="text-center text-xl font-bold md:text-5xl">
              {" "}
              لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomepageSlider;
