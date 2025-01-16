import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../Services/fetchCategories";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../Slice/categorySlice/categorySlice";

function MenupageNavbar() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory,
  );
  const branchId = useSelector((state) => state.branches.selectedBranch.id);

  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories", branchId],
    queryFn: () => fetchCategories(branchId),
  });

  // This will make sure that by default the "main" category is selected
  useEffect(() => {
    if (!selectedCategory) {
      dispatch(setCategory("main"));
    }
  }, [selectedCategory, dispatch]);

  const handleCategoryClick = (categoryId) => {
    dispatch(setCategory(categoryId));
  };

  const getCategoryClass = (categoryId) =>
    selectedCategory === categoryId
      ? "block font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
      : "transition-all duration-300";

  if (isLoading) {
    return <div>در حال بارگذاری دسته‌بندی‌ها...</div>;
  }

  if (isError) {
    return <div>خطا در دریافت دسته‌بندی‌ها: {error.message}</div>;
  }

  return (
    <div className="mx-auto bg-[#EDEDED]">
      <div className="mx-auto max-w-md md:max-w-8xl">
        <nav>
          <ul className="flex items-center gap-6 px-2 py-5 text-sm leading-9 text-[#717171] md:text-xl">
            {categories?.map((category) => (
              <li key={category.id}>
                <button
                  className={getCategoryClass(category.id)}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name_fa}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenupageNavbar;
