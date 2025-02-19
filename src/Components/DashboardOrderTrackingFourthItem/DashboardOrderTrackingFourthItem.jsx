import toast from "react-hot-toast";

import CanceledOrderModal from "../CanceledOrderModal/CanceledOrderModal";
import useModal from "../React Custom Hooks/useModal/useModal";

function DashboardOrderTrackingFourthItem({ order }) {
  const { order_status, order_id } = order;
  const { isOpen, modalType, openModalHandler } = useModal();

  const handleCanceledOrder = (order_id) => {
    if (order_status !== "Processing") {
      toast.error("لغو سفارش تنها در مرحله آماده‌سازی غذا امکان‌پذیر است.", {
        position: "top-left",
        style: {
          background: "#f44336",
          color: "white",
          textwrap: "nowrap",
        },
      });
    } else {
      openModalHandler("CanceledOrder", order_id, order_id);
    }
  };

  return (
    <>
      <div
        id="4"
        className="flex flex-col items-center justify-center space-y-4 font-semibold md:items-end"
      >
        <a href="" className="text-[#717171] md:hidden">
          مشاهده همه سفارشات
        </a>

        {order_status === "Delivered" || order_status === "Canceled" ? (
          <button className="hover:text--green-primary-500 hover:border--green-primary-500 w-full max-w-32 rounded-md border-2 border-green-primary-500 p-2 text-green-primary-500">
            سفارش مجدد
          </button>
        ) : (
          <button
            onClick={() => handleCanceledOrder(order_id)}
            className="w-full max-w-32 rounded-md border-2 border-red-600 p-2 text-red-600 hover:border-red-800 hover:text-red-800"
          >
            لغو سفارش
          </button>
        )}
      </div>
      {isOpen && modalType === "CanceledOrder" && (
        <CanceledOrderModal order_id={order_id} />
      )}
    </>
  );
}

export default DashboardOrderTrackingFourthItem;
