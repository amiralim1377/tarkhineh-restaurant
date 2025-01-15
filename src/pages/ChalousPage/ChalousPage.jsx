import BranchPagePhotoSlider from "../../Components/BranchPagePhotoSlider/BranchPagePhotoSlider";
import BranchUsersComments from "../../Components/BranchUsersComments/BranchUsersComments";
import HomepageSlider from "../../Components/HomepageSlider/HomepageSlider";
import NoniranianFoods from "../../Components/NoniranianFoods/NoniranianFoods";
import PopularFoods from "../../Components/PopularFoods/PopularFoods";
import SpecialOffer from "../../Components/SpecialOffer/SpecialOffer";

function ChalousPage() {
  return (
    <div className="flex flex-col items-center">
      <HomepageSlider />
      <SpecialOffer />

      <PopularFoods />
      <NoniranianFoods />
      <button className="flex items-center gap-2 border border-green-primary-500 px-4 py-2 text-xs text-green-primary-500 md:text-base">
        <img src="/icons/note.svg" alt="" />
        مشاهده منوی کامل
      </button>
      <h2 className="mb-4 mt-16 text-2xl font-bold text-[#353535]">
        شعبه چالوس
      </h2>
      <BranchPagePhotoSlider />
      <BranchUsersComments />
    </div>
  );
}

export default ChalousPage;
