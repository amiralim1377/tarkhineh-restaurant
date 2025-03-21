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
          slidesPerView: 2,
        },
        425: {
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
        <SwiperSlide className="py-3" key={index}>
          <div className="justify-betweenoverflow-hidden flex h-32 w-full max-w-56 flex-row items-center gap-2 rounded-lg border border-gray-300 bg-white p-1 md:max-h-60 md:max-w-lg">
            <div className="flex w-full max-w-16 flex-col items-center text-[#717171] md:min-w-28">
              <img
                src={comment.user_image_url}
                alt="avatar"
                className="h-9 w-9 rounded-full object-cover md:h-12 md:w-12 lg:h-16 lg:w-16"
              />
              <h6 className="text-nowrap text-[10px] md:text-sm">
                {`${comment.first_name} ${comment.last_name}`}
              </h6>
              <h6 className="text-[10px] md:text-sm">{comment.created_at}</h6>
            </div>
            <div className="w-full max-w-40 md:max-w-md">
              <p className="line-clamp-5 text-[10px] leading-relaxed md:text-base">
                {comment.comment}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BranchUsersCommentsSlider;
