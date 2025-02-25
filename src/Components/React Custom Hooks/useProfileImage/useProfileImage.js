import { useState } from "react";
import uploadProfileImage from "../../../Services/uploadProfileImage";
import deleteProfileImage from "../../../Services/deleteProfileImage";
import { useQueryClient } from "@tanstack/react-query";

const useProfileImage = (userId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const queryClient = useQueryClient();
  const [editMode, setEditMode] = useState(false);

  const handleUploadProfileImage = async (file) => {
    setIsLoading(true);
    setEditMode(true);
    try {
      const profileImageUrl = await uploadProfileImage(file, userId);
      if (profileImageUrl && editMode) {
        // Image uploaded successfully
        setSelectedFileName(file.name);
        queryClient.invalidateQueries(["userData", userId]);
      } else {
        // Failed to upload image
        console.error("Failed to upload image.");
      }
    } catch (error) {
      console.error(
        "An error occurred while uploading the profile image:",
        error,
      );
    } finally {
      setIsLoading(false);
      setEditMode(false);
    }
  };

  const handleDeleteProfileImage = async (imageUrl, e) => {
    e.preventDefault(); // جلوگیری از ارسال دوباره فرم
    if (typeof imageUrl !== "string") {
      console.error("imageUrl is not a string:", imageUrl);
      return;
    }

    setIsLoading(true);
    setEditMode(true);
    try {
      const fileName = `${userId}/${imageUrl.split("/").pop()}`;
      const result = await deleteProfileImage(userId, fileName);
      if (result) {
        // Image deleted successfully
        setSelectedFileName("");
        queryClient.invalidateQueries(["userData", userId]);
      } else {
        // Failed to delete image
        console.error("Failed to delete image.");
      }
    } catch (error) {
      console.error(
        "An error occurred while deleting the profile image:",
        error,
      );
    } finally {
      setIsLoading(false);
      setEditMode(false);
    }
  };

  return {
    isLoading,
    selectedFileName,
    setSelectedFileName,
    setEditMode,
    editMode,
    handleUploadProfileImage,
    handleDeleteProfileImage,
  };
};

export default useProfileImage;
