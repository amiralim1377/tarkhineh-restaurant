import { useNavigate } from "react-router-dom";

function SuccessfulPayment() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="bg-Celebration flex w-full items-center justify-center">
        <div className="flex flex-col items-center space-y-3 px-3">
          <img
            src="/public/icons/Vector.svg"
            className="h-28 w-28 lg:h-64 lg:w-64"
            alt=""
          />
          <h2 className="text-base font-bold text-green-primary-500 md:text-4xl">
            پرداخت شما با موفقیت انجام شد!{" "}
          </h2>
          <h5 className="text-xs font-bold text-green-primary-500 md:text-2xl">
            کد رهگیری سفارش شما: ۲۱۵۴۹۰۱۹
          </h5>
          <div className="flex w-full flex-row items-center justify-between gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex-1 rounded-md border border-green-primary-500 p-2 text-xs text-green-primary-500"
            >
              صفحه اصلی
            </button>
            <button className="flex-1 rounded-md bg-green-primary-500 p-2 text-xs text-white">
              پیگیری سفارش
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessfulPayment;
