import { useQuery } from "@tanstack/react-query";
import fetchFavorites from "../../../Services/fetchFavoritesFood";
import fetchFoodDetails from "../../../Services/fetchFoodDetails ";

const useFavoritesWithDetails = (userId) => {
  const {
    data: favorites,
    error: favoritesError,
    isLoading,
  } = useQuery({
    queryKey: ["favorites", userId],
    queryFn: () => fetchFavorites(userId),
    enabled: !!userId,
  });

  const favoritesWithDetails = useQuery({
    queryKey: ["favoritesWithDetails", favorites],
    queryFn: async () => {
      if (!favorites) return [];
      const details = await Promise.all(
        favorites.map(async (favorite) => {
          const foodDetails = await fetchFoodDetails(favorite.food_id);
          return { ...favorite, ...foodDetails };
        }),
      );
      return details;
    },
    enabled: !!favorites,
  });

  return {
    data: favoritesWithDetails.data,
    error: favoritesError || favoritesWithDetails.error,
    isLoading: isLoading || favoritesWithDetails.isLoading,
  };
};

export default useFavoritesWithDetails;

// to fetch favorite food from database
// to fetch details food from database
