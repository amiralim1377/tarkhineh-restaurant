import supabase from "./supabase";

const uploadProfileImage = async (file, userId) => {
  console.log("Starting uploadProfileImage function");

  const fileName = `${userId}/${file.name}`;
  console.log("Generated fileName:", fileName);

  const { data, error } = await supabase.storage
    .from("profile-images")
    .upload(fileName, file, { upsert: true }); // استفاده از آپشن upsert

  if (error) {
    console.error("Error uploading image:", error);
    return null;
  }

  console.log("Image uploaded successfully, data:", data);

  // تولید لینک عمومی برای تصویر به صورت دستی
  const publicURL = `${supabase.storageUrl}/object/public/profile-images/${fileName}`;
  console.log("Manually generated public URL:", publicURL);

  // ذخیره لینک تصویر در جدول customers
  console.log("Attempting to update customers table with public URL");
  const { data: updateData, error: updateError } = await supabase
    .from("customers")
    .update({ image: publicURL })
    .eq("customer_id", userId)
    .select();

  if (updateError) {
    console.error("Error updating profile image URL:", updateError);
    return null;
  }

  console.log(
    "Profile image URL updated successfully, updateData:",
    updateData,
  );
  return publicURL;
};

export default uploadProfileImage;
