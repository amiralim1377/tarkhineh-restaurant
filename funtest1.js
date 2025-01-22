import supabase from "./supabase";

export const fetchMenuItems = async (branchId, categoryId, subcategoryId) => {
  let branchTable;
  switch (branchId) {
    case "2d6d303c-b7c2-4056-a638-b95f1b8ee419":
      branchTable = "vanak_menu_items";
      break;
    case "79072ae8-b605-44a2-92c5-43d0c1c0f160":
      branchTable = "aghdasieh_menu_items";
      break;
    case "865cfad1-cf88-4900-bb56-f767b4f39aaf":
      branchTable = "ekbatan_menu_items";
      break;
    case "98167dd0-604c-4ec9-ad30-d49408dc9bfd":
      branchTable = "chalus_menu_items";
      break;
    default:
      throw new Error("Invalid branch_id");
  }

  const { data: menuItems, error } = await supabase
    .from(branchTable)
    .select("*")
    .eq("category_id", categoryId)
    .eq("subcategory_id", subcategoryId);

  if (error) {
    console.error("Error fetching menu items:", error.message);
    throw new Error(error.message);
  }

  // لاگ برای دیدن داده‌های دریافت شده
  console.log("Fetched menu items:", menuItems);

  return menuItems;
};

// اقتصادی ترین ها رو نمیده ورژن اول
