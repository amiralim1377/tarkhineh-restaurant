import supabase from "./supabase";

const branchTables = {
  "2d6d303c-b7c2-4056-a638-b95f1b8ee419": "vanak_menu_items",
  "79072ae8-b605-44a2-92c5-43d0c1c0f160": "aghdasieh_menu_items",
  "865cfad1-cf88-4900-bb56-f767b4f39aaf": "ekbatan_menu_items",
  "98167dd0-604c-4ec9-ad30-d49408dc9bfd": "chalus_menu_items",
};

export const fetchEconomicItems = async ({
  branchId,
  categoryId,
  filterType = "economic",
}) => {
  const branchTable = branchTables[branchId];

  if (!branchTable) {
    throw new Error("Invalid branch_id");
  }

  let query = supabase
    .from(branchTable)
    .select("*")
    .eq("category_id", categoryId); // شرط مطابق با ورودی

  // اضافه کردن فیلتر اقتصادی به شرط‌ها
  if (filterType === "economic") {
    query = query.eq("economic", true);
  }

  const { data: economicItems, error } = await query;

  if (error) {
    console.error("Error fetching economic items:", error.message);
    throw new Error(error.message);
  }

  console.log("Fetched economic items:", economicItems);
  return economicItems;
};
