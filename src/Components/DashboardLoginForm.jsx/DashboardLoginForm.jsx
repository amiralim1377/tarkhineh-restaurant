import { useState } from "react";
import { useForm } from "react-hook-form";
import supabase from "../../Services/supabase";
import { useNavigate } from "react-router-dom";
import useModal from "../React Custom Hooks/useModal/useModal";
import { useDispatch } from "react-redux";
import { setEmail } from "../../Slice/userSlice/userSlice";
import DashboardForgottenPasswordEmail from "../DashboardForgottenPasswordEmail/DashboardForgottenPasswordEmail";

function DashboardLoginForm({ setLoginFalse }) {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isShowForgottenPassword, setIsShowForgottenPassword] = useState(false);
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
      setErrorMessage(error.message); // Store error message in state
      setSuccessMessage(null); // Clear success message on error
      return;
    }

    if (data) {
      setSuccessMessage("Login successful"); // Store success message in state
      dispatch(setEmail(data.user));
      setErrorMessage(null); // Clear error message on successful login
      navigate("/dashboard");
      closeModalHandler();
      return null;
    }
  };

  return (
    <>
      {isShowForgottenPassword ? (
        <DashboardForgottenPasswordEmail
          setIsShowForgottenPassword={setIsShowForgottenPassword}
        />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-start space-y-3 py-2"
        >
          <input
            type="text"
            placeholder="Email"
            autoComplete="current-password"
            className="w-full rounded-lg border-2 border-gray-300 p-2"
            {...register("email", {
              required: "Valid email is required", // Valid email is required
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address", // Invalid email address
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
              placeholder="Password"
              autoComplete="current-password"
              className="relative w-full rounded-lg border-2 border-gray-300 p-2 font-bold placeholder:font-medium"
              {...register("password", {
                required: "Password is required", // Password is required
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
          {successMessage && ( // Display success message
            <p role="alert" className="text-xs text-green-700">
              {successMessage}
            </p>
          )}
          {errorMessage && ( // Display error message
            <p role="alert" className="text-xs text-red-700">
              {errorMessage}
            </p>
          )}
          <div className="flex w-full flex-row items-center justify-between">
            <a
              onClick={() => setLoginFalse(false)}
              className="text-base hover:text-gray-700"
            >
              ثبت نام
            </a>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsShowForgottenPassword((show) => !show)}
                className="rounded-md border border-green-primary-500 bg-white px-6 py-3 text-xs text-green-primary-500 hover:opacity-80"
              >
                فراموشی رمز عبور
              </button>
              <button
                type="submit"
                className="rounded-md bg-green-primary-500 px-6 py-3 text-white hover:opacity-80"
              >
                ورود
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default DashboardLoginForm;
