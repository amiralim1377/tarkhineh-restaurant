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

function BranchUsersCommentsSlider({ branchData }) {
  const { comments } = branchData;

  return (
    <Swiper
      spaceBetween={5}
      centeredSlides={false}
      mousewheel={{ forceToAxis: true }}
      keyboard={true}
      grabCursor={true}
      scrollbar={{ draggable: true }}
      loop={true}
      loopedslides={comments?.length}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Mousewheel, Keyboard, FreeMode, Scrollbar, Autoplay]}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="overflow-hidden"
    >
      {comments?.map((comment, index) => (
        <SwiperSlide key={index}>
          <div className="w-full max-w-72 overflow-hidden rounded-lg border border-gray-300 bg-white p-4 md:max-w-xl">
            <div className="flex max-h-36 w-full flex-row items-center justify-between gap-x-4 p-2">
              <div className="flex w-full max-w-16 flex-col items-center text-[#717171] md:min-w-28">
                <img
                  src="/Comment/49e93a33a95adeec5fb423e4debd5312.jpg"
                  alt="avatar"
                  className="h-14 w-14 rounded-full md:h-24 md:w-24"
                />
                <h6 className="text-nowrap text-[10px] md:text-sm">
                  {`${comment.first_name} ${comment.last_name}`}
                </h6>
                <h6 className="text-[10px] md:text-sm">{comment.created_at}</h6>
              </div>
              <div className="w-full max-w-36 text-justify md:max-w-md">
                <p className="text-xs md:text-base">{comment.comment}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BranchUsersCommentsSlider;
