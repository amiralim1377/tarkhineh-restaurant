import { useState } from "react";
import { useForm } from "react-hook-form";
import supabase from "../../Services/supabase";
import DashboardSignupFormMessage from "../DashboardSignupFormMessage/DashboardSignupFormMessage";

function DashboardSignupForm({ setLoginFalse }) {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isRegisteredSuccessfull, setisRegisteredSuccessfull] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const onSubmit = async (formData) => {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          phonenumber: formData.phonenumber,
          fullname: formData.fullname,
          avatar: formData.avatar,
          bio: formData.bio,
        },
      },
    });
    if (error) {
      setErrorMessage(error.message);
      setSuccessMessage(null);
    } else {
      setErrorMessage(null);
      setSuccessMessage(
        "ثبت نام موفقیت آمیز بود. لطفاً ایمیل خود را چک کنید و آن را تأیید کنید.",
      );
      setisRegisteredSuccessfull(true);
    }
  };

  return (
    <>
      {!isRegisteredSuccessfull ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-start space-y-3 py-2"
        >
          <input
            type="text"
            placeholder="ایمیل"
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
          <input
            type="text"
            placeholder="شماره تماس برای ثبت سفارش"
            className="w-full rounded-lg border-2 border-gray-300 p-2"
            {...register("phonenumber", {
              required: "ثبت شماره همراه برای ثبت سفارش الزامی است", // Phone number is required for order registration
              pattern: {
                value: /^09\d{9}$/,
                message: "شماره موبایل باید 11 رقم باشد و با 09 شروع شود", // Phone number must be 11 digits and start with 09
              },
            })}
          />
          {errors.phonenumber && (
            <p role="alert" className="text-xs text-red-700">
              {errors?.phonenumber.message}
            </p>
          )}
          <div className="relative flex w-full flex-row items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="رمز عبور"
              className="relative w-full rounded-lg border-2 border-gray-300 p-2 font-bold placeholder:font-medium"
              {...register("password", {
                required: "رمز عبور الزامی است", // Password is required
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "رمز عبور باید حداقل ۸ کاراکتر شامل یک حرف بزرگ، یک حرف کوچک و یک عدد باشد و تنها حروف انگلیسی مجاز است", // Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number, and only English letters are allowed
                },
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
          <div className="flex w-full flex-row items-center justify-between">
            <span
              onClick={() => setLoginFalse(true)}
              className="text-base hover:text-gray-700"
            >
              ورود به سایت
            </span>
            <button
              type="submit"
              className="rounded-md bg-green-primary-500 px-6 py-3 text-white"
            >
              ثبت نام
            </button>
          </div>
        </form>
      ) : (
        <>
          <DashboardSignupFormMessage
            successMessage={successMessage}
            errorMessage={errorMessage}
            isRegisteredSuccessfull={isRegisteredSuccessfull}
            setLoginFalse={setLoginFalse}
          />
        </>
      )}
    </>
  );
}

export default DashboardSignupForm;
