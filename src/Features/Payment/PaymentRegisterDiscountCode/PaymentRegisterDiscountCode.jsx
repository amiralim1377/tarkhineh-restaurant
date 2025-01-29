import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { applyDiscount } from "../../../Slice/cartSlice/cartSlice";
import useDiscountValidation from "../../../Components/React Custom Hooks/useDiscountValidation/useDiscountValidation";
import useCartCalculations from "../../../Components/React Custom Hooks/useCartCalculations/useCartCalculations";

function PaymentRegisterDiscountCode() {
  const { register, handleSubmit, setError, clearErrors, reset } = useForm();
  const dispatch = useDispatch();

  const discountCode = useSelector((state) => state.cart?.discountCode);

  const { totalCost } = useCartCalculations();
  const { validateAndApplyDiscount: validateDiscount } =
    useDiscountValidation(totalCost);

  const onSubmit = (data) => {
    const result = validateDiscount(data.code);
    if (result.valid) {
      dispatch(applyDiscount({ code: data.code, amount: result.discount }));
      clearErrors("code");
      reset();
    } else {
      setError("code", {
        type: "manual",
        message: result.message,
      });
    }
  };

  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-4 text-white">
      <div className="divide-y md:flex md:w-full md:flex-row md:divide-none">
        <div className="flex w-full items-center py-2 md:max-w-44">
          <div>
            <img
              src="/icons/discount-shape.svg"
              className="md:w-6"
              alt="Discount Icon"
            />
          </div>
          <h4 className="text-sm text-[#353535] md:text-base md:font-bold">
            ثبت کد تخفیف
          </h4>
        </div>
        <form
          className="flex w-full flex-row gap-3 py-2 md:max-w-96 md:flex-row md:justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="کد تخفیف"
            className="w-full rounded-md border border-gray-300 p-1 text-gray-800"
            {...register("code", { required: "کد تخفیف الزامی است" })}
            disabled={discountCode}
          />
          {!discountCode ? (
            <button
              type="submit"
              className="text-nowrap rounded-md bg-[#CBCBCB] p-1 md:px-6 md:py-2"
            >
              ثبت کد
            </button>
          ) : (
            <button
              type="submit"
              className="text-nowrap rounded-md bg-green-primary-500 p-1 md:px-6 md:py-2"
            >
              کد ثبت شد
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default PaymentRegisterDiscountCode;
