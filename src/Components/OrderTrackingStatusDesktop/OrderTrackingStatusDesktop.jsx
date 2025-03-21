function OrderTrackingStatusDesktop({ order }) {
  const { order_status, delivery_method } = order;

  return (
    <div className="mx-auto hidden w-full py-2 md:block">
      {delivery_method === "delivery" ? (
        <>
          {order_status === "Processing" && (
            <img
              src="/OrderTrackingStatusDesktop/Device=Desktop, Type=Send by courier, Step=1.svg"
              alt="Processing"
              className="w-full"
            />
          )}
          {order_status === "Shipped" && (
            <img
              src="/OrderTrackingStatusDesktop/Device=Desktop, Type=Send by courier, Step=2.svg"
              alt="Shipped"
              className="w-full"
            />
          )}
          {order_status === "Delivered" && (
            <img
              src="/OrderTrackingStatusDesktop/Device=Desktop, Type=Send by courier, Step=3.svg"
              alt="Delivered"
              className="w-full"
            />
          )}
        </>
      ) : (
        <>
          {order_status === "Processing" && (
            <img
              src="/OrderTrackingStatusDesktop/Device=Desktop, Type=In-person delivery, Step=1.svg"
              alt="Processing"
              className="w-full"
            />
          )}
          {order_status === "Ready for Pickup" && (
            <img
              src="/OrderTrackingStatusDesktop/Device=Desktop, Type=In-person delivery, Step=2.svg"
              alt="Ready for Pickup"
              className="w-full"
            />
          )}
          {order_status === "Picked Up" && (
            <img
              src="/OrderTrackingStatusDesktop/Device=Desktop, Type=In-person delivery, Step=3.svg"
              alt="Picked Up"
              className="w-full"
            />
          )}
        </>
      )}
    </div>
  );
}

export default OrderTrackingStatusDesktop;
