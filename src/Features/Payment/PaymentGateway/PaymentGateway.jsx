import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPaymentGateway } from "../../../Slice/cartSlice/cartSlice";

function PaymentGateway() {
  const [selectedBank, setSelectedBank] = useState(null);
  const dispatch = useDispatch();

  const handleIconClick = (id) => {
    console.log(id);

    setSelectedBank(id);
    dispatch(setPaymentGateway(id));
  };

  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-4">
      <div className="divide-y md:flex md:w-full md:flex-row md:divide-none">
        <div className="flex w-full items-center py-2 md:max-w-44">
          <div>
            <img src="/icons/card.svg" className="md:w-6" alt="" />
          </div>
          <h4 className="text-sm text-[#353535] md:text-base md:font-bold">
            درگاه پرداخت
          </h4>
        </div>
        <div className="flex flex-col items-center py-2">
          <div
            onClick={(e) => setSelectedBank(e.target.id)}
            className="mx-auto flex flex-row items-center gap-2"
          >
            <div
              className={`max-w-16 cursor-pointer rounded-md border transition duration-300 ease-in-out md:max-w-24 ${selectedBank == "mellat" ? "" : "grayscale filter"}`}
              onClick={() => handleIconClick("mellat")}
              id="mellat"
            >
              <img
                src="/payment/204bd79c6f9ca84db147c0ae7b6f64a6.jpg"
                className="min-h-16 object-cover md:min-h-24"
                alt=""
                id="mellat"
              />
            </div>
            <div
              className={`max-w-16 cursor-pointer rounded-md border transition duration-300 ease-in-out md:max-w-24 ${selectedBank == "saman" ? "" : "grayscale filter"}`}
              onClick={() => handleIconClick("saman")}
              id="saman"
            >
              <img
                src="/payment/5e8c0b6e9950b56d479a86910e1c9af4.jpg"
                className="min-h-16 object-cover md:min-h-24"
                alt=""
                id="saman"
              />
            </div>
            <div
              id="parsian"
              className={`max-w-16 cursor-pointer rounded-md border transition duration-300 ease-in-out md:max-w-24 ${selectedBank == "parsian" ? "" : "grayscale filter"}`}
              onClick={() => handleIconClick("parsian")}
            >
              <img
                src="/payment/d4cfd0003de2a111d436dfa9b41ce150.jpg"
                className="min-h-16 object-cover md:min-h-24"
                alt=""
                id="parsian"
              />
            </div>
          </div>
          <div className="mt-2 max-w-72">
            <p className="text-center text-xs text-[#717171]">
              پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌(لطفا قبل از
              پرداخت فیلترشکن خود را خاموش کنید.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGateway;
