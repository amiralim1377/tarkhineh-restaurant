import supabase from "./supabase";

const branchTables = {
  "2d6d303c-b7c2-4056-a638-b95f1b8ee419": "vanak_menu_items",
  "79072ae8-b605-44a2-92c5-43d0c1c0f160": "aghdasieh_menu_items",
  "865cfad1-cf88-4900-bb56-f767b4f39aaf": "ekbatan_menu_items",
  "98167dd0-604c-4ec9-ad30-d49408dc9bfd": "chalus_menu_items",
};

export const fetchMenuItems = async ({
  branchId,
  categoryId,
  subcategoryType,
  specificSubcategoryId = null,
}) => {
  const branchTable = branchTables[branchId];

  if (!branchTable) {
    throw new Error("Invalid branch_id");
  }

  let query = supabase
    .from(branchTable)
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
