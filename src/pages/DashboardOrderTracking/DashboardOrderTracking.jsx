import DashboardOrderTrackingChips from "../../Components/DashboardOrderTrackingChips/DashboardOrderTrackingChips";
import DashboardOrderTrackingItems from "../../Components/DashboardOrderTrackingItems/DashboardOrderTrackingItems";

function DashboardOrderTracking() {
  return (
    <div className="rounded-lg border-gray-300 p-2 md:divide-y md:border md:p-4">
      <div className="flex items-center">
        <img
          src="/icons/arrow-left-blakc.svg"
          className="rotate-180 md:hidden"
          alt=""
        />
        <div className="flex w-full items-center justify-center md:justify-start">
          <h3 className="text-base font-semibold text-[#353535] md:text-xl">
            سفارشات
          </h3>
        </div>
      </div>
      <div className="border-gray-300 py-2">
        <DashboardOrderTrackingChips />
        <DashboardOrderTrackingItems />
      </div>
    </div>
  );
}

export default DashboardOrderTracking;
