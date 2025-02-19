import supabase from "./supabase";

// Function to fetch ordered items by their IDs from the database
const fetchOrderedItemsById = async (menuItemsIds) => {
  // Query the database to get the menu items with the given IDs
  const { data, error } = await supabase
    .from("menu_items")
    .select("*")
    .in("id", menuItemsIds); // Use 'in' to match multiple IDs

  if (error) {
    throw new Error(error.message);
  }

  return data; // Return the fetched data
};

export { fetchOrderedItemsById };
