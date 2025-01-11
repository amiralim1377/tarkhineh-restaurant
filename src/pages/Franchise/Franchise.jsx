import FranchiseBenefit from "../../Components/FranchiseBenefit/FranchiseBenefit";
import FranchiseCounseling from "../../Components/FranchiseCounseling/FranchiseCounseling";
import FranchiseForm from "../../Components/FranchiseForm/FranchiseForm";
import FranchiseIcons from "../../Components/FranchiseIcons/FranchiseIcons";

function Franchise() {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="bg-Franchise flex w-full items-center justify-center">
        <h2 className="text-base font-bold text-white md:text-4xl">
          همین الان به خانواده بزرگ ترخینه بپیوندید!
        </h2>
      </div>
      <div className="mx-auto flex w-full max-w-8xl flex-col items-center px-2">
        <FranchiseIcons />
        <FranchiseBenefit />
        <FranchiseCounseling />
        <FranchiseForm />
      </div>
    </div>
  );
}

export default Franchise;
