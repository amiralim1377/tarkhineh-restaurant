import supabase from "./supabase";

export const sendOrderToServer = async (orderData) => {
  const { data, error } = await supabase
    .from("orders")
    .insert([orderData])
    .select();

  if (error) {
    console.error("Error sending order:", error.message);
    // You can also inspect `error.details` or `error.hint` if they are available
    throw error;
  }

  return data;
};
