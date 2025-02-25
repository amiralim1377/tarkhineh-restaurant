import supabase from "./supabase";

export const getPopularDishes = async (branchId) => {
  const { data, error } = await supabase
    .from("menu_items")
    .select(
      "id, name_fa, description, ingredients, discount_percentage, price, images, rating, number_of_reviews",
    )
    .eq("branch_id", branchId)
    .eq("best_seller", true);

  if (error) {
    throw error;
  }

  return data;
};
