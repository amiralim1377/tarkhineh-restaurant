import supabase from "./supabase";

// Function to cancel an order by its order_id
export async function cancelOrderById(order_id) {
  try {
    const { data, error } = await supabase
      .from("orders") // Target the 'orders' table
      .update({ order_status: "Canceled" }) // Update the order status to 'Canceled'
      .eq("order_id", order_id) // Match the order with the specified order_id
      .select(); // Select and return the updated order

    // Handle any errors that occurred during the request
    if (error) {
      throw error; // Throw the error to be caught by the catch block
    }

    // Check if data is null or empty
    if (!data || data.length === 0) {
      return null; // Return null if no order was found
    } else {
      return data; // Return the data if the order was successfully canceled
    }
  } catch (error) {
    // Log and return null if an error occurred
    return null;
  }
}
