import { useSelector } from "react-redux";
import BranchAddress from "../../../Components/BranchAddress/BranchAddress";
import OrderDeliveryAddresses from "../../../Components/OrderDeliveryAddresses/OrderDeliveryAddresses";
import OrderDeliveryMethod from "../../../Components/OrderDeliveryMethod/OrderDeliveryMethod";
import OrderDescription from "../../../Components/OrderDescription/OrderDescription";
import CompletionInformationDesktopFactor from "../CompletionInformationDesktopFactor/CompletionInformationDesktopFactor";

function CompletionInformationDesktop() {
  const deliveryMethod = useSelector((state) => state.cart?.deliveryMethod);
  return (
    <div className="felx-row mx-auto my-8 hidden max-w-8xl items-start justify-between md:flex">
      <div className="flex w-full max-w-4xl flex-col space-y-2">
        <OrderDeliveryMethod />
        {deliveryMethod == "delivery" ? (
          <OrderDeliveryAddresses />
        ) : (
          <BranchAddress />
        )}
        <OrderDescription />
      </div>
      <div className="max-w-lg">
        <CompletionInformationDesktopFactor />
      </div>
    </div>
  );
}

export default CompletionInformationDesktop;
