import BranchesSlider from "../BranchesSlider/BranchesSlider";

function SpecialOffer() {
  return (
    <div className="w-full">
      <div className="mx-auto mt-8 max-w-8xl">
        <h3 className="w-full text-base font-bold text-[#353535] md:text-2xl">
          پیشنهاد ویژه
        </h3>
      </div>
      <div className="relative right-[3%] mx-auto w-full overflow-hidden p-2 md:p-6">
        <BranchesSlider />
      </div>
    </div>
  );
}

export default SpecialOffer;
