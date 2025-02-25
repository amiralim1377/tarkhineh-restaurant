import supabase from "./supabase";

export const getFavoriteCategoryIds = async (userId) => {
  const { data, error } = await supabase
    .from("favorites")
    .select("category_id")
    .eq("customer_id", userId);

  if (error) {
    console.error("Error fetching favorite category IDs:", error);
    throw error;
  }

  console.log("Fetched favorite category IDs:", data);
  return data;
};
