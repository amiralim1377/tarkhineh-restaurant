import supabase from "./supabase";

export const fetchSubcategories = async ({ queryKey }) => {
  const [_, categoryId] = queryKey;
  const { data, error } = await supabase
    .from("subcategories")
    .select("*")
    .eq("main_category_id", categoryId);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
