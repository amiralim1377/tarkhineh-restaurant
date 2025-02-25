import BranchUsersCommentsSlider from "../BranchUsersCommentsSlider/BranchUsersCommentsSlider";

function BranchUsersComments({ branchData }) {
  return (
    <div className="w-full py-8 md:py-12">
      <h3 className="text-center text-base font-bold text-[#353535] md:text-xl">
        نظرات کاربران
      </h3>
      <div className="relative right-[3%] mx-auto w-full overflow-hidden p-2 md:p-6">
        <BranchUsersCommentsSlider branchData={branchData} />
      </div>
    </div>
  );
}

export default BranchUsersComments;
