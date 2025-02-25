import { useQuery } from "@tanstack/react-query";
import TharkhineBranches from "../TharkhineBranches/TharkhineBranches";
import { fetchBranches } from "../../Services/fetchBranches";

function HomepageRestaurantBranches() {
  const {
    data: branches,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  });
  return (
    <div>
      <h2 className="mx-auto mt-8 max-w-8xl text-center text-2xl font-bold text-[#353535]">
        ترخینه گردی
      </h2>

      <div className="mx-auto my-4 grid max-w-8xl grid-cols-1 justify-items-center gap-4 gap-y-4 px-2 md:grid-cols-2 lg:grid-cols-4">
        {branches && branches.length > 0 ? (
          branches.map((branch) => (
            <TharkhineBranches branches={branch} key={branch.branch_id} />
          ))
        ) : (
          <div>No branches available</div>
        )}
      </div>
    </div>
  );
}

export default HomepageRestaurantBranches;
