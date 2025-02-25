import "swiper/css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import useModal from "../React Custom Hooks/useModal/useModal";
import { v4 as uuidv4 } from "uuid";
import BranchSelectionModal from "../BranchSelectionModal/BranchSelectionModal";

function HomepageSlider() {
  const navigate = useNavigate();
  const [menuId, setMenuId] = useState();
  const selectedBranch = useSelector(
    (state) => state.branches?.selectedBranch?.id,
  );
  const { isOpen, modalType, openModalHandler, modalId } = useModal();
  const handleOpenMenuItem = () => {
    if (!selectedBranch) {
      const newModalId = uuidv4();
      setMenuId(newModalId);
      openModalHandler("BranchSelectionModal", null, newModalId);
    } else {
      navigate("/menu");
    }
  };
  return (
    <div className="font-Estedad flex h-[336px] w-full">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center font-estedad text-white">
            <h2 className="text-center text-xl font-bold md:text-5xl">
              تجربه غذای سالم وگیاهی به سبک ترخینه
            </h2>
            <button
              onClick={handleOpenMenuItem}
              className="mt-4 rounded-md bg-[#417F56] px-4 py-2 font-semibold"
            >
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
          <div className="font-Estedad absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-center text-xl font-bold md:text-5xl">
              طعم بی‌نظیر طبیعت!
            </h2>
            <button
              onClick={handleOpenMenuItem}
              className="mt-4 rounded-md bg-[#417F56] px-4 py-2 font-semibold"
            >
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
          <div className="font-Estedad absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-center text-xl font-bold md:text-5xl">
              لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!
            </h2>
            <button
              onClick={handleOpenMenuItem}
              className="mt-4 rounded-md bg-[#417F56] px-4 py-2 font-semibold"
            >
              سفارش آنلاین غذا
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      {isOpen && modalType == "BranchSelectionModal" && modalId == menuId && (
        <BranchSelectionModal branchSelectionId={menuId} />
      )}
    </div>
  );
}

export default HomepageSlider;
