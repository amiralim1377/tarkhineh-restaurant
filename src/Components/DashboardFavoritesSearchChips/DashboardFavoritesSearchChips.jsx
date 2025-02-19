import DashboardFavoritesSearch from "../DashboardFavoritesSearch/DashboardFavoritesSearch";
import useFavoriteCategories from "../React Custom Hooks/useFavoriteCategories/useFavoriteCategories";
import useUserData from "../React Custom Hooks/useUserData/useUserData";

function DashboardFavoritesSearchChips() {
  const { userId } = useUserData();
  const {
    categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useFavoriteCategories(userId);

  if (categoriesLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (categoriesError) {
    return <div>خطا در بازیابی اطلاعات: {categoriesError.message}</div>;
  }

  return (
    <div className="flex flex-row items-center justify-between py-2">
      <div className="mx-auto hidden w-full max-w-md flex-col items-center justify-between gap-3 md:flex md:max-w-8xl md:flex-row">
        <ul className="flex w-full gap-3 overflow-y-scroll p-2 text-center text-sm md:max-w-3xl md:overflow-visible xl:text-base">
          {categories?.map((category) => (
            <li
              key={category.id}
              className="flex cursor-pointer items-center justify-center text-nowrap rounded-lg bg-gray-100 px-4 py-3 text-xs transition-all duration-300"
            >
              {category.name_fa}
              <img
                src="/icons/arrow-left-blakc.svg"
                className="ml-2 h-3 w-3"
                alt="Arrow"
              />
            </li>
          ))}
        </ul>
      </div>
      <DashboardFavoritesSearch />
    </div>
  );
}

export default DashboardFavoritesSearchChips;
