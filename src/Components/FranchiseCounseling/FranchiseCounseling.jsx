import { Controller, useForm } from "react-hook-form";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import toast from "react-hot-toast";

function FranchiseCounseling() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const notifySuccess = () =>
    toast.success("درخواست مشاوره شما با موفقیت ثبت گردید", {
      position: "top-left",
      style: {
        background: "#417F56",
        color: "white",
      },
    });

  const onSubmit = (data) => {
    if (data.date && data.date.format) {
      data.date = data.date.format("YYYY/MM/DD");
    }
    notifySuccess();

    reset();
  };

  return (
    <div className="mt-8 w-full">
      <h2 className="text-center text-base font-semibold md:text-2xl">
        دریافت مشاوره
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4"
      >
        <div className="mt-3 flex w-full max-w-md flex-col items-start justify-between gap-3 md:max-w-8xl md:flex-row">
          <div className="flex w-full max-w-md flex-col">
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2"
              placeholder="نام و نام‌خانوادگی"
              {...register("name", {
                required: "وارد کردن نام و نام خانوادگی الزامی است",
              })}
            />
            {errors.name && (
              <p role="alert" className="p-2 text-xs text-red-700">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="flex w-full max-w-md flex-col">
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2"
              placeholder="شماره تماس"
              {...register("number", {
                required: "وارد کردن شماره همراه الزامی است",
              })}
            />
            {errors.number && (
              <p role="alert" className="p-2 text-xs text-red-700">
                {errors.number.message}
              </p>
            )}
          </div>
          <div className="flex w-full max-w-md flex-col">
            <Controller
              control={control}
              name="date"
              rules={{ required: "وارد کردن تاریخ الزامی است" }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <DatePicker
                    calendar={persian}
                    locale={persian_fa}
                    value={value || ""}
                    onChange={onChange}
                    inputClass="w-full p-2 border rounded-md"
                    className="green"
                    placeholder="تاریخ ایده‌آل"
                  />
                  {error && (
                    <span role="alert" className="p-2 text-xs text-red-700">
                      {error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className="flex w-full max-w-40 items-center justify-center">
          <button className="w-full rounded-md bg-green-primary-500 p-2 text-white">
            درخواست مشاوره
          </button>
        </div>
      </form>
    </div>
  );
}

export default FranchiseCounseling;
