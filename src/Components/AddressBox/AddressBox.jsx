import { useDispatch, useSelector } from "react-redux";
import UpdateAddressBox from "../UpdateAddressBox/UpdateAddressBox";
import useModal from "../React Custom Hooks/useModal/useModal";
import { deleteAddress } from "../../Slice/userSlice/userSlice";

function AddressBox({ Address, onClick }) {
  const dispatch = useDispatch();
  const { recipientNumber, exactAddress, recipientName, number, id } = Address;
  const AddressSliceId = useSelector((state) => state.cart?.address?.id);

  const handleDeleteAddress = (id) => {
    dispatch(deleteAddress(id));
  };

  const { openModalHandler, isOpen, modalType, closeModalHandler } = useModal();

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
          <div onClick={() => handleDeleteAddress(id)}>
            <img src="/icons/trash.svg" className="w-6 cursor-pointer" alt="" />
          </div>
          <div onClick={() => openModalHandler("addressEdit")}>
            <img src="/icons/edit-2.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="text-xs text-[#717171] md:text-sm">
          {recipientName || "اسم وارد شده از یوزر"}
        </div>
        <div>
          <span className="text-xs text-[#717171] md:text-sm">
            {recipientNumber || number}
          </span>
        </div>
      </div>
      {modalType == "addressEdit" && (
        <UpdateAddressBox
          Address={Address}
          isOpen={isOpen}
          modalType={modalType}
          closeModal={closeModalHandler}
        />
      )}{" "}
    </div>
  );
}

export default AddressBox;
