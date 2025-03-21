import { useEffect, useState } from "react";
import { formatPrice } from "../../helper_functions/formatPrice";
import useUserData from "../React Custom Hooks/useUserData/useUserData";
import useFavorites from "../React Custom Hooks/useFavorites/useFavorites";

function MenuItemsContentUpWrapper({ item }) {
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
  }, [favorites, userId, id, isLoading, isLoggedIn]);

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
    <div className="flex flex-row items-center justify-between gap-2">
      <h3 className="text-wrap text-[12px] text-[#353535] md:text-base md:font-semibold lg:text-xl">
        {item.name_fa}
      </h3>
      <div className="flex items-center justify-start gap-3">
        {item.discount_percentage !== 0 && (
          <div className="flex w-full max-w-20 items-center justify-between gap-1 md:hidden">
            <span className="w-full text-nowrap text-[9px] text-[#ADADAD] line-through">
              {formatPrice(item.price)}
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-200 p-1 text-center text-[9px] text-red-800">
              %{item.discount_percentage}
            </span>
          </div>
        )}
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleFavoriteToggle();
          }}
          className="h-full w-full"
        >
          {isFavorite ? (
            <img
              src="/icons/heart-bold.svg"
              className="h-4 w-4 md:h-6 md:w-6"
              alt="Heart"
            />
          ) : (
            <img
              src="/icons/heart.svg"
              className="h-4 w-4 md:h-6 md:w-6"
              alt="Heart"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItemsContentUpWrapper;
