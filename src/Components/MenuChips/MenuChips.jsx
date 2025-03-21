import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { setSubCategory } from "../../Slice/categorySlice/categorySlice";
import { fetchSubcategoriesByBranchAndCategory } from "../../Services/fetchSubcategoriesByBranchAndCategory";
import { Riple } from "react-loading-indicators";

function MenuChips() {
  const dispatch = useDispatch();
  const selectedBranchId = useSelector(
    (state) => state.branches.selectedBranch.id,
  );
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory,
  );
  const selectedSubCategoryId = useSelector(
    (state) => state.category.selectedSubCategory.id,
  );

  const {
    data: subcategories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["subcategories", selectedBranchId, selectedCategory],
    queryFn: () =>
      fetchSubcategoriesByBranchAndCategory(selectedBranchId, selectedCategory),
    enabled: !!selectedBranchId && !!selectedCategory,
  });

  const handleSubCategoryClick = (subCategory) => {
    dispatch(
      setSubCategory({
        id: subCategory.id,
        name: subCategory.name,
        name_fa: subCategory.name_fa,
      }),
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Riple color="#417F56" size="medium" text="" textColor="" />
      </div>
    );
  }

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul className="flex w-full gap-2 overflow-x-scroll p-2 text-center text-xs md:overflow-visible xl:text-base">
      {subcategories?.map((subcategory) => (
        <li
          key={subcategory.id}
          onClick={() => handleSubCategoryClick(subcategory)}
          className={`flex max-w-28 flex-shrink-0 cursor-pointer items-center justify-center text-nowrap rounded-lg px-4 py-3 text-xs transition-all duration-300 ${
            selectedSubCategoryId === subcategory.id
              ? "bg-gray-200 font-bold text-green-primary-500"
              : "bg-[#EDEDED] text-gray-700"
          }`}
        >
          {subcategory.name_fa}
          <img
            src="/icons/arrow-left-blakc.svg"
            className="ml-2 h-3 w-3"
            alt="Arrow"
          />
        </li>
      ))}
    </ul>
  );
}

export default MenuChips;
