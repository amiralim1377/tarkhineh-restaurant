import supabase from "./supabase";

export const getFavoriteCategories = async (categoryIds) => {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .in("id", categoryIds);

  if (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }

  console.log("Fetched categories:", data);
  return data;
};
