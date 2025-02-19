import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../Services/fetchCategories";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategory,
  setSubCategory,
} from "../../Slice/categorySlice/categorySlice";
import MenupageNavbarChangeBranch from "../MenupageNavbarChangeBranch/MenupageNavbarChangeBranch";

function MenupageNavbar() {
  const dispatch = useDispatch();
  const selectedBranch = useSelector((state) => state.branches?.selectedBranch);
  const selectedCategory = useSelector(
    (state) => state.category?.selectedCategory,
  );
  console.log(selectedCategory);

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useQuery({
    queryKey: ["categories", selectedBranch.id],
    queryFn: () => fetchCategories(selectedBranch.id),
    enabled: !!selectedBranch.id,
  });

  useEffect(() => {
    if (categories) {
      const default_subcategory = categories.find(
        (category) => category.id === selectedCategory,
      );

      if (default_subcategory) {
        dispatch(
          setSubCategory({
            id: default_subcategory.default_subcategory,
            name: "all",
            name_fa: "همه",
          }),
        );
      }
    }
  }, [categories, selectedCategory, dispatch]);

  const handleCategoryClick = (categoryId) => {
    dispatch(setCategory(categoryId));
  };

  const getCategoryClass = (categoryId) =>
    selectedCategory === categoryId
      ? "block font-bold text-xs md:text-base text-green-primary-500 underline-offset-2 transition-all duration-300"
      : "transition-all duration-300";

  if (isCategoriesLoading) {
    return <div>در حال بارگذاری دسته‌بندی‌ها...</div>;
  }

  if (isCategoriesError) {
    return <div>خطا در دریافت دسته‌بندی‌ها: {categoriesError.message}</div>;
  }

  return (
    <div className="mx-auto bg-[#EDEDED]">
      <div className="mx-auto flex max-w-md list-none flex-row items-center justify-between md:max-w-8xl">
        <nav>
          <ul className="flex items-center gap-6 px-2 py-5 text-sm leading-9 text-[#717171] md:text-xl">
            {categories?.map((category) => (
              <li key={category.id}>
                <button
                  className={getCategoryClass(category.id)}
                  onClick={() =>
                    handleCategoryClick(category.id, category.name_fa)
                  }
                >
                  {category.name_fa}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <MenupageNavbarChangeBranch />
      </div>
    </div>
  );
}

export default MenupageNavbar;
