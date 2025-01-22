import CompletionInformationProgress from "../../Components/CompletionInformationProgress/CompletionInformationProgress";
import useCartCalculations from "../../Components/React Custom Hooks/useCartCalculations/useCartCalculations";
import CompletionInformationDesktop from "../../Features/Cart/CompletionInformationDesktop/CompletionInformationDesktop";
import CompletionInformationMobile from "../../Features/Cart/CompletionInformationMobile/CompletionInformationMobile";
import EmptyShoppingCart from "../../Features/Cart/EmptyShoppingCart/EmptyShoppingCart";

function CompletionInformation() {
  const { totalItems } = useCartCalculations();
  return (
    <div className="">
      {totalItems != 0 ? (
        <>
          <CompletionInformationProgress />
          <CompletionInformationMobile />
          <CompletionInformationDesktop />
        </>
      ) : (
        <EmptyShoppingCart />
      )}
    </div>
  );
}

export default CompletionInformation;
