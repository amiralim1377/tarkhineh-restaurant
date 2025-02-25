import supabase from "./supabase";

// Function to fetch desired menu items from a branch by ID and query
export async function fetchDesiredFromMenuItems(branchId, query) {
  try {
    const { data, error } = await supabase
      .from("menu_items")
      .select("*")
      .eq("branch_id", branchId)
      .ilike("name_fa", `%${query}%`);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch menu items:", error);
    return [];
  }
}
