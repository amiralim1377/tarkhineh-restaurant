import { useSelector } from "react-redux";
import UpdateAddressBox from "../UpdateAddressBox/UpdateAddressBox";
import useModal from "../React Custom Hooks/useModal/useModal";
import useUserData from "../React Custom Hooks/useUserData/useUserData";
import DeleteAddress from "../DeleteAddress/DeleteAddress";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function AddressBox({ Address, onClick }) {
  const [seletedDeleteAdressId, setSeletedDeleteAdressId] = useState();
  const [seletedEditAdressId, setSeletedEditAdressId] = useState();

  const {
    recipient_phone_number: recipientNumber,
    exactaddress: exactAddress,
    recipient_name: recipientName,
    user_phone_number: number,
    id,
  } = Address;
  const {
    userData: { firstname, lastname },
  } = useUserData();

  const AddressSliceId = useSelector((state) => state.cart?.address?.id);

  const { openModalHandler, isOpen, modalType, selectedItem, modalId } =
    useModal();

  const handleDeleteAddress = () => {
    const newModalId = uuidv4();
    setSeletedDeleteAdressId(newModalId);
    openModalHandler("DeleteAddress", Address, newModalId);
  };

  const handleEditAddress = () => {
    const newModalId = uuidv4();
    setSeletedEditAdressId(newModalId);
    openModalHandler("addressEdit", Address, newModalId);
  };

  return (
    <div
      onClick={onClick}
      className={`mt-5 cursor-pointer rounded-md border border-gray-300 bg-[#F9F9F9] p-2 hover:bg-gray-200/50 ${AddressSliceId == id ? "border-2 border-green-primary-500 shadow-xl" : ""}`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="max-w-52 md:w-full md:max-w-2xl">
          <p className="text-xs text-[#353535] md:text-sm">{exactAddress} </p>
        </div>
        <div className="flex items-center gap-2">
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteAddress();
            }}
          >
            <img src="/icons/trash.svg" className="w-6 cursor-pointer" alt="" />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleEditAddress();
            }}
          >
            <img src="/icons/edit-2.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="text-xs text-[#717171] md:text-sm">
          {recipientName || `${firstname || "کاربر"} ${lastname || "ترخینه"}`}
        </div>
        <div>
          <span className="text-xs text-[#717171] md:text-sm">
            {recipientNumber || number}
          </span>
        </div>
      </div>
      {isOpen &&
        modalType == "addressEdit" &&
        modalId === seletedEditAdressId && (
          <UpdateAddressBox
            seletedEditAdressId={seletedEditAdressId}
            Address={selectedItem}
          />
        )}

      {isOpen &&
        modalType === "DeleteAddress" &&
        modalId === seletedDeleteAdressId && (
          <DeleteAddress
            seletedDeleteAdressId={seletedDeleteAdressId}
            Address={selectedItem}
          />
        )}
    </div>
  );
}

export default AddressBox;
