import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import PopularFoodsSlider from "../PopularFoodsSlider/PopularFoodsSlider";
import { getPopularDishes } from "../../Services/getPopularDishes";
import { Riple } from "react-loading-indicators";

function PopularFoods() {
  const selectedBranchId = useSelector(
    (state) => state.branches?.selectedBranch?.id,
  );

  const { isLoading, error, data } = useQuery({
    queryKey: ["popularDishes", selectedBranchId],
    queryFn: () => getPopularDishes(selectedBranchId),
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
    <div className="mt-8 w-full bg-[#315F41]">
      <div className="mx-auto mt-8 max-w-8xl">
        <h3 className="w-full px-2 text-base font-bold text-white md:text-2xl">
          آیتم محبوب
        </h3>
      </div>
      <div className="relative right-[3%] mx-auto w-full overflow-hidden p-2 md:p-6">
        <PopularFoodsSlider data={data} />
      </div>
    </div>
  );
}

export default PopularFoods;
