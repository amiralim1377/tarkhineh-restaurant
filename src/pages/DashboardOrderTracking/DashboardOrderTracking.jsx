import DashboardOrderTrackingChips from "../../Components/DashboardOrderTrackingChips/DashboardOrderTrackingChips";
import DashboardOrderTrackingItems from "../../Components/DashboardOrderTrackingItems/DashboardOrderTrackingItems";
import useUserData from "../../Components/React Custom Hooks/useUserData/useUserData";
import useDashboardOrderTracking from "../../Components/React Custom Hooks/useDashboardOrderTracking/useDashboardOrderTracking";
import NoOrdersYet from "../../Components/NoOrdersYet/NoOrdersYet";
import "./custom-scrollbar.css";
import { useSelector } from "react-redux";
import NoDeliveredOrders from "../../Components/NoDeliveredOrders/NoDeliveredOrders";
function DashboardOrderTracking() {
  const { userId: customerId } = useUserData();
  const { isLoading, error, orders, addresses, branches, menuItems } =
    useDashboardOrderTracking();
  const category = useSelector((state) => state.orderCategory);

  const filteredOrders = orders?.filter((order) => {
    if (category === "all") return true;
    if (category === "processing") return order.order_status === "Processing";
    if (category === "delivered") return order.order_status === "Delivered";
    if (category === "canceled") return order.order_status === "Canceled";
    return true;
  });

  if (!customerId) {
    return <div>Error: Invalid customer ID</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="rounded-lg border-gray-300 md:divide-y md:border md:p-4">
      <div className="flex items-center">
        <img
          src="/icons/arrow-left-blakc.svg"
          className="rotate-180 md:hidden"
          alt=""
        />
        <div className="flex w-full items-center justify-center py-2 md:justify-start">
          <h3 className="text-base font-semibold text-[#353535] md:text-xl">
            سفارشات
          </h3>
        </div>
      </div>
      <div className="border-gray-300 p-2">
        <DashboardOrderTrackingChips />
        {orders.length > 0 ? (
          <ul className="custom-scrollbar flex max-h-dvh flex-col items-center space-y-4 overflow-y-scroll p-2">
            {filteredOrders?.map((order) => {
              const address = addresses.find(
                (a) => a.id === order?.delivery_address_id,
              );
              const branch = branches.find((b) => b.id === order.branch_id);
              const deliveryAddress =
                order.delivery_method === "in-person" && branch
                  ? branch.address
                  : address;

              return (
                <DashboardOrderTrackingItems
                  key={order.order_id}
                  order={order}
                  deliveryAddress={deliveryAddress}
                  menuItems={menuItems}
                  branches={branches}
                />
              );
            })}
          </ul>
        ) : (
          <>
            <NoOrdersYet />
          </>
        )}
      </div>
    </div>
  );
}

export default DashboardOrderTracking;
