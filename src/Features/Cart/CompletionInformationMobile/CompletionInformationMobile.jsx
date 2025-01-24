import { useSelector } from "react-redux";
import BranchAddress from "../../../Components/BranchAddress/BranchAddress";
import MobileCartItem from "../../../Components/MobileCartItem/MobileCartItem";
import OrderDeliveryAddresses from "../../../Components/OrderDeliveryAddresses/OrderDeliveryAddresses";
import OrderDeliveryMethod from "../../../Components/OrderDeliveryMethod/OrderDeliveryMethod";
import OrderDescription from "../../../Components/OrderDescription/OrderDescription";

function CompletionInformationMobile() {
  const deliveryMethod = useSelector((state) => state.cart?.deliveryMethod);

  return (
    <div className="px-2 md:hidden">
      <div className="my-4 flex items-center justify-between">
        <div>
          <img
            src="/public/icons/arrow-left-blakc.svg"
            className="rotate-180"
            alt=""
          />
        </div>
        <div className="w-full">
          <h3 className="text-center font-bold">تکمیل اطلاعات</h3>
        </div>
      </div>
      <div className="my-4 flex w-full flex-col items-center space-y-4">
        <OrderDeliveryMethod />
        {deliveryMethod == "delivery" ? (
          <OrderDeliveryAddresses />
        ) : (
          <BranchAddress />
        )}
        <OrderDescription />
        <MobileCartItem />
      </div>
    </div>
  );
}

export default CompletionInformationMobile;
