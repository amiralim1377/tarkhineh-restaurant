import CompletionInformationDesktop from "../../Features/Cart/CompletionInformationDesktop/CompletionInformationDesktop";
import CompletionInformationMobile from "../../Features/Cart/CompletionInformationMobile/CompletionInformationMobile";

function CompletionInformation() {
  return (
    <div className="">
      <div className="mx-auto mt-8 hidden max-w-3xl flex-row items-center justify-between md:flex">
        <div className="flex items-center gap-x-1">
          <img src="/icons/shopping-cart.svg" className="w-8" alt="" />

          <h3 className="text-nowrap text-base font-bold text-green-primary-500">
            سبد خرید
          </h3>
        </div>

        <div className="flex flex-row items-center">
          <span className="font-bold text-green-primary-500">
            ----------------
          </span>
          <span className="font-bold text-green-primary-500">--------</span>
        </div>

        <div className="flex items-center gap-x-1 text-[#CBCBCB]">
          <img src="/icons/tick-square-green.svg" alt="" />
          <h3 className="text-nowrap text-base font-bold text-green-primary-500">
            تکمیل اطلاعات
          </h3>
        </div>
        <div className="font-bold text-green-primary-500">----------------</div>
        <div className="text-[#CBCBCB]">----------</div>

        <div className="flex items-center gap-x-1 text-[#CBCBCB]">
          <img src="/icons/wallet-2.svg" alt="" />
          <h3>پرداخت</h3>
        </div>
      </div>
      <CompletionInformationMobile />
      <CompletionInformationDesktop />
    </div>
  );
}

export default CompletionInformation;
