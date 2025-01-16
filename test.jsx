import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../Services/fetchCategories";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../Slice/categorySlice/categorySlice";

function MenuChips() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory,
  );
  const branchId = useSelector((state) => state.branches.selectedBranch.id);
  console.log(branchId);

  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories", branchId],
    queryFn: () => fetchCategories(branchId),
  });

  console.log(categories);

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  if (isLoading) {
    return <div>در حال بارگذاری دسته‌بندی‌ها...</div>;
  }

  if (isError) {
    return <div>خطا در دریافت دسته‌بندی‌ها: {error.message}</div>;
  }

  return (
    <ul className="mx-auto flex w-full gap-3 text-nowrap p-2 text-[10px] md:max-w-3xl md:text-sm xl:text-base">
      {categories.map((category) => (
        <li
          key={category.id}
          className={`flex w-full items-center justify-center rounded-lg p-2 text-center text-[#353535] md:max-w-36 ${selectedCategory === category.id ? "bg-[#EDEDED]" : ""}`}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name_fa}
          <img src="/icons/arrow-left-blakc.svg" className="h-3 w-3" alt="" />
        </li>
      ))}
    </ul>
  );
}

export default MenuChips;
