import "swiper/css";
import {
  Mousewheel,
  Keyboard,
  FreeMode,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function BranchesSlider() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
      centeredSlides={true}
      mousewheel={{ forceToAxis: true }}
      keyboard={true}
      freeMode={true}
      grabCursor={true}
      scrollbar={{ draggable: true }}
      loop={true}
      loopedslides={20} // افزودن این ویژگی برای جلوگیری از فضای خالی
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Mousewheel, Keyboard, FreeMode, Scrollbar, Autoplay]}
      className="overflow-hidden"
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <SwiperSlide key={index} className="!w-auto">
          <div className="w-full max-w-44 overflow-hidden rounded-lg border border-gray-300 bg-white md:min-w-80">
            <img
              src="/SpecialOffer/1.jpg"
              className="h-28 w-full overflow-hidden object-cover md:h-64"
              alt=""
            />
            <div className="mx-auto flex w-full flex-col items-center space-y-3 p-2 md:p-4">
              <h4 className="text-center text-xs md:text-xl">دلمه برگ کلم</h4>
              <div className="flex w-full flex-row items-center justify-between">
                <div className="flex items-center gap-1">
                  <img src="/SpecialOffer/Heart.svg" alt="" />
                  <h6 className="hidden text-xs text-[#ADADAD] md:block">
                    افزودن به علاقمندی‌ها
                  </h6>
                </div>
                <div className="justify بین flex items-center gap-1">
                  <span className="text-[10px] text-[#ADADAD] line-through">
                    ۲۲۰٬۰۰۰
                  </span>
                  <span className="w-full rounded-full bg-red-200 px-2 text-center text-[10px] text-red-700 md:text-sm">
                    %۸
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-1 text-[10px]">
                  <img src="/SpecialOffer/Star rate.svg" alt="" />
                  <span>۵</span>
                  <span className="text-[#ADADAD]">(۵۲ امتیاز)</span>
                </div>
                <span className="text-[10px] md:text-base">۲۰۹٬۰۰۰ تومان</span>
              </div>
              <button className="w-full rounded-lg bg-green-primary-500 p-2 text-xs text-white">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BranchesSlider;
