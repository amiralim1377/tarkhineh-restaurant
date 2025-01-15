import supabase from "./supabase";

export const fetchBranches = async () => {
  const { data: branches, error } = await supabase.from("branches").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return branches;
};
