import { useEffect, useState } from "react";
import useFavorites from "../React Custom Hooks/useFavorites/useFavorites";
import useUserData from "../React Custom Hooks/useUserData/useUserData";

function AddToFavoritesFromSlider({ item }) {
  const { branch_id, category_id, id, subcategory_id } = item;
  const { userId, isLoggedIn } = useUserData();

  const { favorites, addToFavorites, removeFromFavorites, isLoading } =
    useFavorites(userId);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (userId && isLoggedIn && !isLoading) {
      const isFav = favorites?.some((fav) => fav.food_id === id);
      setIsFavorite(isFav);
    } else {
      setIsFavorite(false);
    }
  }, [favorites, userId, isLoading, id, isLoggedIn]);

  const handleFavoriteToggle = async () => {
    if (isFavorite) {
      await removeFromFavorites({ userId, foodId: id });
      setIsFavorite(false);
    } else {
      const success = await addToFavorites({
        userId,
        foodId: id,
        branchId: branch_id,
        categoryId: category_id,
        subcategoryId: subcategory_id,
      });

      if (success) {
        setIsFavorite(true);
      }
    }
  };
  return (
    <div className="flex items-center">
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleFavoriteToggle();
        }}
        className="h-full cursor-pointer"
      >
        {isFavorite ? (
          <img src="/icons/heart-bold.svg" className="h-4 w-4" alt="Heart" />
        ) : (
          <img src="/icons/heart.svg" className="h-4 w-4" alt="Heart" />
        )}
      </div>
      <h6 className="hidden text-xs text-[#ADADAD] md:block">
        افزودن به علاقمندی‌ها
      </h6>
    </div>
  );
}

export default AddToFavoritesFromSlider;
