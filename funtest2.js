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
  subcategoryId,
}) => {
  const branchTable = branchTables[branchId];

  if (!branchTable) {
    throw new Error("Invalid branch_id");
  }

  // ایجاد کوئری اولیه
  let query = supabase
    .from(branchTable)
    .select("*")
    .eq("category_id", categoryId)
    .eq("branch_id", branchId);

  // اعمال شرط برای هر ساب‌کتگوری به صورت داینامیک
  switch (subcategoryId) {
    case "economic_subcategory_id": // آیتم‌های اقتصادی
      query = query.eq("economic", true);
      break;

    case "best_sellers_subcategory_id": // آیتم‌های پرفروش
      query = query.eq("best_seller", true);
      break;

    case "all_subcategory_id": // آیتم‌های مرتبط با "همه"
      // نیازی به شرط اضافی نیست، زیرا همه موارد باید بازگردانده شوند
      break;

    default: // ساب‌کتگوری‌های عادی
      query = query.eq("subcategory_id", subcategoryId);
      break;
  }

  const { data: menuItems, error } = await query;

  if (error) {
    console.error("Error fetching menu items:", error.message);
    throw new Error(error.message);
  }

  return menuItems;
};

// غذاهارو میده اقتصادی ترین هارو هم میده ولی هی باید ایدی تعریف کردش
