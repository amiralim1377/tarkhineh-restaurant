import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function BranchesImageModalItem({ branch_images }) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[Navigation, Pagination, Thumbs]}
      className="h-96"
    >
      {branch_images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Branch Image ${index}`}
            className="h-full w-full rounded-lg object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default BranchesImageModalItem;
