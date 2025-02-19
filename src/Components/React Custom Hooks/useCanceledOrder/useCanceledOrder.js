import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { cancelOrderById } from "../../../Services/cancelOrderById";

const useCanceledOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelOrderById,
    onSuccess: (data) => {
      if (data) {
        toast.success("سفارش با موفقیت لغو شد!", {
          position: "top-left",
          style: {
            background: "#4caf50",
            color: "white",
          },
        });
        console.log("Order canceled successfully:", data);
      } else {
        toast.error("سفارش با شناسه مورد نظر یافت نشد.", {
          position: "top-left",
          style: {
            background: "#f44336",
            color: "white",
          },
        });
      }
    },
    onError: (error) => {
      toast.error("لغو سفارش با خطا مواجه گردید. لطفا دوباره تلاش کنید.", {
        position: "top-left",
        style: {
          background: "#f44336",
          color: "white",
        },
      });
      console.error("Error canceling order:", error);
    },
    onSettled: () => {
      queryClient.invalidateQueries("orders");
    },
  });
};

export default useCanceledOrder;
