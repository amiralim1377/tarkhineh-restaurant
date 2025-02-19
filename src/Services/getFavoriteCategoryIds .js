import supabase from "./supabase";

export const getFavoriteCategoryIds = async (userId) => {
  const { data, error } = await supabase
    .from("favorites")
    .select("category_id")
    .eq("customer_id", userId);

  if (error) {
    throw error;
  }

  return data;
};
