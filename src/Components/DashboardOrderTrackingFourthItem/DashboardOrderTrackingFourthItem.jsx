import toast from "react-hot-toast";

import CanceledOrderModal from "../CanceledOrderModal/CanceledOrderModal";
import useModal from "../React Custom Hooks/useModal/useModal";
import fetchFoodDetails from "../../Services/fetchFoodDetails ";
import useCart from "../React Custom Hooks/useCart/useCart";
import { useSelector } from "react-redux";

function DashboardOrderTrackingFourthItem({ order }) {
  const { order_status, order_id, items } = order;
  const selectedBranch = useSelector(
    (state) => state.branches.selectedBranch.id,
  );
  const isSelectedBranch = Boolean(selectedBranch);

  const { handleAddToCart } = useCart();

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

  const handleReOrder = async (items) => {
    if (!isSelectedBranch) {
      toast.error("لطفا شعبه ی مد نظر برای سفارش  مجدد را انتخاب نمایید", {
        position: "top-left",
        style: {
          background: "#f44336",
          color: "white",
        },
      });
      return;
    }

    try {
      const updatedCartItems = await Promise.all(
        items.map(async (item) => {
          const foodDetails = await fetchFoodDetails(item.id);
          return {
            ...foodDetails,
            quantity: item.quantity,
          };
        }),
      );

      updatedCartItems.forEach((cartItem) => handleAddToCart(cartItem));

      toast.success("غذاها با موفقیت به سبد خرید اضافه شدند.", {
        position: "top-left",
        style: {
          background: "#4caf50",
          color: "white",
        },
      });
    } catch (error) {
      toast.error("خطا در افزودن غذا به کارت. لطفاً دوباره تلاش کنید.", {
        position: "top-left",
        style: {
          background: "#f44336",
          color: "white",
        },
      });

      console.error("Error adding to cart:", error.message);
    }
  };

  return (
    <>
      <div
        id="4"
        className="flex flex-col items-center justify-center space-y-4 font-semibold md:items-end"
      >
        {/* <a href="" className="text-[#717171] md:hidden">
          مشاهده همه سفارشات
        </a> */}

        {order_status === "Delivered" || order_status === "Canceled" ? (
          <button
            onClick={() => handleReOrder(items)}
            className="hover:text--green-primary-500 hover:border--green-primary-500 w-full max-w-32 rounded-md border-2 border-green-primary-500 p-2 text-green-primary-500"
          >
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
