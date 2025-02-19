import supabase from "./supabase";

const getUserId = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return null;
  }

  return data.user.id;
};

export default getUserId;
