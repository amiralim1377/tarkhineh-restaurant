import supabase from "./supabase";

const fetchFavorites = async (userId) => {
  const { data: favorites, error } = await supabase
    .from("favorites")
    .select("*")
    .eq("customer_id", userId);

  if (error) {
    console.error("Error fetching favorites:", error);
    return [];
  }

  return favorites;
};

export default fetchFavorites;
