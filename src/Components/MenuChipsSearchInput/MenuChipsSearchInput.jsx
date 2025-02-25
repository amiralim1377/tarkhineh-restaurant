import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../Slice/searchSlice/searchSlice";

// تابعی که چک می‌کنه آیا رشته فقط شامل حروف فارسی و بدون عدد هست
const isFarsi = (value) =>
  /^[\u0600-\u06FF\s]+$/.test(value) && !/\d/.test(value);

function MenuChipsSearchInput() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setSearchQuery(data.query));
  };

  const handleKeyUp = (value) => {
    if (value === "") {
      clearErrors("query");
      dispatch(setSearchQuery(""));
    } else if (isFarsi(value)) {
      clearErrors("query");
      dispatch(setSearchQuery(value));
    } else {
      setError("query", {
        type: "custom",
        message: "لطفا فقط حروف فارسی وارد کنید و عدد وارد نکنید.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full px-2 md:max-w-sm"
    >
      <div className="relative">
        <input
          type="text"
          className={`w-full rounded-md border p-2 pl-14 focus:outline-none focus:ring-2 ${
            errors.query ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="جستجو"
          {...register("query", {
            required: true,
            validate: isFarsi,
          })}
          onKeyUp={(e) => handleKeyUp(e.target.value)}
        />
        <img
          src="/icons/search-normal.svg"
          alt="Search Icon"
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400"
        />
      </div>
      {errors.query && (
        <span className="text-red-500">
          لطفا فقط حروف فارسی وارد کنید و عدد وارد نکنید.
        </span>
      )}
    </form>
  );
}

export default MenuChipsSearchInput;
