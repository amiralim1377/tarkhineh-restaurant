import { useQuery } from "@tanstack/react-query";
import { getFavoriteCategoryIds } from "../../../Services/getFavoriteCategoryIds ";
import { getFavoriteCategories } from "../../../Services/getFavoriteCategories";

const useFavoriteCategories = (userId) => {
  const {
    data: favoriteCategoriesIds,
    isLoading: isLoadingFavoriteCategoryIds,
    error: errorFavoriteCategoryIds,
  } = useQuery({
    queryKey: ["favoriteCategoryIds", userId],
    queryFn: () => getFavoriteCategoryIds(userId),
  });

  console.log("Favorite Category IDs:", favoriteCategoriesIds);
  console.log("Loading Favorite Category IDs:", isLoadingFavoriteCategoryIds);
  console.log("Error Favorite Category IDs:", errorFavoriteCategoryIds);

  const categoryIds =
    favoriteCategoriesIds?.map((favorite) => favorite.category_id) || [];

  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useQuery({
    queryKey: ["favoriteCategories", categoryIds],
    queryFn: () => getFavoriteCategories(categoryIds),
    enabled: !!categoryIds.length, // فعال‌سازی کوئری تنها زمانی که categoryIds موجود باشند
  });

  console.log("Categories:", categories);
  console.log("Loading Categories:", isLoadingCategories);
  console.log("Error Categories:", errorCategories);

  return {
    categories,
    isLoading: isLoadingFavoriteCategoryIds || isLoadingCategories,
    error: errorFavoriteCategoryIds || errorCategories,
  };
};

export default useFavoriteCategories;
