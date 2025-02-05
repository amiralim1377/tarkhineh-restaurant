import { useForm } from "react-hook-form";
import supabase from "../../Services/supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useModal from "../React Custom Hooks/useModal/useModal";

function DashboardForgottenPasswordEmail({ setIsShowForgottenPassword }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { closeModalHandler } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      formData.email,
    );

    if (error) {
      setErrorMessage(error.message);
      setSuccessMessage(null);
    } else {
      setSuccessMessage(
        "ایمیل بازیابی رمز عبور با موفقیت ارسال شد. لطفاً صندوق پست الکترونیکی خود را بررسی کنید.",
      );
      setErrorMessage(null);
    }
  };

  return (
    <>
      {!successMessage ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-start space-y-3 py-2"
        >
          <span className="text-xs">
            اگر رمز عبور خود را فراموش کرده‌اید، لطفاً ایمیل خود را وارد کنید.
            لینک بازیابی رمز عبور برای شما ارسال می‌شود.
          </span>
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

          <div className="flex w-full flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setIsShowForgottenPassword((show) => !show)}
              className="rounded-md bg-green-primary-500 px-6 py-3 text-xs text-white hover:opacity-80"
            >
              بازگشت
            </button>
            <button className="rounded-md bg-green-primary-500 px-6 py-3 text-xs text-white hover:opacity-80">
              فراموشی رمز عبور
            </button>
          </div>
        </form>
      ) : (
        <>
          {errorMessage && (
            <p role="alert" className="text-xs text-red-700">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p role="alert" className="text-xs text-green-700">
              {successMessage}
            </p>
          )}
          <div className="flex justify-end">
            <button
              onClick={closeModalHandler}
              className="rounded-md bg-green-primary-500 px-6 py-3 text-xs text-white hover:opacity-80"
            >
              بستن
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default DashboardForgottenPasswordEmail;
