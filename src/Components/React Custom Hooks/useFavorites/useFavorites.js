import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "../../../Services/supabase";
import toast from "react-hot-toast";
import fetchFavorites from "../../../Services/fetchFavoritesFood";
import useUserData from "../useUserData/useUserData";

const useFavorites = () => {
  const queryClient = useQueryClient();
  const { userId, isLoggedIn } = useUserData();
  const [isAddedToFavourite, setIsAddedToFavourite] = useState(false);

  const {
    data: favorites = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["favorites", userId],
    queryFn: () => fetchFavorites(userId),
    enabled: isLoggedIn,
  });

  const addToFavorites = async ({
    userId,
    foodId,
    branchId,
    categoryId,
    subcategoryId,
  }) => {
    if (!isLoggedIn) {
      toast.error("برای افزودن به علاقه‌مندی‌ها، لطفاً وارد سایت شوید.", {
        position: "top-left",
      });
      return false;
    }

    const { data, error } = await supabase.from("favorites").insert([
      {
        customer_id: userId,
        food_id: foodId,
        branch_id: branchId,
        category_id: categoryId,
        subcategory_id: subcategoryId,
      },
    ]);

    if (error) {
      if (error.code === "42501") {
        toast.error("برای افزودن به علاقه‌مندی‌ها، لطفاً وارد سایت شوید.", {
          position: "top-left",
        });
      } else {
        toast.error("خطا در اضافه کردن به علاقه‌مندی‌ها.", {
          position: "top-left",
        });
      }
      console.error(error);
      return false;
    } else {
      toast.success("به علاقه مندی ها اضافه شد.", { position: "top-left" });
      setIsAddedToFavourite(true);
      queryClient.invalidateQueries(["favorites", userId]);
      return true;
    }
  };

  const removeFromFavorites = async ({ userId, foodId }) => {
    if (!isLoggedIn) {
      toast.error("برای حذف از علاقه‌مندی‌ها، لطفاً وارد سایت شوید.", {
        position: "top-left",
      });
      return false;
    }

    const { data, error } = await supabase
      .from("favorites")
      .delete()
      .eq("customer_id", userId)
      .eq("food_id", foodId);

    if (error) {
      toast.error("خطا در حذف از علاقه‌مندی‌ها.", {
        position: "top-left",
      });
      console.error(error);
      return false;
    } else {
      toast.error("از علاقه مندی ها حذف گردید.", { position: "top-left" });
      setIsAddedToFavourite(false);
      queryClient.invalidateQueries(["favorites", userId]);
      return true;
    }
  };

  return {
    isAddedToFavourite,
    addToFavorites,
    removeFromFavorites,
    favorites,
    error,
    isLoading,
  };
};

export default useFavorites;
