import FranchiseFacilities from "../FranchiseFacilities/FranchiseFacilities";
import FranchiseRequest from "../FranchiseRequest/FranchiseRequest";
import FranchiseSpecifications from "../FranchiseSpecifications/FranchiseSpecifications";

function FranchiseForm() {
  return (
    <form className="my-8 flex w-full flex-col items-center space-y-4 rounded-md border border-gray-300 p-4">
      <FranchiseRequest />
      <FranchiseSpecifications />
      <FranchiseFacilities />
      <button className="w-full max-w-52 rounded-md bg-green-primary-500 px-4 py-2 text-white">
        ثبت اطلاعات
      </button>
    </form>
  );
}

export default FranchiseForm;
