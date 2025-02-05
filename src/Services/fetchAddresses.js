import supabase from "../Services/supabase"; // مسیر صحیح به فایل supabase.js

export const fetchAddresses = async () => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error("خطا در دریافت کاربر:", userError.message);
    throw new Error(userError.message);
  }

  // دریافت آدرس‌های مربوط به کاربر
  const { data, error } = await supabase
    .from("addresses")
    .select("*")
    .eq("customer_id", user.id);

  if (error) {
    console.error("خطا در دریافت آدرس‌ها:", error.message);
    throw new Error(error.message);
  }

  return data;
};
