import { useSelector } from "react-redux";
import fetchNonIranianFood from "../../Services/fetchNonIranianFood ";
import { useQuery } from "@tanstack/react-query";
import NoniranianFoodsSlider from "../NoniranianFoodsSlider/NoniranianFoodsSlider";
import { Riple } from "react-loading-indicators";

function NoniranianFoods() {
  const selectedBranchId = useSelector(
    (state) => state.branches?.selectedBranch?.id,
  );

  const { isLoading, error, data } = useQuery({
    queryKey: ["NoniranianFoods", selectedBranchId],
    queryFn: () => fetchNonIranianFood(selectedBranchId),
    enabled: !!selectedBranchId,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Riple color="#417F56" size="medium" text="" textColor="" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full">
      <div className="mx-auto mt-8 max-w-8xl">
        <h3 className="w-full px-2 text-base font-bold text-[#353535] md:text-2xl">
          غذاهای غیر ایرانی
        </h3>
      </div>
      <div className="relative right-[3%] mx-auto w-full overflow-hidden p-2 md:p-6">
        <NoniranianFoodsSlider data={data} />
      </div>
    </div>
  );
}

export default NoniranianFoods;
