import useUserData from "../React Custom Hooks/useUserData/useUserData";
import useFavoritesWithDetails from "../React Custom Hooks/useFavoritesWithDetails/useFavoritesWithDetails";
import EmptyFavorites from "../EmptyFavorites/EmptyFavorites";
import useFavorites from "../React Custom Hooks/useFavorites/useFavorites";

import DashboardFavoritesItemsLi from "../DashboardFavoritesItemsLi/DashboardFavoritesItemsLi";

function DashboardFavoritesItems() {
  const { userId } = useUserData();

  const { data: favorites, error, isLoading } = useFavoritesWithDetails(userId);

  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (error) {
    return <div>خطا در بازیابی اطلاعات: {error.message}</div>;
  }

  return (
    <div>
      {favorites && favorites.length > 0 ? (
        <ul className="grid grid-cols-2 gap-4 py-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favorites?.map((favorite) => (
            <DashboardFavoritesItemsLi
              key={favorite.id}
              favorite={favorite}
              userId={userId}
            />
          ))}
        </ul>
      ) : (
        <EmptyFavorites />
      )}
    </div>
  );
}

export default DashboardFavoritesItems;
