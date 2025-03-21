import { useNavigate } from "react-router-dom";
import DashboardAddressBoxList from "../DashboardAddressBoxList/DashboardAddressBoxList";
import useModal from "../React Custom Hooks/useModal/useModal";
import SetDashboardAddresses from "../SetDashboardAddresses/SetDashboardAddresses";

function DashboardMyaddressesList({ addressState }) {
  const { isOpen, modalType, openModalHandler } = useModal();
  const navigate = useNavigate();

  return (
    <div className="rounded-lg border-gray-300 px-2 md:divide-y md:border md:p-4">
      <div className="flex items-center">
        <img
          src="/icons/arrow-left-blakc.svg"
          className="rotate-180 cursor-pointer md:hidden"
          alt=""
          onClick={() => navigate("/dashboard")}
        />
        <div className="flex w-full items-center justify-center py-3 md:justify-start md:py-2">
          <h3 className="text-base font-semibold text-[#353535] md:text-xl">
            آدرس‌ها
          </h3>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center space-y-8 rounded-lg border border-gray-300 px-2 py-5">
        {addressState.length > 0 &&
          addressState.map((address) => (
            <DashboardAddressBoxList key={address.id} address={address} />
          ))}
        <button
          onClick={() => openModalHandler("addMap")}
          className="relative cursor-pointer rounded-lg border border-green-primary-500 px-4 py-2 text-green-primary-500"
        >
          افزودن آدرس جدید
        </button>
      </div>
      {modalType === "addMap" && isOpen && <SetDashboardAddresses />}
    </div>
  );
}

export default DashboardMyaddressesList;
