import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddressBox from "../AddressBox/AddressBox"; // نمایش آدرس‌های کاربر
import NoAddressRegistered from "../NoAddressRegistered/NoAddressRegistered"; // نمایش پیام در صورت عدم وجود آدرس
import Modal from "react-modal";

Modal.setAppElement("#root"); // برای دسترسی‌پذیری مدال

function OrderDeliveryAddresses() {
  // دریافت وضعیت آدرس‌ها از Redux
  const isAddedAddress = useSelector((state) => state.cart?.address);

  // مدیریت وضعیت باز و بسته بودن مدال
  const [isModalOpen, setIsModalOpen] = useState(false);

  // باز کردن مدال
  const openModal = () => {
    setIsModalOpen(true);
  };

  // بستن مدال
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-4">
      {/* بخش سرآیند */}
      <div className="divide-y">
        <div className="flex flex-row items-center justify-between py-2">
          <div className="flex items-center">
            <img src="/icons/location.svg" alt="Location Icon" />
            <h4 className="ml-2 text-sm text-[#353535] md:text-base md:font-bold">
              آدرس‌ها
            </h4>
          </div>
          {/* دکمه افزودن آدرس */}
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={openModal}
          >
            <img
              src="/icons/+.svg"
              className="w-3 rounded-full border border-green-primary-500"
              alt="Add Icon"
            />
            <h4 className="text-xs text-green-primary-500">افزودن آدرس</h4>
          </div>
        </div>

        {/* بخش نمایش آدرس‌ها */}
        <div className="py-4">
          {isAddedAddress ? <AddressBox /> : <NoAddressRegistered />}
        </div>
      </div>

      {/* مدال افزودن آدرس */}
      {/* <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: "90%",
            maxWidth: "400px",
            height: "auto",
            margin: "auto",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            padding: "20px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
        }}
      >
        <SetOrderDeliveryAddresses closeModal={closeModal} />
      </Modal> */}
    </div>
  );
}

export default OrderDeliveryAddresses;
