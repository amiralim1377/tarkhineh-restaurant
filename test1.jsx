import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import supabase from "../../Services/supabase";
import useUserData from "../React Custom Hooks/useUserData/useUserData";
import DatePicker from "react-multi-date-picker";
import { useForm } from "react-hook-form";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";

function DashboardProfileItems() {
  const queryClient = useQueryClient();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    birthdate: "",
    username: "",
  });

  const {
    userId,
    isUserLoading,
    userError,
    userData,
    isUserDataLoading,
    userDataError,
  } = useUserData();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (userData) {
      setFormData({
        firstname: userData.firstname || "",
        lastname: userData.lastname || "",
        email: userData.email || "",
        phonenumber: userData.phonenumber || "",
        birthdate: userData.birthdate || null, // برای تاریخ تولد مقدار null تعریف شود
        username: userData.username || "",
      });
    }
  }, [userData]);

  const mutation = useMutation({
    mutationFn: async (newData) => {
      const { data, error } = await supabase
        .from("customers")
        .update(newData)
        .eq("customer_id", userId);

      if (error) {
        throw error;
      }
      return data;
    },
    onSuccess: (data) => {
      console.log("Data updated successfully:", data);
      queryClient.invalidateQueries(["userData", userId]);
      setEditMode(false);
    },
    onError: (error) => {
      console.error("Error updating user data:", error.message);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    console.log("User ID:", userId);
    console.log("Form Data:", formData);
    try {
      const result = await mutation.mutateAsync(formData);
      console.log("Mutation result:", result);
      console.log("Data mutation called.");
    } catch (error) {
      console.error("Unexpected error:", error.message);
    }
  };

  if (isUserLoading || isUserDataLoading) {
    return <div>Loading...</div>;
  }

  if (userError || userDataError) {
    return <div>Error: {userError?.message || userDataError?.message}</div>;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-2 md:mx-auto md:max-w-2xl md:flex-row md:flex-wrap md:justify-center md:gap-4 md:space-y-0 md:py-5">
      <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
        <input
          type="text"
          placeholder="نام"
          className="w-full rounded-lg border p-2 text-[#717171]"
          value={
            editMode ? formData.firstname : userData ? userData.firstname : ""
          }
          name="firstname"
          onChange={handleChange}
          readOnly={!editMode}
        />
        <input
          type="text"
          placeholder="نام خانوادگی"
          className="w-full rounded-lg border p-2 text-[#717171]"
          value={
            editMode ? formData.lastname : userData ? userData.lastname : ""
          }
          name="lastname"
          onChange={handleChange}
          readOnly={!editMode}
        />
        <input
          type="text"
          placeholder="آدرس ایمیل"
          className="w-full overflow-hidden text-ellipsis rounded-lg border p-2 text-[#717171]"
          value={editMode ? formData.email : userData ? userData.email : ""}
          name="email"
          onChange={handleChange}
          readOnly={!editMode}
        />
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
        <input
          type="text"
          placeholder="شماره همراه"
          className="w-full rounded-lg border p-2 text-[#717171]"
          value={
            editMode
              ? formData.phonenumber
              : userData
                ? userData.phonenumber
                : ""
          }
          name="phonenumber"
          onChange={handleChange}
          readOnly={!editMode}
        />
        <input
          type="text"
          placeholder="تاریخ تولد"
          className="w-full rounded-lg border p-2 text-[#717171]"
          value={
            editMode ? formData.birthdate : userData ? userData.birthdate : ""
          }
          name="birthdate"
          onChange={handleChange}
          readOnly={!editMode}
        />

        <input
          type="text"
          placeholder="نام کاربری"
          className="w-full rounded-lg border p-2 text-[#717171]"
          value={
            editMode ? formData.username : userData ? userData.username : ""
          }
          name="username"
          onChange={handleChange}
          readOnly={!editMode}
        />
      </div>

      <div className="flex w-full items-center justify-center py-4">
        {editMode ? (
          <div className="flex w-full items-end justify-end gap-3">
            <button
              onClick={() => setEditMode(false)}
              className="flex items-center gap-2 rounded-lg border border-red-800 p-3 text-xs text-red-800"
            >
              انصراف از تغییرات
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 rounded-lg border border-green-800 p-3 text-xs text-green-800"
            >
              <img
                src="/icons/edit-2.svg"
                alt=""
                className="h-3 w-3 fill-red-900 object-cover"
              />
              ذخیره تغییرات
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="flex items-center gap-2 rounded-lg border border-green-primary-500 p-3 text-xs text-green-primary-500"
          >
            <img src="/icons/edit-green.svg" alt="" />
            ویرایش اطلاعات شخصی
          </button>
        )}
      </div>
    </div>
  );
}

export default DashboardProfileItems;
