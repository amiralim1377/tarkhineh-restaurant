import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import useUserData from "../React Custom Hooks/useUserData/useUserData";
import DatePicker from "react-multi-date-picker";
import { Controller, useForm } from "react-hook-form";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { updateUserInfo } from "../../Services/updateUserInfo";
import moment from "moment-jalaali";
import { Riple } from "react-loading-indicators";
import useProfileImage from "../React Custom Hooks/useProfileImage/useProfileImage";

function DashboardProfileItems() {
  const {
    userId,
    isUserLoading,
    userError,
    userData,
    isUserDataLoading,
    userDataError,
  } = useUserData();
  const {
    isLoading,
    selectedFileName,
    handleUploadProfileImage,
    handleDeleteProfileImage,
    setSelectedFileName,
    setEditMode,
    editMode,
  } = useProfileImage(userId);
  const queryClient = useQueryClient();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: userData?.firstname || "",
      lastname: userData?.lastname || "",
      email: userData?.email || "",
      phonenumber: userData?.phonenumber || "",
      birthdate: userData?.birthdate || "",
      username: userData?.username || "",
    },
  });

  useEffect(() => {
    if (userData) {
      reset({
        name: userData.firstname || "",
        lastname: userData.lastname || "",
        email: userData.email || "",
        phonenumber: userData.phonenumber || "",
        birthdate: userData.birthdate || "",
        username: userData.username || "",
      });
    }
  }, [userData, reset]);

  const mutation = useMutation({
    mutationFn: (newData) => updateUserInfo(newData, userId),
    onSuccess: (data) => {
      console.log("Data updated successfully:", data);
      queryClient.invalidateQueries(["userData", userId]);
      setEditMode(false);
    },
    onError: (error) => {
      console.error("Error updating user data:", error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["userData", userId]);
    },
  });

  const onSubmit = async (data) => {
    const {
      birthdate,
      email,
      name,
      lastname,
      phonenumber,
      username,
      profileImage,
    } = data;
    const formattedBirthdate = birthdate
      ? moment(birthdate, "jYYYY/jMM/jDD").format("YYYY-MM-DD")
      : null;

    let profileImageUrl = null;
    if (profileImage && profileImage.length > 0) {
      const file = profileImage[0];
      profileImageUrl = await handleUploadProfileImage(file);
    }

    const updatedData = {
      firstname: name,
      lastname: lastname,
      email: email,
      phonenumber: phonenumber,
      birthdate: formattedBirthdate,
      username: username,
      image: profileImageUrl,
    };

    try {
      await mutation.mutateAsync(updatedData);
    } catch (error) {
      console.error("Unexpected error:", error.message);
    }
  };

  if (isLoading || isUserLoading || isUserDataLoading) {
    return (
      <div className="flex items-center justify-center">
        <Riple color="#417F56" size="medium" text="" textColor="" />
      </div>
    );
  }

  if (userError || userDataError) {
    return <div>Error: {userError?.message || userDataError?.message}</div>;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-center justify-center space-y-2 md:mx-auto md:max-w-2xl md:flex-row md:flex-wrap md:justify-center md:gap-4 md:space-y-0 md:py-5"
    >
      <div className="flex w-full flex-col items-start justify-between gap-2 md:flex-row">
        <div className="flex w-full flex-col items-start">
          <input
            type="text"
            placeholder="نام"
            defaultValue={userData.firstname || ""}
            className={`w-full rounded-lg border p-2 text-[#717171] focus:outline-none ${
              editMode
                ? errors?.name
                  ? "border-red-500"
                  : "border-green-primary-500"
                : ""
            }`}
            name="firstname"
            readOnly={!editMode}
            {...register("name", {
              required: "این فیلد الزامی است",
              maxLength: {
                value: 10,
                message: "نام نمی‌تواند بیش از ۱۰ کاراکتر باشد",
              },
              pattern: {
                value: /^[آ-ی\s]*$/,
                message: "فقط حروف فارسی مجاز است",
              },
            })}
          />
          {editMode && errors?.name && (
            <span className="text-nowrap py-2 text-xs text-red-600">
              {errors?.name?.message}
            </span>
          )}
        </div>
        <div className="flex w-full flex-col items-start">
          <input
            type="text"
            placeholder="نام خانوادگی"
            defaultValue={userData.lastname || ""}
            className={`w-full rounded-lg border p-2 text-[#717171] focus:outline-none ${
              editMode
                ? errors?.lastname
                  ? "border-red-500"
                  : "border-green-primary-500"
                : ""
            }`}
            name="lastname"
            readOnly={!editMode}
            {...register("lastname", {
              required: "این فیلد الزامی است",
              maxLength: {
                value: 30,
                message: "نام خانوادگی نمی‌تواند بیش از ۳۰ کاراکتر باشد",
              },
              pattern: {
                value: /^[آ-ی\s]*$/,
                message: "فقط حروف فارسی مجاز است",
              },
            })}
          />
          {editMode && errors?.lastname && (
            <span className="text-nowrap py-2 text-xs text-red-600">
              {errors?.lastname?.message}
            </span>
          )}
        </div>
        <div className="flex w-full flex-col items-start">
          <input
            type="text"
            placeholder="آدرس ایمیل"
            defaultValue={userData.email || ""}
            className={`w-full rounded-lg border p-2 text-[#717171] focus:outline-none ${
              editMode
                ? errors?.email
                  ? "border-red-500"
                  : "border-green-primary-500"
                : ""
            }`}
            name="email"
            readOnly={!editMode}
            {...register("email", {
              required: "این فیلد الزامی است",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "لطفا یک آدرس ایمیل معتبر وارد کنید",
              },
            })}
          />
          {editMode && errors?.email && (
            <span className="text-nowrap py-2 text-xs text-red-600">
              {errors?.email?.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-between gap-2 md:flex-row">
        <div className="flex w-full flex-col items-start">
          <input
            type="text"
            placeholder="شماره همراه"
            defaultValue={userData.phonenumber || ""}
            className={`w-full rounded-lg border p-2 text-[#717171] focus:outline-none ${
              editMode
                ? errors?.phonenumber
                  ? "border-red-500"
                  : "border-green-primary-500"
                : ""
            }`}
            name="phonenumber"
            readOnly={!editMode}
            {...register("phonenumber", {
              required: "این فیلد الزامی است",
              pattern: {
                value: /^09\d{9}$/,
                message:
                  "لطفاً یک شماره موبایل معتبر وارد کنید (باید با ۰۹ شروع شود و ۱۱ رقم باشد)",
              },
            })}
          />
          {editMode && errors?.phonenumber && (
            <span className="py-2 text-xs text-red-600">
              {errors.phonenumber.message}
            </span>
          )}
        </div>
        <div className="flex w-full flex-col items-start">
          <Controller
            control={control}
            name="birthdate"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  value={value || userData.birthdate}
                  onChange={(date) =>
                    onChange(date ? date.format("jYYYY/jMM/jDD") : null)
                  }
                  readOnly={!editMode}
                  inputClass={`block p-2 border text-[#717171] rounded-md focus:outline-none ${
                    editMode
                      ? error
                        ? "border-red-500"
                        : "border-green-primary-500"
                      : ""
                  }`}
                  className="green w-full"
                  placeholder="تاریخ تولد"
                  format="jYYYY/jMM/jDD"
                />
                {editMode && error && (
                  <span role="alert" className="p-2 text-xs text-red-700">
                    {error.message}
                  </span>
                )}
              </>
            )}
          />
        </div>
        <div className="flex w-full flex-col items-start">
          <input
            type="text"
            placeholder="نام کاربری"
            defaultValue={userData.username || ""}
            className={`w-full rounded-lg border p-2 text-[#717171] focus:outline-none ${
              editMode
                ? errors?.username
                  ? "border-red-500"
                  : "border-green-primary-500"
                : ""
            }`}
            name="username"
            readOnly={!editMode}
            {...register("username", {
              maxLength: {
                value: 15,
                message: "نام کاربری نمی‌تواند بیش از ۱۵ کاراکتر باشد",
              },
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "فقط حروف انگلیسی و اعداد مجاز است",
              },
            })}
          />
          {editMode && errors?.username && (
            <span className="text-nowrap py-2 text-xs text-red-600">
              {errors.username.message}
            </span>
          )}
        </div>
      </div>

      {!userData.image ? (
        <>
          <div className="flex w-full flex-col items-start justify-between gap-2 md:flex-row">
            <div className="flex w-full items-center gap-2 md:w-1/3">
              <Controller
                control={control}
                name="profileImage"
                render={({ field: { onChange } }) => (
                  <>
                    <input
                      id="profileImageInput"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setSelectedFileName(e.target.files[0].name);
                        }
                        onChange(e.target.files);
                      }}
                      style={{ display: "none" }}
                    />
                    <div
                      onClick={() => {
                        if (editMode) {
                          document.getElementById("profileImageInput").click();
                        }
                      }}
                      className="cursor-pointer"
                    >
                      <img
                        src="/icons/add_a_photo_24dp_417F56_FILL0_wght400_GRAD0_opsz24.svg"
                        alt="Upload Icon"
                        className={`${editMode ? "" : "grayscale"}`}
                      />
                    </div>
                  </>
                )}
              />
              <span className="text-nowrap text-sm text-[#717171]">
                {selectedFileName
                  ? `فایل انتخاب شده: ${selectedFileName}`
                  : "اضافه کردن تصویر پروفایل"}
              </span>
            </div>
            {errors.profileImage && (
              <span className="py-2 text-xs text-red-600">
                {errors.profileImage.message}
              </span>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full flex-col items-start justify-between gap-2 md:flex-row">
            <div className="flex w-full items-center gap-2 md:w-1/3">
              <Controller
                control={control}
                name="profileImage"
                render={({ field: { onChange } }) => (
                  <>
                    <input
                      id="profileImageInput"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        e.preventDefault();
                        onChange(e.target.files);
                      }}
                      style={{ display: "none" }}
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (editMode) {
                          handleDeleteProfileImage(userData.image, e);
                        }
                      }}
                      className="delete-icon"
                    >
                      <img
                        src="/icons/delete_24dp_BB271A_FILL0_wght400_GRAD0_opsz24.svg"
                        alt="Delete Icon"
                        className={`${editMode ? "" : "grayscale"}`}
                      />
                    </button>
                  </>
                )}
              />
              <span className="text-nowrap text-sm text-[#717171]">
                حذف کردن تصویر پروفایل
              </span>
            </div>
            {errors.profileImage && (
              <span className="py-2 text-xs text-red-600">
                {errors.profileImage.message}
              </span>
            )}
          </div>
        </>
      )}
      {errors.profileImage && (
        <span className="py-2 text-xs text-red-600">
          {errors.profileImage.message}
        </span>
      )}

      <div className="flex w-full items-center justify-center py-4 transition-all duration-500 ease-in-out">
        {editMode ? (
          <div className="flex w-full items-end justify-end gap-3 transition-all duration-500 ease-in-out">
            <button
              onClick={() => {
                setEditMode(false);
                setSelectedFileName("");
              }}
              className="flex items-center gap-2 rounded-lg border border-red-800 p-3 text-xs text-red-800 transition-all duration-500 ease-in-out"
            >
              انصراف از تغییرات
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg border border-green-800 p-3 text-xs text-green-800 transition-all duration-500 ease-in-out"
            >
              <img
                src="/icons/edit-2.svg"
                alt=""
                className="h-3 w-3 fill-red-900 object-cover transition-all duration-500 ease-in-out"
              />
              ذخیره تغییرات
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="flex items-center gap-2 rounded-lg border border-green-primary-500 p-3 text-xs text-green-primary-500 transition-all duration-500 ease-in-out"
          >
            <img
              src="/icons/edit-green.svg"
              alt=""
              className="transition-all duration-500 ease-in-out"
            />
            ویرایش اطلاعات شخصی
          </button>
        )}
      </div>
    </form>
  );
}

export default DashboardProfileItems;
