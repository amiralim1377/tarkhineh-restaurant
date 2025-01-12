import "swiper/css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function BranchPagePhotoSlider() {
  return (
    <div className="relative w-full">
      <div className="font-Estedad relative flex h-[336px] w-full flex-col">
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
              src="/branches/d5c39ff5c7dcfd7412a964561eb2869d.jpg"
              alt="اولین اسلاید"
              className="h-[336px] w-full object-cover brightness-50 filter"
            />
          </SwiperSlide>
          <SwiperSlide className="relative bg-gray-200">
            <img
              src="/branches/284a13bf5484d9662967305806e58e8c.jpg"
              alt="دومین اسلاید"
              className="h-[336px] w-full object-cover brightness-50 filter"
            />
          </SwiperSlide>
          <SwiperSlide className="relative bg-gray-200">
            <img
              src="/branches/8295be0e464709726a66931b63d8cfdb.jpg"
              alt="دومین اسلاید"
              className="h-[336px] w-full object-cover brightness-50 filter"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute -bottom-8 left-0 right-0 z-10 mx-auto flex max-w-xs flex-col gap-y-3 rounded-lg border border-green-primary-500 bg-white p-4 md:max-w-xl md:flex-row lg:-bottom-10 lg:max-w-3xl">
        <div className="mx-auto flex w-full flex-col items-center md:flex-row">
          <div className="mx-auto flex w-full flex-col items-center justify-evenly md:flex-row-reverse">
            <div className="flex w-full flex-row items-center gap-1 md:max-w-52 md:flex-col">
              <img src="/icons/location.svg" className="md:h-8 md:w-8" alt="" />
              <span className="text-[10px] md:text-base">
                شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
              </span>
            </div>
            <div className="flex w-full flex-row items-center gap-1 md:max-w-52 md:flex-col">
              <img src="/icons/clock.svg" className="md:h-8 md:w-8" alt="" />
              <h6 className="w-full text-[10px] md:text-base">
                همه‌روزه از ساعت ۱۲ الی ۲۳
              </h6>
            </div>
          </div>
          <div className="flex w-full flex-row items-center gap-1 md:max-w-52 md:flex-col">
            <img
              src="/icons/call-calling.svg"
              className="md:h-8 md:w-8"
              alt=""
            />
            <span className="text-[10px] md:text-base">۰۲۱-۵۴۸۹۱۲۵۰-۵۱</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BranchPagePhotoSlider;
