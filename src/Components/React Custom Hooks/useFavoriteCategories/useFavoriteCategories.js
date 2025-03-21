import { useQuery } from "@tanstack/react-query";
import { getFavoriteCategoryIds } from "../../../Services/getFavoriteCategoryIds";
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

  const categoryIds =
    favoriteCategoriesIds?.map((favorite) => favorite.category_id) || [];

  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useQuery({
    queryKey: ["favoriteCategories", categoryIds],
    queryFn: () => getFavoriteCategories(categoryIds),
    enabled: !!categoryIds.length,
  });

  return {
    categories,
    isLoading: isLoadingFavoriteCategoryIds || isLoadingCategories,
    error: errorFavoriteCategoryIds || errorCategories,
  };
};

export default useFavoriteCategories;
