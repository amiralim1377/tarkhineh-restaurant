// مسیر فایل: src/functions/fetchUserData.js

import supabase from "../Services/supabase";

const fetchUserData = async (userId) => {
  if (!userId) {
    console.error("شناسه کاربر نامعتبر است.");
    return null;
  }

  try {
    const { data, error } = await supabase
      .from("customers")
      .select("firstname, lastname, email, phonenumber, birthdate, username")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("خطا در دریافت اطلاعات کاربر:", error.message);
      return null;
    }

    return data;
  } catch (error) {
    console.error("خطای غیرمنتظره در دریافت اطلاعات کاربر:", error.message);
    return null;
  }
};

export default fetchUserData;
