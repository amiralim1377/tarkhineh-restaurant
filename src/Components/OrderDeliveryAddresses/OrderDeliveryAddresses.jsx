import { useDispatch, useSelector } from "react-redux";
import AddressBox from "../AddressBox/AddressBox";
import NoAddressRegistered from "../NoAddressRegistered/NoAddressRegistered";
import SetOrderDeliveryAddresses from "../SetOrderDeliveryAddresses/SetOrderDeliveryAddresses";
import useModal from "../React Custom Hooks/useModal/useModal";
import { setAddress } from "../../Slice/cartSlice/cartSlice";

function OrderDeliveryAddresses() {
  const isAddedAddress = useSelector((state) => state.user?.addresses);
  const dispatch = useDispatch();

  const { isOpen, openModalHandler, closeModalHandler, modalType } = useModal();

  const branchLocation = useSelector(
    (state) => state.branches?.selectedBranch?.location,
  );

  const handleSetDeliveryAddresses = (Address) => {
    dispatch(setAddress(Address));
  };

  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-4">
      <div className="divide-y">
        <div className="flex flex-row items-center justify-between py-2">
          <div className="flex items-center">
            <img src="/icons/location.svg" alt="Location Icon" />
            <h4 className="ml-2 text-sm text-[#353535] md:text-base md:font-bold">
              آدرس‌ها
            </h4>
          </div>
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => openModalHandler("addressSelection")} // استفاده از handler مدال باز کردن
          >
            <img
              src="/icons/+.svg"
              className="w-3 rounded-full border border-green-primary-500"
              alt="Add Icon"
            />
            <h4 className="text-xs text-green-primary-500">افزودن آدرس</h4>
          </div>
        </div>

        <div className="py-4">
          {isAddedAddress.length ? (
            isAddedAddress.map((Address, index) => (
              <AddressBox
                onClick={() => handleSetDeliveryAddresses(Address)}
                key={index}
                Address={Address}
              />
            ))
          ) : (
            <NoAddressRegistered />
          )}
        </div>
      </div>

      {modalType === "addressSelection" && (
        <SetOrderDeliveryAddresses
          isOpen={isOpen}
          closeModal={closeModalHandler}
          branchLocation={branchLocation}
          modalType={modalType}
        />
      )}
    </div>
  );
}

export default OrderDeliveryAddresses;
