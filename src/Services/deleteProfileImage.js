import supabase from "./supabase";

const deleteProfileImage = async (userId, fileName) => {
  // Start the function to delete the profile image
  // Remove the image from the bucket
  const { data: deleteData, error: deleteError } = await supabase.storage
    .from("profile-images")
    .remove([fileName]);

  if (deleteError && deleteError.statusCode !== "404") {
    // Error in deleting the image, except for 404 which indicates the previous image does not exist
    return null;
  }

  // Image deleted successfully
  // Update the image column to null in the customers table
  const { data: updateData, error: updateError } = await supabase
    .from("customers")
    .update({ image: null })
    .eq("customer_id", userId)
    .select();

  if (updateError) {
    // Error in updating the profile image URL to null
    return null;
  }

  // Profile image URL updated successfully to null
  return true;
};

export default deleteProfileImage;
