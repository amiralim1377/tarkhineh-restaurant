import { useForm, useFormContext } from "react-hook-form";

function FranchiseFacilities() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  // handleImageChange.js
  const handleImageChange = (event, setValue) => {
    const files = event.target.files;
    if (files) {
      setValue("propertyImages", files);
    }
  };

  return (
    <div className="mt-8 w-full">
      <h2 className="text-right text-base font-semibold md:text-lg">
        امکانات ملک متقاضی
      </h2>
      <div className="mt-10 flex max-w-md flex-col md:max-w-8xl md:flex-row">
        <div className="flex w-full flex-col items-start">
          <h2 className="text-right text-base font-semibold text-[#717171] md:text-base">
            ملک متقاضی:
          </h2>
          <div className="grid w-full max-w-sm grid-cols-1 gap-3 md:grid-cols-2">
            <div className="flex w-full flex-row items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 accent-green-600"
                {...register("hasLicense")}
              />
              <h4 className="text-sm text-[#717171]">پروانه کسب دارد.</h4>
            </div>
            <div className="flex w-full flex-row items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 accent-green-600"
                {...register("hasKitchen")}
              />
              <h4 className="text-sm text-[#717171]">آشپزخانه دارد.</h4>
            </div>
            <div className="flex w-full flex-row items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 accent-green-600"
                {...register("hasParking")}
              />
              <h4 className="text-sm text-[#717171]">پارکینگ دارد.</h4>
            </div>
            <div className="flex w-full flex-row items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 accent-green-600"
                {...register("hasWarehouse")}
              />
              <h4 className="text-sm text-[#717171]">انبار دارد.</h4>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md md:max-w-2xl">
          <h2 className="mb-3 text-right text-base font-semibold text-[#717171] md:text-base">
            تصاویر ملک
          </h2>
          <div className="flex min-h-64 flex-col items-center justify-center rounded-lg border-2 border-gray-300">
            <div>
              <label htmlFor="file-upload" className="cursor-pointer">
                <img
                  src="/Franchise/folder-add.svg"
                  className="h-8 w-8 md:h-16 md:w-16"
                  alt="Upload Icon"
                />
              </label>
              <input
                type="file"
                id="file-upload"
                accept="image/*"
                multiple
                style={{ display: "none" }}
                {...register("propertyImages")}
                onChange={handleImageChange}
              />
            </div>
            <p className="p-2 text-right text-xs font-semibold text-[#717171] md:text-base">
              تصاویری از ملک را بارگذاری کنید...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FranchiseFacilities;
