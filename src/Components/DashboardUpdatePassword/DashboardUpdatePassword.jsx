import { useForm } from "react-hook-form";
import supabase from "../../Services/supabase";
import { useEffect, useState } from "react";
import useModal from "../React Custom Hooks/useModal/useModal";
import { Dialog } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

function DashboardUpdatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { isOpen, modalType, openModalHandler, closeModalHandler } = useModal();

  useEffect(() => {
    openModalHandler("UpdatePassword"); // Open modal when component mounts
  }, [openModalHandler]);

  const password = watch("password");

  const onSubmit = async (formData) => {
    const { data, error } = await supabase.auth.updateUser({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMessage(error.message);
      setSuccessMessage(null);
    } else {
      setSuccessMessage("اطلاعات با موفقیت به‌روزرسانی شد.");
      setErrorMessage(null);
      setTimeout(() => {
        closeModalHandler();
        navigate("/");
      }, 4000);
    }
  };

  return (
    <Dialog
      open={isOpen && modalType === "UpdatePassword"}
      onClose={closeModalHandler}
      className="relative z-50 w-full"
    >
      <div className="fixed inset-0 w-full bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex w-full flex-col items-center justify-center p-4">
        <Dialog.Panel className="flex w-full max-w-xs flex-col items-center justify-between rounded-lg bg-white p-4 md:max-w-md">
          <Dialog.Title className="w-full text-center text-lg font-bold text-gray-900">
            به‌روزرسانی رمز عبور
          </Dialog.Title>
          <Dialog.Description className="w-full cursor-pointer text-sm text-gray-500">
            لطفاً ایمیل و رمز عبور جدید خود را وارد کنید تا اطلاعات به‌روزرسانی
            شود.
          </Dialog.Description>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col items-start space-y-3 py-2"
          >
            <input
              type="text"
              placeholder="ایمیل"
              autoComplete="current-password"
              className="w-full rounded-lg border-2 border-gray-300 p-2"
              {...register("email", {
                required: "ایمیل معتبر الزامی است", // Valid email is required
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "آدرس ایمیل نامعتبر است", // Invalid email address
                },
              })}
            />
            {errors.email && (
              <p role="alert" className="text-xs text-red-700">
                {errors.email.message}
              </p>
            )}
            <div className="relative flex w-full flex-row items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="رمز عبور"
                autoComplete="current-password"
                className="relative w-full rounded-lg border-2 border-gray-300 p-2 font-bold placeholder:font-medium"
                {...register("password", {
                  required: "رمز عبور الزامی است", // Password is required
                })}
              />
              {showPassword ? (
                <img
                  src="/icons/visibility_24dp_417F56_FILL0_wght400_GRAD0_opsz24.svg"
                  alt=""
                  className="absolute left-3 cursor-pointer"
                  onClick={() => setShowPassword((show) => !show)}
                />
              ) : (
                <img
                  src="/icons/visibility_off_24dp_417F56_FILL0_wght400_GRAD0_opsz24.svg"
                  alt=""
                  className="absolute left-3 cursor-pointer"
                  onClick={() => setShowPassword((show) => !show)}
                />
              )}
            </div>
            {errors.password && (
              <p role="alert" className="text-xs text-red-700">
                {errors.password.message}
              </p>
            )}
            <input
              type="password"
              placeholder="تکرار رمز عبور"
              className="w-full rounded-lg border-2 border-gray-300 p-2 font-bold placeholder:font-medium"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password || "رمزهای عبور مطابقت ندارند", // Passwords do not match
              })}
            />
            {errors.confirmPassword && (
              <p role="alert" className="text-xs text-red-700">
                {errors?.confirmPassword.message}
              </p>
            )}
            {successMessage && (
              <p role="alert" className="text-xs text-green-700">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p role="alert" className="text-xs text-red-700">
                {errorMessage}
              </p>
            )}
            <div className="flex w-full items-center justify-end gap-3">
              <button
                type="submit"
                className="rounded-md bg-green-primary-500 px-6 py-3 text-white hover:opacity-80"
              >
                به‌روزرسانی اطلاعات
              </button>
            </div>
          </form>
          <Dialog.Description />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default DashboardUpdatePassword;
