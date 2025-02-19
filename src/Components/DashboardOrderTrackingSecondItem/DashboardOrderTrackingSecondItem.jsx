import moment from "moment-jalaali";
import { formatPrice } from "../../helper_functions/formatPrice";

moment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

function DashboardOrderTrackingSecondItem({ order, deliveryAddress }) {
  const {
    estimated_delivery_time,
    order_date,
    product_discount,
    payable_amount,
    order_status,
  } = order;
  const { exactaddress, mapaddress } = deliveryAddress;

  return (
    <div id="2" className="flex flex-row items-start justify-between">
      <div className="flex max-w-56 flex-col items-start space-y-2 text-xs text-[#757575] md:max-w-lg">
        <span className="flex items-center gap-1 text-[10px] md:text-xs">
          <img src="/icons/calendar.svg" alt="" />
          {moment(order_date).locale("fa").format("dddd، jD jMMMM، ساعت HH:mm")}
        </span>
        <span className="flex items-center gap-1 text-[10px] md:text-xs">
          <img src="/icons/location.svg" className="h-3 w-3" alt="" />
          {exactaddress || mapaddress}
        </span>
        <div className="flex flex-col items-center gap-3 text-[10px] md:flex-row md:text-xs">
          <div className="flex items-center gap-1 text-nowrap">
            <img src="/icons/wallet-3.svg" className="h-3 w-3" alt="" />
            <span className="flex items-center gap-1">
              {formatPrice(payable_amount)}
            </span>
          </div>
          <div>
            <span className="text-nowrap text-xs">تخفیف:</span>
            <span className="text-nowrap text-xs">
              {formatPrice(product_discount)}
            </span>
          </div>
        </div>
      </div>
      {order_status !== "Delivered" && (
        <div className="flex items-center gap-1">
          <img src="/icons/clock.svg" alt="" />
          <span className="text-nowrap text-xs text-[#717171]">
            آماده تحویل تا
          </span>
          <span className="text-xs text-[#417F56]">
            {moment(estimated_delivery_time).locale("fa").format("ساعت HH:mm")}
          </span>
        </div>
      )}
    </div>
  );
}

export default DashboardOrderTrackingSecondItem;
