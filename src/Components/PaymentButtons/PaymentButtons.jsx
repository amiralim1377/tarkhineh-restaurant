import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useSendOrder from "../React Custom Hooks/useSendOrder/useSendOrder";
import toast from "react-hot-toast";
import useCartCalculations from "../React Custom Hooks/useCartCalculations/useCartCalculations";
import useUserData from "../React Custom Hooks/useUserData/useUserData";
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";

function PaymentButtons() {
  const navigate = useNavigate();

  const paymentMethod = useSelector((state) => state.cart?.paymentMethod);
  const selectedBank = useSelector((state) => state.cart?.paymentGateway);
  const cart = useSelector((state) => state.cart?.cart);
  const simplifiedCart = cart.map((item) => ({
    id: item.id,
    quantity: item.quantity,
  }));

  const { mutate: sendOrderToServer, isLoading } = useSendOrder();
  const { userId, userData } = useUserData();

  const branch_id = useSelector((state) => state.branches?.selectedBranch?.id);
  const delivery_address_id = useSelector((state) => state.cart?.address?.id);
  const discount_code = useSelector((state) => state.cart?.discountCode);
  const delivery_method = useSelector((state) => state.cart?.deliveryMethod); // Fixed the field name
  const user_phone_number = useSelector(
    (state) => state.cart?.address?.user_phone_number,
  );
  const recipient_phone_number = useSelector(
    (state) => state.cart?.address?.recipient_phone_number,
  );
  const order_notes = useSelector((state) => state.cart?.additionalComments);
  const preparation_time = useSelector((state) => state.cart?.preparationTime);

  const notifyError = () =>
    toast.error("لطفاً بر روی یک درگاه پرداخت کلیک کنید !", {
      position: "top-left",
      style: {
        background: "#f44336",
        color: "white",
      },
    });

  const {
    totalDiscount,
    extraDiscount,
    totalPrice,
    deliveryCost,
    totalCost,
    totalTime,
  } = useCartCalculations();

  const handleGoToPaymentGateway = () => {
    if (!selectedBank && paymentMethod == "online") {
      // Check if a payment gateway has been selected; if not, show an error notification
      notifyError();
    } else {
      const orderData = {
        order_id: uuidv4(),
        customer_id: userId, // Unique identifier for the customer
        branch_id, // Unique identifier for the branch
        delivery_address_id:
          delivery_method === "delivery" ? delivery_address_id : null, // Only include delivery address if the method is delivery
        order_date: moment().tz("Asia/Tehran").format(), // The date and time when the order was placed
        order_status: "Processing", // The current status of the order ('Processing')
        items: simplifiedCart, // The items in the order, stored as a JSON array
        total_amount: totalPrice, // The total amount of the order
        payable_amount: totalCost, // The amount payable after discounts
        product_discount: totalDiscount, // The discount applied to products
        discount_code, // The discount code applied (if any)
        extradiscountamount: extraDiscount, // Any additional discount amount applied
        delivery_method, // The method of delivery (e.g., 'delivery' or 'in-person')
        contact_phone: `${user_phone_number || recipient_phone_number || userData.phonenumber}`, // The contact phone number for the order
        order_notes, // Any additional notes or instructions for the order
        preparation_time, // The preparation time required for the order, in minutes
        payment_tracking_code:
          "PAY" + Math.random().toString(36).substring(2, 15), // A unique tracking code for the payment
        estimated_delivery_time: moment()
          .tz("Asia/Tehran")
          .add(totalTime, "minutes")
          .format(), // The estimated delivery time
        payment_status: "Paid", // The current payment status ('Paid')
        shipping_cost: deliveryCost, // The cost of shipping for the order
        payment_method: paymentMethod, // The method of payment (e.g., 'online', 'cash')
      };

      // Send the order data to the server
      sendOrderToServer(orderData, {
        onSuccess: () => {
          // Navigate to the successful payment page upon successful order submission
          navigate("/successful-payment");
        },
      });
    }
  };

  return (
    <div className="mt-3 w-full">
      {paymentMethod === "online" ? (
        <button
          onClick={handleGoToPaymentGateway}
          className="flex w-full flex-row items-center justify-center gap-1 rounded-md bg-green-primary-500 p-2 text-xs text-white"
          disabled={isLoading}
        >
          <img src="/icons/tick-circle.svg" alt="" />
          تایید و پرداخت
        </button>
      ) : (
        <button
          onClick={handleGoToPaymentGateway}
          className="flex w-full flex-row items-center justify-center gap-1 rounded-md bg-green-primary-500 p-2 text-xs text-white"
          disabled={isLoading}
        >
          <img src="/icons/tick-circle.svg" alt="" />
          ثبت نهایی سفارش
        </button>
      )}
    </div>
  );
}

export default PaymentButtons;
