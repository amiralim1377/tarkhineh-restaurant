import { useFormContext } from "react-hook-form";
import FranchiseMapContainer from "../FranchiseMapContainer/FranchiseMapContainer";

function FranchiseRequest() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mt-8 w-full">
      <h2 className="text-center text-base font-semibold md:text-2xl">
        فرم درخواست نمایندگی
      </h2>
      <div className="flex flex-col items-start">
        <h3 className="text-right text-base font-semibold md:text-lg">
          مشخصات فردی متقاضی
        </h3>
        <div className="mt-3 flex w-full max-w-md flex-col items-start justify-between gap-3 md:max-w-8xl md:flex-row">
          <div className="w-full">
            <input
              type="text"
              className={`w-full max-w-md rounded-md border border-gray-300 p-2 ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
              placeholder="نام و نام خانوادگی"
              {...register("fullName", {
                required: "وارد کردن نام و نام خانوادگی الزامی است",
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/, // فقط حروف فارسی و فاصله‌ها
                  message: "نام و نام خانوادگی باید فقط شامل حروف فارسی باشد",
                },
              })}
            />
            {errors.fullName && (
              <span className="text-xs text-red-500">
                {errors.fullName.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <input
              type="text"
              className={`w-full max-w-md rounded-md border border-gray-300 p-2 ${errors.nationalCode ? "border-red-500" : "border-gray-300"}`}
              placeholder="کد ملی"
              {...register("nationalCode", {
                required: "وارد کردن کد ملی الزامی است",
                pattern: {
                  value: /^[0-9]{10}$/, // ده رقم عددی
                  message: "کد ملی باید ۱۰ رقمی و فقط شامل عدد باشد",
                },
              })}
            />
            {errors.nationalCode && (
              <span className="text-xs text-red-500">
                {errors.nationalCode.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <input
              type="text"
              className={`nationalCode w-full max-w-md rounded-md border border-gray-300 p-2 ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}`}
              placeholder="شماره تماس"
              {...register("phoneNumber", {
                required: "وارد کردن شماره تماس الزامی است",
                pattern: {
                  value: /^09[0-9]{9}$/, // 11 رقم عددی که با 09 شروع می‌شود
                  message: "شماره تماس باید ۱۱ رقمی و با ۰۹ شروع شود",
                },
              })}
            />
            {errors.phoneNumber && (
              <span className="text-xs text-red-500">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <div>
        <h3 className="mt-8 text-right text-base font-semibold md:text-lg">
          آدرس ملک متقاضی
        </h3>
        <div className="mt-3 flex w-full max-w-md flex-col items-start justify-between gap-3 md:max-w-8xl md:flex-row">
          <div className="flex w-full max-w-[943px] flex-col justify-between gap-4">
            <div className="flex w-full flex-col justify-between gap-2 md:flex-row">
              <div className="w-full">
                <input
                  type="text"
                  className={`w-full max-w-md rounded-md border border-gray-300 p-2 ${errors.province ? "border-red-500" : "border-gray-300"}`}
                  placeholder="استان"
                  {...register("province", {
                    required: "وارد کردن استان الزامی است",
                    pattern: {
                      value: /^[\u0600-\u06FF\s]+$/, // فقط حروف فارسی و فاصله‌ها
                      message: "استان باید فقط شامل حروف فارسی باشد",
                    },
                  })}
                />
                {errors.province && (
                  <span className="text-xs text-red-500">
                    {errors.province.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className={`w-full max-w-md rounded-md border border-gray-300 p-2 ${errors.city ? "border-red-500" : "border-gray-300"}`}
                  placeholder="شهر"
                  {...register("city", {
                    required: "وارد کردن شهر الزامی است",
                    pattern: {
                      value: /^[\u0600-\u06FF\s]+$/, // فقط حروف فارسی و فاصله‌ها
                      message: "شهر باید فقط شامل حروف فارسی باشد",
                    },
                  })}
                />
                {errors.city && (
                  <span className="text-xs text-red-500">
                    {errors.city.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex w-full flex-col justify-between gap-2 md:flex-row">
              <div className="w-full">
                <input
                  type="text"
                  className={`w-full max-w-md rounded-md border border-gray-300 p-2 ${errors.area ? "border-red-500" : "border-gray-300"}`}
                  placeholder="منطقه"
                  {...register("area", {
                    required: "وارد کردن منطقه الزامی است",
                    pattern: {
                      value: /^[0-9]+$/, // فقط اعداد
                      message: "منطقه باید فقط شامل اعداد باشد",
                    },
                  })}
                />
                {errors.area && (
                  <span className="text-xs text-red-500">
                    {errors.area.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className={`w-full max-w-md rounded-md border border-gray-300 p-2 ${errors.address ? "border-red-500" : "border-gray-300"}`}
                  placeholder="آدرس دقیق"
                  {...register("address", {
                    required: "وارد کردن آدرس دقیق الزامی است",
                    pattern: {
                      value: /^[\u0600-\u06FF\s]+$/, // فقط حروف فارسی و فاصله‌ها
                      message: "آدرس باید فقط شامل حروف فارسی باشد",
                    },
                  })}
                />
                {errors.address && (
                  <span className="text-xs text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <FranchiseMapContainer />
        </div>
      </div>
    </div>
  );
}

export default FranchiseRequest;
