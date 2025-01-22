import supabase from "./supabase";

export const fetchSubcategoriesByBranchAndCategory = async (
  branchId,
  categoryId,
) => {
  const { data, error } = await supabase
    .from("subcategories")
    .select("*")
    .eq("branch_id", branchId)
    .eq("main_category_id", categoryId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
