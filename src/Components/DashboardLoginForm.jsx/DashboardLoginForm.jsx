import { useState } from "react";
import { useForm } from "react-hook-form";
import supabase from "../../Services/supabase";
import { useNavigate } from "react-router-dom";
import useModal from "../React Custom Hooks/useModal/useModal";
import { useDispatch } from "react-redux";
import { setEmail } from "../../Slice/userSlice/userSlice";

function DashboardLoginForm({ setLoginFalse }) {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { closeModalHandler } = useModal();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMessage(error.message); // نگهداری پیام خطا در state
      setSuccessMessage(null); // پاک کردن پیام موفقیت در صورت خطا
      return;
    }

    if (data) {
      setSuccessMessage("لاگین با موفقیت انجام شد"); // نگهداری پیام موفقیت در state
      dispatch(setEmail(data.user));
      setErrorMessage(null); // پاک کردن پیام خطا در صورت موفقیت‌آمیز بودن
      navigate("/dashboard");
      closeModalHandler();
      return null;
    }
  };

  return (
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
            message: "ایمیل نامعتبر می‌باشد", // Invalid email address
          },
        })}
      />
      {errors.email && (
        <p role="alert" className="text-xs text-red-700">
          {errors?.email.message}
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
          {errors?.password.message}
        </p>
      )}
      {successMessage && ( // نمایش پیام موفقیت
        <p role="alert" className="text-xs text-green-700">
          {successMessage}
        </p>
      )}
      {errorMessage && ( // نمایش پیام خطا
        <p role="alert" className="text-xs text-red-700">
          {errorMessage}
        </p>
      )}
      <div className="flex w-full flex-row items-center justify-between">
        <span
          onClick={() => setLoginFalse(false)}
          className="text-base hover:text-gray-700"
        >
          ثبت نام
        </span>
        <button
          type="submit"
          className="rounded-md bg-green-primary-500 px-6 py-3 text-white hover:opacity-80"
        >
          ورود
        </button>
      </div>
    </form>
  );
}

export default DashboardLoginForm;
