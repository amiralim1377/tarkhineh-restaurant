import { Dialog } from "@headlessui/react";
import useModal from "../React Custom Hooks/useModal/useModal";
import { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const BranchModalImage = memo(({ modalImageId, branch_images }) => {
  const { isOpen, modalType, modalId, closeModalHandler } = useModal();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log(branch_images);

  const isModalOpen =
    isOpen && modalType === "branchModalImage" && modalId == modalImageId;

  return (
    <Dialog
      open={isModalOpen}
      onClose={closeModalHandler}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="mx-auto flex h-auto w-[90%] max-w-4xl flex-col rounded-lg bg-white p-4">
          <Dialog.Title className="text-center text-lg font-bold text-gray-900">
            عکس‌های شعبه
          </Dialog.Title>

          <div className="mt-4">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation
              dir="rtl"
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
                    onError={(e) => {
                      console.error(
                        `Error loading image at index ${index}: ${e.target.src}`,
                      );
                      e.target.src = "/default-placeholder.jpg";
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-4">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              watchSlidesProgress
              className="h-24"
            >
              {branch_images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            onClick={closeModalHandler}
            className="mt-4 self-center rounded bg-red-500 px-4 py-2 text-white"
          >
            بستن
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
});

BranchModalImage.displayName = "BranchModalImage";

export default memo(BranchModalImage);
