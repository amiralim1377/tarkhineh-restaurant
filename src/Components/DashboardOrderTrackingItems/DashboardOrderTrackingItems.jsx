import DashboardOrderTrackingFirsItem from "../DashboardOrderTrackingFirsItem/DashboardOrderTrackingFirsItem";
import DashboardOrderTrackingFourthItem from "../DashboardOrderTrackingFourthItem/DashboardOrderTrackingFourthItem";
import DashboardOrderTrackingSecondItem from "../DashboardOrderTrackingSecondItem/DashboardOrderTrackingSecondItem";
import DashboardOrderTrackingThirdItem from "../DashboardOrderTrackingThirdItem/DashboardOrderTrackingThirdItem";

function DashboardOrderTrackingItems({
  order,
  deliveryAddress,
  menuItems,
  branches,
}) {
  return (
    <li className="shadow-y-sm flex w-full flex-col space-y-5 rounded-lg border border-gray-300 p-2">
      <DashboardOrderTrackingFirsItem
        order={order}
        branch={branches?.find(
          (branch) => branch.branch_id === order.branch_id,
        )}
      />
      <DashboardOrderTrackingSecondItem
        order={order}
        deliveryAddress={deliveryAddress}
      />
      <DashboardOrderTrackingThirdItem order={order} menuItems={menuItems} />
      <DashboardOrderTrackingFourthItem order={order} menuItems={menuItems} />
    </li>
  );
}

export default DashboardOrderTrackingItems;
