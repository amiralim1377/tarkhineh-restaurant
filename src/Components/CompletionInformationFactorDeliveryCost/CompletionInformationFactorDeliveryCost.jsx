import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../../helper_functions/formatPrice";
import useDeliveryCost from "../../Components/React Custom Hooks/useDeliveryCost/useDeliveryCost"; // Import custom hook
import useCartCalculations from "../React Custom Hooks/useCartCalculations/useCartCalculations";

function CompletionInformationFactorDeliveryCost() {
  // Get selected address from Redux state
  const selectedAddress = useSelector((state) => state.cart?.address);
  const { totalPrice, deliveryCost, totalTime } = useCartCalculations();
  const OrderDeliveryMethod = useSelector(
    (state) => state.cart?.deliveryMethod,
  );

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Set user location based on selected address
    if (selectedAddress) {
      const { lat, lng } = selectedAddress;
      setUserLocation([lat, lng]);
    }
  }, [selectedAddress]);

  // Get branch location from Redux state
  const branchLocation = useSelector(
    (state) => state.branches?.selectedBranch?.location,
  );

  // Call custom hook to dispatch delivery cost, time and distance to Redux
  useDeliveryCost(branchLocation, userLocation);

  // Get distance  from Redux state
  const distance = useSelector((state) => state.cart?.distance);

  return (
    <div className="flex w-full flex-col">
      <div className="mt-2 flex w-full items-center justify-between">
        <h5 className="text-sm text-[#353535]">هزینه ارسال</h5>
        <span className="text-sm text-[#717171]">
          {deliveryCost === 0 || OrderDeliveryMethod !== "delivery"
            ? "فاقد هزینه"
            : formatPrice(deliveryCost)}
        </span>
      </div>
      <div className="mt-2 flex w-full flex-row items-start justify-between gap-4">
        <img
          src="/public/icons/warning-2.svg"
          className="object-cover"
          alt=""
        />
        <p className="text-xs text-[#A9791C]">
          هزینه ارسال برای مناطق تحت پوشش رستوران رایگان است. اگر خارج از محدوده
          باشید، هزینه ارسال پس از ثبت آدرس تعیین می‌شود.
        </p>
      </div>
      {distance > 0 && (
        <>
          <div className="mt-2 flex w-full flex-row items-start justify-between gap-4">
            <h5 className="text-sm text-[#353535]">فاصله از شعبه</h5>
            <span className="text-sm text-[#717171]">
              {distance.toFixed(2)} کیلومتر
            </span>
          </div>
          <div className="mt-2 flex w-full flex-row items-start justify-between gap-4">
            <h5 className="text-sm text-[#353535]">مدت زمان تقریبی ارسال</h5>
            <span className="text-sm text-[#717171]">{totalTime} دقیقه</span>
          </div>
        </>
      )}
      <div className="mt-2 flex w-full items-center justify-between">
        <h5 className="text-sm text-[#353535]">هزینه کل غذا ها</h5>
        <span className="text-sm text-[#717171]">
          {formatPrice(totalPrice)}
        </span>
      </div>
    </div>
  );
}

export default CompletionInformationFactorDeliveryCost;
