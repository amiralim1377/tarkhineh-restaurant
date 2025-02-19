import supabase from "./supabase";

export const getFavoriteCategories = async (categoryIds) => {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .in("id", categoryIds);

  if (error) {
    throw error;
  }

  return data;
};
