import "swiper/css";
import { SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import {
  Mousewheel,
  Keyboard,
  FreeMode,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import { formatPrice } from "../../helper_functions/formatPrice";
import { Swiper } from "swiper/react";
import useCart from "../React Custom Hooks/useCart/useCart";
import AddToFavoritesFromSlider from "../AddToFavoritesFromSlider/AddToFavoritesFromSlider";

function SpecialOfferSlider({ data }) {
  const { handleAddToCart, handleRemoveFromCart, isAddedInCart } = useCart();

  const handleAddToCartFromPagesSlider = (item) => {
    handleAddToCart(item);
  };

  const handleRemoveFromPagesSlider = (item) => {
    handleRemoveFromCart(item.id);
  };

  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={false}
      mousewheel={{ forceToAxis: true }}
      keyboard={true}
      grabCursor={true}
      scrollbar={{ draggable: true }}
      loop={true}
      loopedslides={data?.length}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Mousewheel, Keyboard, FreeMode, Scrollbar, Autoplay]}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 5,
        },
      }}
      className="overflow-hidden"
    >
      {data?.map((item) => (
        <SwiperSlide key={item?.id}>
          <div className="w-full overflow-hidden rounded-lg border border-gray-300 bg-white">
            <img
              src={item?.images}
              className="h-28 w-full overflow-hidden object-cover md:h-64"
              alt=""
            />
            <div className="mx-auto flex w-full flex-col items-center space-y-3 p-2 md:p-4">
              <h4 className="line-clamp-1 text-center text-xs md:text-lg">
                {item?.name_fa}
              </h4>
              <div className="flex w-full flex-row items-center justify-between">
                <AddToFavoritesFromSlider item={item} />
                <div className="justify بین flex items-center gap-1">
                  <span className="text-[10px] text-[#ADADAD] line-through">
                    {formatPrice(item?.price)}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-200 p-2 text-center text-[10px] text-red-700 md:text-sm">
                    %{item.discount_percentage}
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-1 text-[10px]">
                  <img src="/SpecialOffer/Star rate.svg" alt="" />
                  <span>{item?.rating}</span>
                  {item?.number_of_reviews ? (
                    <span className="text-[#ADADAD]">
                      ({item?.number_of_reviews} نظر)
                    </span>
                  ) : (
                    <span className="text-[#ADADAD]">بدون نظر</span>
                  )}
                </div>
                <span className="text-[10px] md:text-base">
                  {formatPrice(item?.price)}
                </span>
              </div>
              {isAddedInCart(item.id) ? (
                <button
                  onClick={() => handleRemoveFromPagesSlider(item)}
                  className="text-overflow-ellipsis h-10 w-full max-w-36 overflow-hidden whitespace-nowrap rounded-lg border border-green-primary-500 bg-white p-2 text-xs text-green-primary-500 md:max-w-52"
                >
                  حذف از سبد خرید
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCartFromPagesSlider(item)}
                  className="text-overflow-ellipsis h-10 w-full max-w-36 overflow-hidden whitespace-nowrap rounded-lg bg-green-primary-500 p-2 text-xs text-white md:max-w-52"
                >
                  افزودن به سبد خرید
                </button>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SpecialOfferSlider;
