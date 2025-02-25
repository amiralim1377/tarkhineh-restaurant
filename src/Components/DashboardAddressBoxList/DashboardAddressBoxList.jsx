import useModal from "../React Custom Hooks/useModal/useModal";

import UpdateDashboardAddressBox from "../UpdateDashboardAddressBox/UpdateDashboardAddressBox";
import useUserData from "../React Custom Hooks/useUserData/useUserData";
import DeleteAddress from "../DeleteAddress/DeleteAddress";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function DashboardAddressBoxList({ address }) {
  const { openModalHandler, isOpen, modalType, selectedItem, modalId } =
    useModal();
  const [seletedDeleteAdressId, setSeletedDeleteAdressId] = useState();
  const [seletedEditAdressId, setSeletedEditAdressId] = useState();
  const { userData } = useUserData();
  const { firstname, lastname, phonenumber } = userData;

  const {
    recipientNumber,
    exactaddress,
    recipient_name,
    number,
    id,
    is_recipient_self,
    recipient_phone_number,
  } = address;

  const handleDeleteAddress = () => {
    const newModalId = uuidv4();
    setSeletedDeleteAdressId(newModalId);
    openModalHandler("DeleteAddress", address, newModalId);
  };

  const handleEditAddress = () => {
    const newModalId = uuidv4();
    setSeletedEditAdressId(newModalId);
    openModalHandler("addressEditDashboard", address, newModalId);
  };

  return (
    <div className="w-full rounded-md border border-gray-300 bg-[#F9F9F9] p-2 hover:bg-gray-200/50">
      <div className="flex flex-row items-center justify-between">
        <div className="max-w-52 md:w-full md:max-w-2xl">
          <p className="text-xs text-[#353535] md:text-sm">{exactaddress} </p>
        </div>
        <div className="flex items-center gap-2">
          <div onClick={handleDeleteAddress}>
            <img src="/icons/trash.svg" className="w-6 cursor-pointer" alt="" />
          </div>
          <div onClick={handleEditAddress}>
            <img
              src="/icons/edit-2.svg"
              className="w-6 cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <span className="text-xs text-[#717171] md:text-sm">
          {is_recipient_self ? `${firstname} ${lastname} ` : recipient_name}
        </span>
        <div>
          <span className="text-xs text-[#717171] md:text-sm">
            {is_recipient_self ? `${phonenumber}` : recipient_phone_number}
          </span>
        </div>
      </div>
      {isOpen &&
        modalType == "addressEditDashboard" &&
        modalId == seletedEditAdressId && (
          <UpdateDashboardAddressBox
            Address={selectedItem}
            seletedEditAdressId={seletedEditAdressId}
          />
        )}

      {isOpen &&
        modalType == "DeleteAddress" &&
        modalId == seletedDeleteAdressId && (
          <DeleteAddress
            Address={selectedItem}
            seletedDeleteAdressId={seletedDeleteAdressId}
          />
        )}
    </div>
  );
}

export default DashboardAddressBoxList;
