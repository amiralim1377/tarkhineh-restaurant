import BranchesSlider from "../BranchesSlider/BranchesSlider";

function PopularFoods() {
  return (
    <div className="mt-8 w-full bg-[#315F41]">
      <div className="mx-auto mt-8 max-w-8xl">
        <h3 className="w-full text-base font-bold text-white md:text-2xl">
          غذاهای محبوب
        </h3>
      </div>
      <div className="relative right-[3%] mx-auto w-full overflow-hidden p-2 md:p-6">
        <BranchesSlider />
      </div>
    </div>
  );
}

export default PopularFoods;
