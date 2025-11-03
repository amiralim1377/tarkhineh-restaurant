import { useMutation } from "@tanstack/react-query";
import { sendOrderToServer } from "../../../Services/sendOrderToServer";
import toast from "react-hot-toast";

const useSendOrder = () => {
  return useMutation({
    mutationFn: sendOrderToServer,
    onSuccess: (data) => {
      toast.success("سفارش با موفقیت ثبت شد!", {
        position: "top-left",
        style: {
          background: "#4caf50",
          color: "white",
        },
      });
    },
    onError: (error) => {
      toast.error("ارسال سفارش با خطا مواجه شد، لطفاً دوباره تلاش کنید.", {
        position: "top-left",
        style: {
          background: "#f44336",
          color: "white",
        },
      });
      console.error("Error sending order:", error);
    },
  });
};

export default useSendOrder;
