import { useNavigate } from "react-router-dom";
import useModal from "../React Custom Hooks/useModal/useModal";
import SetDashboardAddresses from "../SetDashboardAddresses/SetDashboardAddresses";

function DashboardNotAddresses() {
  const navigate = useNavigate();
  const {
    selectedItem,
    isOpen,
    modalType,
    openModalHandler,
    closeModalHandler,
  } = useModal();

  return (
    <div className="rounded-lg border-gray-300 px-2 md:divide-y md:border md:p-4">
      <div className="flex items-center">
        <img
          src="/icons/arrow-left-blakc.svg"
          className="rotate-180 cursor-pointer md:hidden"
          alt=""
          onClick={() => navigate(-1)}
        />
        <div className="flex w-full items-center justify-center py-3 md:justify-start md:py-2">
          <h3 className="text-base font-semibold text-[#353535] md:text-xl">
            آدرس‌ها
          </h3>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center space-y-8 rounded-lg border border-gray-300 py-6">
        <div className="relative flex w-full max-w-60 flex-col items-center justify-center">
          <img className="relative z-0" src="/icons/Empty page.svg" alt="" />
          <h4 className="absolute inset-0 z-10 flex items-center justify-center text-xs text-[#757575]">
            شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
          </h4>
        </div>
        <button
          onClick={() => openModalHandler("addMap")}
          className="relative cursor-pointer rounded-lg border border-green-primary-500 px-4 py-2 text-green-primary-500"
        >
          افزودن آدرس
        </button>
      </div>

      {modalType === "addMap" && isOpen && <SetDashboardAddresses />}
    </div>
  );
}

export default DashboardNotAddresses;
