import OrderDeliveryAddresses from "../../../Components/OrderDeliveryAddresses/OrderDeliveryAddresses";
import OrderDeliveryMethod from "../../../Components/OrderDeliveryMethod/OrderDeliveryMethod";
import OrderDescription from "../../../Components/OrderDescription/OrderDescription";
import CompletionInformationDesktopFactor from "../CompletionInformationDesktopFactor/CompletionInformationDesktopFactor";

function CompletionInformationDesktop() {
  return (
    <div className="felx-row mx-auto my-8 flex max-w-8xl items-start gap-4">
      <div className="flex w-full flex-col space-y-2">
        <OrderDeliveryMethod />
        <OrderDeliveryAddresses />
        <OrderDescription />
      </div>
      <CompletionInformationDesktopFactor />
    </div>
  );
}

export default CompletionInformationDesktop;
