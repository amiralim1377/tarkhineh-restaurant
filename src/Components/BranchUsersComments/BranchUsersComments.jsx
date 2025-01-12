import BranchesSlider from "../BranchesSlider/BranchesSlider";
import BranchUsersCommentsSlider from "../BranchUsersCommentsSlider/BranchUsersCommentsSlider";

function BranchUsersComments() {
  return (
    <div className="my-20 w-full">
      <h3 className="text-center text-base font-bold text-[#353535] md:text-xl">
        نظرات کاربران
      </h3>
      <div className="relative right-[3%] mx-auto w-full overflow-hidden p-2 md:p-6">
        <BranchUsersCommentsSlider />
      </div>
    </div>
  );
}

export default BranchUsersComments;
