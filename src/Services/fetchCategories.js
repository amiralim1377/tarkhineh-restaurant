import supabase from "./supabase";

export const fetchCategories = async (branchId) => {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*")
    .eq("branch_id", branchId);

  if (error) {
    throw new Error(error.message);
  }

  return categories;
};
