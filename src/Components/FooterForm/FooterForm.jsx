import React from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast"; // برای نمایش پیام‌ها

function FooterForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const notifySuccess = () =>
    toast.success("پیغام شما با موفقیت دریافت شد", {
      position: "top-left",
      style: {
        background: "#417F56",
        color: "white",
      },
    });

  const onSubmit = (data) => {
    notifySuccess();
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex-col items-center space-y-4"
    >
      <h3 className="text-xl font-bold text-white">پیام به ترخینه </h3>
      <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between">
        <div className="flex w-full flex-col gap-y-2">
          <input
            type="text"
            {...register("name", { required: "نام و نام خانوادگی الزامی است" })}
            className="w-full max-w-72 rounded-md border border-gray-400 bg-transparent px-4 py-2 text-white caret-white focus:border-white"
            placeholder="نام و نام خانوادگی"
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}

          <input
            type="text"
            {...register("phone", {
              required: "شماره تماس الزامی است",
              pattern: {
                value: /^09\d{9}$/,
                message: "شماره تماس باید 11 رقم باشد و با 09 شروع شود",
              },
            })}
            className="w-full max-w-72 rounded-md border border-gray-400 bg-transparent px-4 py-2 text-white caret-white"
            placeholder="شماره تماس"
          />
          {errors.phone && (
            <span className="text-xs text-red-500">{errors.phone.message}</span>
          )}

          <input
            type="text"
            {...register("email")}
            className="w-full max-w-72 rounded-md border border-gray-400 bg-transparent px-4 py-2 text-white caret-white"
            placeholder="آدرس ایمیل (اختیاری)"
          />
        </div>
        <div className="w-full max-w-72">
          <textarea
            {...register("message", {
              required: "لطفا پیام خود را تایپ کنید",
              pattern: {
                value: /^[\u0600-\u06FF\s]+$/,
                message: "لطفا پیام خود را به فارسی تایپ کنید",
              },
            })}
            className="h-full w-full max-w-72 rounded-md border border-gray-400 bg-transparent px-4 py-2 text-white caret-white"
            placeholder="پیام شما"
          ></textarea>
          {errors.message && (
            <span className="text-xs text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex w-full items-start justify-end">
        <button
          type="submit"
          className="w-full max-w-44 rounded-md border border-gray-400 bg-none px-4 py-2 text-white"
        >
          ارسال پیام
        </button>
      </div>
    </form>
  );
}

export default FooterForm;
