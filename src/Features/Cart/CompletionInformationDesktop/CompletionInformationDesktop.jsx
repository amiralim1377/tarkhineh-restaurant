import OrderDeliveryAddresses from "../../../Components/OrderDeliveryAddresses/OrderDeliveryAddresses";
import OrderDeliveryMethod from "../../../Components/OrderDeliveryMethod/OrderDeliveryMethod";
import OrderDescription from "../../../Components/OrderDescription/OrderDescription";
import CompletionInformationDesktopFactor from "../CompletionInformationDesktopFactor/CompletionInformationDesktopFactor";

function CompletionInformationDesktop() {
  return (
    <div className="felx-row mx-auto my-8 hidden max-w-8xl items-start justify-between md:flex">
      <div className="flex w-full max-w-4xl flex-col space-y-2">
        <OrderDeliveryMethod />
        <OrderDeliveryAddresses />
        <OrderDescription />
      </div>
      <div className="max-w-lg">
        <CompletionInformationDesktopFactor />
      </div>
    </div>
  );
}

export default CompletionInformationDesktop;
