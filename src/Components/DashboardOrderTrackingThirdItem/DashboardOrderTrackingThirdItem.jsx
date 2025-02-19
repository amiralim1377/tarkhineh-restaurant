import OrderTrackingFoodItems from "../OrderTrackingFoodItems/OrderTrackingFoodItems";
import OrderTrackingStatus from "../OrderTrackingStatus/OrderTrackingStatus";

function DashboardOrderTrackingThirdItem({ order, menuItems }) {
  console.log(order);

  const { items } = order;

  return (
    <div id="3" className="">
      <OrderTrackingStatus order={order} />
      <div>
        <ul className="grid grid-cols-3 gap-6 md:grid-cols-6">
          {items?.map((item) => {
            const menuItem = menuItems.find(
              (menuItem) => menuItem.id === item.id,
            );
            return (
              menuItem && (
                <OrderTrackingFoodItems
                  item={menuItem}
                  key={item.id}
                  quantity={item.quantity}
                />
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default DashboardOrderTrackingThirdItem;
