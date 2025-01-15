import supabase from "./supabase";

export const fetchBranchesByname = async (branchName) => {
  const { data: branches, error } = await supabase.from("branches").select("*");

  if (error) {
    throw new Error(error.message);
  }

  // جستجو برای پیدا کردن شعبه با نام مطابق با branchName
  const branch = branches.find((branch) => branch.name === branchName);

  if (!branch) {
    throw new Error("Branch not found");
  }

  return branch;
};
