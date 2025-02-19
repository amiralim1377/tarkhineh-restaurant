import supabase from "./supabase";

const uploadProfileImage = async (file, userId) => {
  console.log("Starting uploadProfileImage function");

  const fileName = `${userId}/${file.name}`;
  console.log("Generated fileName:", fileName);

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("profile-images")
    .upload(fileName, file);

  if (uploadError) {
    console.error("Error uploading image:", uploadError);
    return null;
  }

  console.log("Image uploaded successfully, uploadData:", uploadData);

  // تولید لینک عمومی برای تصویر به صورت دستی
  const publicURL = `${supabase.storageUrl}/object/public/profile-images/${fileName}`;
  console.log("Manually generated public URL:", publicURL);

  // ذخیره لینک تصویر در جدول customers
  console.log(
    "Attempting to update customers table with public URL:",
    publicURL,
  );

  const { data: updateData, error: updateError } = await supabase
    .from("customers")
    .update({ image: publicURL })
    .eq("customer_id", userId)
    .select("customer_id, image")
    .single();

  console.log("Update operation completed:", { updateData, updateError });

  if (updateError) {
    console.error("Error updating profile image URL:", updateError);
    return null;
  }

  if (updateData) {
    console.log(
      "Profile image URL updated successfully, updateData:",
      updateData,
    );
  } else {
    console.error(
      "No data returned from update operation. This may indicate an issue with the userId or the customer_id column.",
    );
  }

  return publicURL;
};

export default uploadProfileImage;
