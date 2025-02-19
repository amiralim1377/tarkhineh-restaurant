import supabase from "./supabase";

// Function to fetch branch data by branch ID
const fetchBranchesById = async (branchId) => {
  // Query the 'branches' table to select all columns where branch_id matches the given branchId
  const { data, error } = await supabase
    .from("branches")
    .select("*")
    .eq("branch_id", branchId);

  if (error) {
    throw new Error(error.message);
  }

  return data[0]; // Return the fetched data
};

export { fetchBranchesById };
