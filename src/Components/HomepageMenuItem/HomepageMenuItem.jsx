import useModal from "../React Custom Hooks/useModal/useModal";
import BranchSelectionModal from "../BranchSelectionModal/BranchSelectionModal";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function HomepageMenuItem() {
  const [menuId, setMenuId] = useState();

  const { isOpen, modalType, openModalHandler, modalId } = useModal();
  const handleOpenMenuItem = () => {
    const newModalId = uuidv4();
    setMenuId(newModalId);
    openModalHandler("BranchSelectionModal", null, newModalId);
  };
  return (
    <>
      <div className="relative mx-auto mt-28 grid max-w-8xl grid-cols-2 justify-items-center gap-6 px-2 md:grid-cols-4">
        <div
          onClick={handleOpenMenuItem}
          className="relative h-[5rem] w-full max-w-36 cursor-pointer rounded-md border bg-green-primary-500 shadow-2xl transition-transform duration-300 hover:scale-105 md:h-[10rem] md:max-w-72"
        >
          <img
            src="/menuitem/4.png"
            className="absolute bottom-5 left-1/2 z-10 h-32 w-32 -translate-x-1/2 transform md:h-60 md:w-60"
            alt="غذای اصلی"
          />
          <span className="absolute -bottom-4 left-1/2 flex w-full max-w-24 -translate-x-1/2 transform items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-2xl md:max-w-32 lg:max-w-40">
            غذای اصلی
          </span>
        </div>
        <div
          onClick={handleOpenMenuItem}
          className="relative h-[5rem] w-full max-w-36 cursor-pointer rounded-md bg-green-primary-500 shadow-2xl transition-transform duration-300 hover:scale-105 md:h-[10rem] md:max-w-72"
        >
          <img
            src="/menuitem/3.png"
            className="absolute bottom-5 left-1/2 z-10 h-32 w-32 -translate-x-1/2 transform md:h-60 md:w-60"
            alt="پیش غذا"
          />
          <span className="absolute -bottom-4 left-1/2 flex w-full max-w-24 -translate-x-1/2 transform items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-2xl md:max-w-32 lg:max-w-40">
            پیش غذا
          </span>
        </div>
        <div
          onClick={handleOpenMenuItem}
          className="relative mt-20 h-[5rem] w-full max-w-36 cursor-pointer rounded-md bg-green-primary-500 shadow-2xl transition-transform duration-300 hover:scale-105 md:mt-0 md:h-[10rem] md:max-w-72"
        >
          <img
            src="/menuitem/2.png"
            className="absolute bottom-5 left-1/2 z-10 h-32 w-32 -translate-x-1/2 transform md:h-60 md:w-60"
            alt="دسر"
          />
          <span className="absolute -bottom-4 left-1/2 flex w-full max-w-24 -translate-x-1/2 transform items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-2xl md:max-w-32 lg:max-w-40">
            دسر
          </span>
        </div>
        <div
          onClick={handleOpenMenuItem}
          className="relative mt-20 h-[5rem] w-full max-w-36 cursor-pointer rounded-md bg-green-primary-500 shadow-2xl transition-transform duration-300 hover:scale-105 md:mt-0 md:h-[10rem] md:max-w-72"
        >
          <img
            src="/menuitem/1.png"
            className="absolute bottom-5 left-1/2 z-10 h-32 w-32 -translate-x-1/2 transform md:h-60 md:w-60"
            alt="نوشیدنی"
          />
          <span className="absolute -bottom-4 left-1/2 flex w-full max-w-24 -translate-x-1/2 transform items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-2xl md:max-w-32 lg:max-w-40">
            نوشیدنی
          </span>
        </div>
      </div>

      {isOpen && modalType == "BranchSelectionModal" && modalId == menuId && (
        <BranchSelectionModal branchSelectionId={menuId} />
      )}
    </>
  );
}

export default HomepageMenuItem;
