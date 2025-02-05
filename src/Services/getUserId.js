import supabase from "../Services/supabase";

const getUserId = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return user.id;
};

export default getUserId;
