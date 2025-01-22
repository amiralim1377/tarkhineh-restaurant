import supabase from "./supabase";

export const fetchCategories = async (branchId) => {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*, default_subcategory") // دریافت زیر دسته‌بندی دیفالت
    .eq("branch_id", branchId);

  if (error) {
    throw new Error(error.message);
  }

  return categories;
};
