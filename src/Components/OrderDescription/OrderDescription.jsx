import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../Slice/cartSlice/cartSlice";
import toast from "react-hot-toast";

function OrderDescription() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const notifyPromise = (promise) =>
    toast.promise(
      promise,
      {
        loading: "در حال اضافه کردن یادداشت...",
        success: <b>یادداشت با موفقیت اضافه شد!</b>,
        error: <b>خطا در اضافه کردن یادداشت.</b>,
      },
      {
        position: "top-left",
        style: {
          background: "#4caf50",
          color: "white",
        },
      },
    );

  const notifyError = () =>
    toast.error("لطفاً توضیحات سفارش را وارد کنید!", {
      position: "top-left",
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
    const addCommentPromise = dispatch(addCommentThunk(comment));
    notifyPromise(addCommentPromise);
    try {
      const result = await addCommentPromise;
      if (result === "Success") {
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
              className="min-h-16 w-full placeholder:text-xs md:min-h-36 md:px-1 md:placeholder:text-base"
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
    </div>
  );
}

export default OrderDescription;
