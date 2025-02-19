import supabase from "./supabase";

const fetchFoodDetails = async (foodId) => {
  const { data: foodDetails, error } = await supabase
    .from("menu_items")
    .select("*")
    .eq("id", foodId)
    .single();

  if (error) {
    console.error("Error fetching food details:", error.message);
    throw new Error(error.message);
  }

  return foodDetails;
};

export default fetchFoodDetails;
