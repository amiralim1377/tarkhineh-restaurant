import supabase from "./supabase";

export const updateUserInfo = async (newData, userId) => {
  try {
    const { data, error } = await supabase
      .from("customers")
      .update(newData)
      .eq("customer_id", userId);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error updating user info:", error);
    throw error;
  }
};
