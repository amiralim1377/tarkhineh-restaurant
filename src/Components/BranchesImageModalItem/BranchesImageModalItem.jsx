import "swiper/css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function BranchesImageModalItem({ branch_images }) {
  return (
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
      {branch_images?.map((image, index) => (
        <SwiperSlide
          key={index}
          className="relative max-h-[350px] w-full p-3 md:max-h-[400px] lg:max-h-[500px]"
        >
          <img
            src={image}
            alt={`Branch image ${index}`}
            className="h-full w-full rounded-lg object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BranchesImageModalItem;
