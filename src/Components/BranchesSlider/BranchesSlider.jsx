import "swiper/css";

import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { formatPrice } from "../../helper_functions/formatPrice";

function BranchesSlider({ item }) {
  console.log();

  return (
    <SwiperSlide key={item.id} className="!w-auto">
      <div className="w-full max-w-44 overflow-hidden rounded-lg border border-gray-300 bg-white md:min-w-80">
        <img
          src={item.images}
          className="h-28 w-full overflow-hidden object-cover md:h-64"
          alt=""
        />
        <div className="mx-auto flex w-full flex-col items-center space-y-3 p-2 md:p-4">
          <h4 className="text-center text-xs md:text-xl">{item.name_fa}</h4>
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <img src="/SpecialOffer/Heart.svg" alt="" />
              <h6 className="hidden text-xs text-[#ADADAD] md:block">
                افزودن به علاقمندی‌ها
              </h6>
            </div>
            <div className="justify بین flex items-center gap-1">
              <span className="text-[10px] text-[#ADADAD] line-through">
                {formatPrice(item.price)}
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-200 p-2 text-center text-[10px] text-red-700 md:text-sm">
                %{item.discount_percentage}
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-1 text-[10px]">
              <img src="/SpecialOffer/Star rate.svg" alt="" />
              <span>{item.rating}</span>
              {item.number_of_reviews ? (
                <span className="text-[#ADADAD]">
                  ({item.number_of_reviews} نظر)
                </span>
              ) : (
                <span className="text-[#ADADAD]">بدون نظر</span>
              )}
            </div>
            <span className="text-[10px] md:text-base">
              {formatPrice(item.discounted_price)}
            </span>
          </div>
          <button className="w-full rounded-lg bg-green-primary-500 p-2 text-xs text-white">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default BranchesSlider;
