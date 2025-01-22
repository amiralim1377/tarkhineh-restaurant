import supabase from "./supabase";

export const fetchSubcategories = async (branchId, categoryName) => {
  const { data, error } = await supabase
    .from("subcategories")
    .select("*")
    .eq("branch_id", branchId) // فیلتر کردن بر اساس branchId
    .eq("category_name", categoryName); // فیلتر کردن بر اساس categoryName

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
