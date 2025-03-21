import { useNavigate } from "react-router-dom";
import DashboardProfileItems from "../../Components/DashboardProfileItems/DashboardProfileItems";

function DashboardProfile() {
  const navigate = useNavigate();
  return (
    <div className="p-2 md:divide-y md:rounded-lg md:border md:border-gray-300 md:p-4">
      <div className="m flex items-center">
        <img
          src="/icons/arrow-left-blakc.svg"
          className="rotate-180 md:hidden"
          alt=""
          onClick={() => navigate("/dashboard")}
        />
        <div className="flex w-full items-center justify-center py-2 md:justify-start md:text-xl">
          <h3 className="text-base font-semibold text-[#353535] md:text-xl">
            پروفایل من
          </h3>
        </div>
      </div>
      <div className="p-2">
        <DashboardProfileItems />
      </div>
    </div>
  );
}

export default DashboardProfile;
