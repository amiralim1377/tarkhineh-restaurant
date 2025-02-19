import supabase from "./supabase";

export const fetchMenuItems = async ({
  branchId,
  categoryId,
  subcategoryType,
  specificSubcategoryId = null,
}) => {
  let query = supabase
    .from("menu_items")
    .select("*")
    .eq("branch_id", branchId)
    .eq("category_id", categoryId);

  if (subcategoryType === "most economical") {
    query = query.eq("economic", true);
  } else if (subcategoryType === "best-selling") {
    query = query.eq("best_seller", true);
  } else if (
    subcategoryType &&
    subcategoryType !== "all" &&
    specificSubcategoryId
  ) {
    query = query.eq("subcategory_id", specificSubcategoryId);
  }

  const { data: menuItems, error } = await query;

  if (error) {
    console.error("Error fetching menu items:", error.message);
    throw new Error(error.message);
  }

  return menuItems;
};
