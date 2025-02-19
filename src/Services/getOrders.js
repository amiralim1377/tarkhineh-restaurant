import supabase from "./supabase";

export const getOrders = async (customerId) => {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("customer_id", customerId)
    .order("order_date", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
};
