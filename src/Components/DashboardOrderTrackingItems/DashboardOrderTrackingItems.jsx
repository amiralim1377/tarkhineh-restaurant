import DashboardOrderTrackingFirsItem from "../DashboardOrderTrackingFirsItem/DashboardOrderTrackingFirsItem";
import DashboardOrderTrackingFourthItem from "../DashboardOrderTrackingFourthItem/DashboardOrderTrackingFourthItem";
import DashboardOrderTrackingSecondItem from "../DashboardOrderTrackingSecondItem/DashboardOrderTrackingSecondItem";
import DashboardOrderTrackingThirdItem from "../DashboardOrderTrackingThirdItem/DashboardOrderTrackingThirdItem";

function DashboardOrderTrackingItems() {
  return (
    <div>
      <ul className="flex flex-col items-center p-2">
        <li className="flex flex-col space-y-5 rounded-lg border border-gray-300 p-2">
          <DashboardOrderTrackingFirsItem />

          <DashboardOrderTrackingSecondItem />

          <DashboardOrderTrackingThirdItem />

          <DashboardOrderTrackingFourthItem />
        </li>
      </ul>
    </div>
  );
}

export default DashboardOrderTrackingItems;
