import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../Slice/cartSlice/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import "./custom-toast.css"; // ایمپورت فایل CSS

function OrderDescription() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const notifySuccess = () =>
    toast.success("🦄 توضیحات سفارش با موفقیت ثبت شد!", {
      className: "custom-toast", // اضافه کردن کلاس سفارشی
      position: "top-left",
      duration: 5000,
      style: {
        background: "#4caf50",
        color: "white",
      },
    });

  const notifyError = () =>
    toast.error("لطفاً توضیحات سفارش را وارد کنید!", {
      className: "custom-toast-error", // اضافه کردن کلاس سفارشی برای خطا
      position: "top-left",
      duration: 5000,
      style: {
        background: "#f44336",
        color: "white",
      },
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      notifyError();
      return;
    }
    try {
      const result = await dispatch(addCommentThunk(comment));
      if (result === "Success") {
        notifySuccess();
        setComment("");
      }
    } catch (error) {
      console.error("Dispatch failed", error);
    }
  };

  return (
    <div className="w-full rounded-md border border-gray-300 p-4">
      <div className="">
        <div className="flex items-start gap-2">
          <img src="/icons/document-normal.svg" alt="" />
          <form action="" className="w-full" onSubmit={handleSubmit}>
            <textarea
              className="min-h-36 w-full placeholder:text-xs md:px-1 md:placeholder:text-base"
              placeholder="توضیحات سفارش(اختیاری)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="flex justify-end md:flex">
              <button
                type="submit"
                className="rounded-lg border border-gray-300 bg-green-primary-500 px-5 py-2 text-center text-white hover:opacity-80"
              >
                ثبت توضیحات
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default OrderDescription;
