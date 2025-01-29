import { useSelector } from "react-redux";
import BranchAddress from "../../../Components/BranchAddress/BranchAddress";
import MobileCartItem from "../../../Components/MobileCartItem/MobileCartItem";
import OrderDeliveryAddresses from "../../../Components/OrderDeliveryAddresses/OrderDeliveryAddresses";
import OrderDeliveryMethod from "../../../Components/OrderDeliveryMethod/OrderDeliveryMethod";
import OrderDescription from "../../../Components/OrderDescription/OrderDescription";
import { useNavigate } from "react-router-dom";

function CompletionInformationMobile() {
  const deliveryMethod = useSelector((state) => state.cart?.deliveryMethod);
  const navigate = useNavigate();

  return (
    <div className="px-2 md:hidden">
      <div className="my-4 flex items-center justify-between">
        <div onClick={() => navigate(-1)}>
          <img
            src="/public/icons/arrow-left-blakc.svg"
            className="h-3 w-3 rotate-180 cursor-pointer"
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
