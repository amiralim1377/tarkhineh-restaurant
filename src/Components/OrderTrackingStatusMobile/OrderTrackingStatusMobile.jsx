function OrderTrackingStatusMobile({ order }) {
  const { order_status, delivery_method } = order;

  return (
    <div className="w-full md:hidden">
      {delivery_method !== "delivery" ? (
        <>
          {order_status === "Processing" && (
            <img
              src="/public/OrderTrackingStatusMobile/Device=Mobile, Type=In-person delivery, Step=1.svg"
              alt="Processing"
              className="w-full"
            />
          )}
          {order_status === "Ready for Pickup" && (
            <img
              src="/public/OrderTrackingStatusMobile/Device=Mobile, Type=In-person delivery, Step=2.svg"
              alt="Ready for Pickup"
              className="w-full"
            />
          )}
          {order_status === "Picked Up" && (
            <img
              src="/public/OrderTrackingStatusMobile/Device=Mobile, Type=In-person delivery, Step=3.svg"
              alt="Picked Up"
              className="w-full"
            />
          )}
        </>
      ) : (
        <>
          {order_status === "Processing" && (
            <img
              src="/public/OrderTrackingStatusMobile/Device=Mobile, Type=Send by courier, Step=1.svg"
              alt="Processing"
              className="w-full"
            />
          )}
          {order_status === "Shipped" && (
            <img
              src="/public/OrderTrackingStatusMobile/Device=Mobile, Type=Send by courier, Step=2.svg"
              alt="Shipped"
              className="w-full"
            />
          )}
          {order_status === "Delivered" && (
            <img
              src="/public/OrderTrackingStatusMobile/Device=Mobile, Type=Send by courier, Step=3.svg"
              alt="Delivered"
              className="w-full"
            />
          )}
        </>
      )}
    </div>
  );
}

export default OrderTrackingStatusMobile;
