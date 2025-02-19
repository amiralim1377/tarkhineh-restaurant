import OrderTrackingStatusDesktop from "../OrderTrackingStatusDesktop/OrderTrackingStatusDesktop";
import OrderTrackingStatusMobile from "../OrderTrackingStatusMobile/OrderTrackingStatusMobile";

function OrderTrackingStatus({ order }) {
  return (
    <div className="mx-auto flex flex-col items-center justify-center py-2 md:max-w-4xl">
      <OrderTrackingStatusMobile order={order} />
      <OrderTrackingStatusDesktop order={order} />
    </div>
  );
}

export default OrderTrackingStatus;
