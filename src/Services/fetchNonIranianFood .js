import supabase from "./supabase";

// Function to fetch sandwiches, pizzas, and non-Iranian food menu items for a specific branch
const fetchNonIranianFood = async (branchId) => {
  try {
    // Step 1: Get the IDs of the desired subcategories (sandwiches, pizzas, and non-Iranian food) filtered by branch ID
    const { data: subcategories, error: subcategoriesError } = await supabase
      .from("subcategories")
      .select("id")
      .in("name", ["sandwiches", "pizzas", "non-iranian food"])
      .eq("branch_id", branchId); // Filter by branch ID

    if (subcategoriesError) {
      throw subcategoriesError;
    }

    const subcategoryIds = subcategories.map((sub) => sub.id);

    // Step 2: Get menu items that belong to the desired subcategories and the specific branch
    const { data: menuItems, error: menuItemsError } = await supabase
      .from("menu_items")
      .select("*")
      .in("subcategory_id", subcategoryIds)
      .eq("branch_id", branchId); // Filter by branch ID

    if (menuItemsError) {
      throw menuItemsError;
    }

    return menuItems;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return [];
  }
};

export default fetchNonIranianFood;
