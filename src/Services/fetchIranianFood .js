import supabase from "./supabase";

// Function to fetch Iranian food menu items for a specific branch
const fetchIranianFood = async (branchId) => {
  try {
    // Step 1: Get the ID of the 'Iranian Food' subcategory filtered by branch ID
    const { data: iranianSubcategory, error: iranianSubcategoryError } =
      await supabase
        .from("subcategories")
        .select("id")
        .eq("name", "iranian food")
        .eq("branch_id", branchId); // Filter by branch ID

    if (iranianSubcategoryError) {
      throw iranianSubcategoryError;
    }

    const iranianSubcategoryId = iranianSubcategory.map((sub) => sub.id);

    // Step 2: Get menu items that belong to the 'Iranian Food' subcategory and the specific branch
    const { data: menuItems, error: menuItemsError } = await supabase
      .from("menu_items")
      .select("*")
      .in("subcategory_id", iranianSubcategoryId)
      .eq("branch_id", branchId); // Filter by branch ID

    if (menuItemsError) {
      throw menuItemsError;
    }

    return menuItems;
  } catch (error) {
    return [];
  }
};

export default fetchIranianFood;
