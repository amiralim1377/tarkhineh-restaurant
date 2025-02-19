import supabase from "./supabase";

const fetchProfileImage = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("customers")
      .select("image")
      .eq("customer_id", userId)
      .single();

    if (error) {
      console.error("Error fetching profile image:", error);
      return null;
    }

    return data.image;
  } catch (error) {
    console.error("Unexpected error:", error.message);
    return null;
  }
};

export default fetchProfileImage;
