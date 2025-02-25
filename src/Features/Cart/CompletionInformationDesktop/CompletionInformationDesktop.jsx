import { useSelector } from "react-redux";
import BranchAddress from "../../../Components/BranchAddress/BranchAddress";
import OrderDeliveryAddresses from "../../../Components/OrderDeliveryAddresses/OrderDeliveryAddresses";
import OrderDeliveryMethod from "../../../Components/OrderDeliveryMethod/OrderDeliveryMethod";
import OrderDescription from "../../../Components/OrderDescription/OrderDescription";
import CompletionInformationDesktopFactor from "../CompletionInformationDesktopFactor/CompletionInformationDesktopFactor";

function CompletionInformationDesktop() {
  const deliveryMethod = useSelector((state) => state.cart?.deliveryMethod);
  return (
    <div className="mx-auto my-8 hidden max-w-8xl flex-row items-start justify-between gap-2 md:flex">
      <div className="flex w-full max-w-4xl flex-col space-y-2">
        <OrderDeliveryMethod />
        {deliveryMethod == "delivery" ? (
          <OrderDeliveryAddresses />
        ) : (
          <BranchAddress />
        )}
        <OrderDescription />
      </div>
      <CompletionInformationDesktopFactor />
    </div>
  );
}

export default CompletionInformationDesktop;
