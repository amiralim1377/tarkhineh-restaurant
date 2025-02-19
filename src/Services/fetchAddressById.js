import supabase from "./supabase";

// Function to fetch address by ID from the database
const fetchAddressById = async (addressId) => {
  // Query the database to get the address with the given ID
  const { data, error } = await supabase
    .from("addresses")
    .select("*")
    .eq("id", addressId);

  if (error) {
    throw new Error(error.message);
  }

  return data[0]; // Return the first element from the data array
};

export { fetchAddressById };
