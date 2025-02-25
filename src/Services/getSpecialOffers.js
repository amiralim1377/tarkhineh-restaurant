import supabase from "./supabase";

export const getSpecialOffers = async (branchId) => {
  const { data, error } = await supabase
    .from("menu_items")
    .select("*") // تغییر برای انتخاب همه ستون‌ها
    .eq("branch_id", branchId)
    .eq("discount_available", true);

  if (error) {
    throw error;
  }

  return data;
};
