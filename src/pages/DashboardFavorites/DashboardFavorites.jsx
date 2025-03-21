import { useNavigate } from "react-router-dom";
import DashboardFavoritesItems from "../../Components/DashboardFavoritesItems/DashboardFavoritesItems";
import DashboardFavoritesSearchChips from "../../Components/DashboardFavoritesSearchChips/DashboardFavoritesSearchChips";

function DashboardFavorites() {
  const navigate = useNavigate();
  return (
    <div className="rounded-lg border-gray-300 p-2 md:divide-y md:border md:p-4">
      <div className="flex items-center">
        <img
          src="/icons/arrow-left-blakc.svg"
          className="rotate-180 md:hidden"
          alt=""
          onClick={() => navigate("/dashboard")}
        />
        <div className="flex w-full items-center justify-center md:justify-start md:py-2">
          <h3 className="text-base font-semibold text-[#353535] md:text-xl">
            علاقمندی‌ها
          </h3>
        </div>
      </div>
      <DashboardFavoritesSearchChips />
      <DashboardFavoritesItems />
    </div>
  );
}

export default DashboardFavorites;
