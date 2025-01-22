import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { setSubCategory } from "../../Slice/categorySlice/categorySlice";
import { fetchSubcategoriesByBranchAndCategory } from "../../Services/fetchSubcategoriesByBranchAndCategory";
import MenuChipsSearchInput from "../MenuChipsSearchInput/MenuChipsSearchInput";

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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="mx-auto mt-4 flex w-full max-w-md flex-col items-center justify-between gap-3 md:max-w-8xl md:flex-row">
      <ul className="flex w-full gap-3 overflow-y-scroll p-2 text-center text-sm md:max-w-3xl md:overflow-visible xl:text-base">
        {subcategories?.map((subcategory) => (
          <li
            key={subcategory.id}
            onClick={() => handleSubCategoryClick(subcategory)}
            className={`flex w-full cursor-pointer items-center justify-center text-nowrap rounded-lg px-4 py-3 text-xs transition-all duration-300 ${
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

      <MenuChipsSearchInput />
    </div>
  );
}

export default MenuChips;
