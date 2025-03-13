import { useFormContext } from "react-hook-form";

function FranchiseSpecifications() {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className="mt-8 w-full">
      <h2 className="text-right text-base font-semibold md:text-lg">
        مشخصات ملک متقاضی
      </h2>
      <div className="mt-3 flex w-full max-w-md flex-col items-start justify-between gap-3 md:max-w-8xl md:flex-row">
        <div className="w-full">
          <input
            type="text"
            className={`w-full max-w-md rounded-md border ${errors.typeOfOwnership ? "border-red-500" : "border-gray-300"} p-2`}
            placeholder="نوع مالکیت"
            {...register("typeOfOwnership", {
              required: "نوع مالکیت  الزامی است.",
              pattern: {
                value: /^[\u0600-\u06FF\s]+$/,
                message: "نوع مالکیت باید فارسی تایپ شود.",
              },
            })}
          />
          {errors.typeOfOwnership && (
            <span className="text-xs text-red-500">
              {errors.typeOfOwnership.message}
            </span>
          )}
        </div>
        <div className="w-full">
          <input
            type="text"
            className={`w-full max-w-md rounded-md border ${errors.propertyArea ? "border-red-500" : "border-gray-300"} p-2`}
            placeholder="مساحت ملک (متر مربع)"
            {...register("propertyArea", {
              required: "مساحت ملک الزامی است.",
              valueAsNumber: true,
              pattern: {
                value: /^\d+$/,
                message: "مساحت ملک باید عدد باشد.",
              },
            })}
          />
          {errors.propertyArea && (
            <span className="text-xs text-red-500">
              {errors.propertyArea.message}
            </span>
          )}
        </div>
        <div className="w-full">
          <input
            type="text"
            className={`w-full max-w-md rounded-md border ${errors.buildingAge ? "border-red-500" : "border-gray-300"} p-2`}
            placeholder="سن بنا"
            {...register("buildingAge", {
              required: "سن بنا الزامی است .",
              valueAsNumber: true,
              pattern: {
                value: /^\d+$/,
                message: "سن بنا باید عدد باشد.",
              },
            })}
          />
          {errors.buildingAge && (
            <span className="text-xs text-red-500">
              {errors.buildingAge.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default FranchiseSpecifications;
