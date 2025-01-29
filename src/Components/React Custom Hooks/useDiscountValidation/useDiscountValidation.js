import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import "./custom-toast-error.css";
import { applyDiscount } from "../../../Slice/cartSlice/cartSlice";

const discountCodes = [
  {
    code: "PUBLIC10",
    discountType: "percentage",
    discountAmount: 10.0,
    expirationDate: "2025-12-31",
  },
];

const validateDiscountCode = (code, totalCost) => {
  const discountCode = discountCodes.find((dc) => dc.code === code);

  if (!discountCode) {
    return { valid: false, message: "کد تخفیف معتبر نیست" };
  }

  const currentDate = new Date();
  const expirationDate = new Date(discountCode.expirationDate);

  if (expirationDate < currentDate) {
    return { valid: false, message: "کد تخفیف منقضی شده است" };
  }

  let discountAmount = 0;
  if (discountCode.discountType === "percentage") {
    discountAmount = (discountCode.discountAmount / 100) * totalCost;
  }

  return {
    valid: true,
    discount: discountAmount,
    message: "کد تخفیف با موفقیت اعمال شد",
  };
};

const useDiscountValidation = (totalCost) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const validateAndApplyDiscount = (code) => {
    if (isDiscountApplied) {
      return { valid: false, message: "تخفیف قبلاً اعمال شده است" };
    }

    const result = validateDiscountCode(code, totalCost);
    if (result.valid) {
      dispatch(applyDiscount({ code, amount: result.discount }));
      setError("");
      setIsDiscountApplied(true);
      toast.success(result.message, {
        className: "custom-toast-error",
        position: "top-left",
        duration: 3000,
        style: {
          background: "#4caf50",
          color: "white",
          minWidth: "300px",
          padding: "18px",
          fontSize: "14px",
        },
      });
    } else {
      setError(result.message);
      toast.error(result.message, {
        className: "custom-toast-error",
        position: "top-left",
        duration: 3000,
        style: {
          background: "#f44336",
          color: "white",
          minWidth: "300px",
          padding: "18px",
          fontSize: "14px",
        },
      });
    }
    return result;
  };

  return {
    error,
    validateAndApplyDiscount,
  };
};

export default useDiscountValidation;
