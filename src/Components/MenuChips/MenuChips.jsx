import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Slice/categorySlice/categorySlice"; // تصحیح نام اکشن
import { fetchSubcategories } from "../../Services/fetchSubcategories"; // فرض می‌کنیم این تابع ساب کتگوری‌ها رو واکشی می‌کنه

function MenuChips() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory,
  );
  console.log(selectedCategory);

  const {
    data: subcategories,
    isLoading: subcategoriesLoading,
    isError: subcategoriesError,
    error: subcategoriesErrorMessage,
  } = useQuery({
    queryKey: ["subcategories", selectedCategory], // اینجا ساب کتگوری‌ها بر اساس selectedCategory واکشی میشه
    queryFn: fetchSubcategories,
    enabled: !!selectedCategory, // فقط زمانی که یک کتگوری انتخاب شده باشه واکشی انجام بشه
  });

  const handleCategoryClick = (categoryId) => {
    dispatch(setCategory(categoryId)); // تصحیح فراخوانی اکشن
  };

  if (subcategoriesLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (subcategoriesError) {
    return <div>خطا: {subcategoriesErrorMessage}</div>;
  }

  return (
    <div className="mx-auto mt-4 flex w-full max-w-md flex-col items-center justify-center gap-3 md:max-w-8xl md:flex-row">
      <ul className="mx-auto flex w-full gap-3 text-nowrap p-2 text-[10px] md:max-w-3xl md:text-sm xl:text-base">
        {subcategories?.map((subcategory) => (
          <li
            key={subcategory.id}
            onClick={() => handleCategoryClick(subcategory.id)} // اضافه کردن کلیک برای انتخاب کتگوری
            className="flex w-full items-center justify-center rounded-lg bg-[#EDEDED] p-2 text-center text-[#353535] md:max-w-36"
          >
            {subcategory.name_fa}
            <img src="/icons/arrow-left-blakc.svg" className="h-3 w-3" alt="" />
          </li>
        ))}
      </ul>
      <div className="relative w-full px-2">
        <input
          type="text"
          className="w-full rounded-sm border border-gray-200 p-2 pl-14 focus:outline-none focus:ring-2 focus:ring-green-900"
          placeholder="جست وجو"
        />
        <img
          src="/icons/search-normal.svg"
          alt="آیکون جست وجو"
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400"
        />
      </div>
    </div>
  );
}

export default MenuChips;
