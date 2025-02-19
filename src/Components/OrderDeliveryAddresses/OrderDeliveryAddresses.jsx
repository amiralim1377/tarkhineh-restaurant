import { useDispatch, useSelector } from "react-redux";
import AddressBox from "../AddressBox/AddressBox";
import NoAddressRegistered from "../NoAddressRegistered/NoAddressRegistered";
import SetOrderDeliveryAddresses from "../SetOrderDeliveryAddresses/SetOrderDeliveryAddresses";
import useModal from "../React Custom Hooks/useModal/useModal";
import { setAddress } from "../../Slice/cartSlice/cartSlice";
import { fetchAddresses } from "../../Services/fetchAddresses";
import { setAddresses } from "../../Slice/userSlice/userSlice";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

function OrderDeliveryAddresses() {
  const dispatch = useDispatch();
  const { isOpen, openModalHandler, modalType } = useModal();
  const {
    data: addresses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["addresses"],
    queryFn: fetchAddresses,
  });
  useEffect(() => {
    if (addresses) {
      dispatch(setAddresses(addresses));
    }
  }, [addresses, dispatch]);

  const addressState = useSelector((state) => state.user?.addresses);

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
          <div className="flex items-center gap-1">
            <img src="/icons/location.svg" alt="Location Icon" />
            <h4 className="text-sm font-semibold text-[#353535] md:text-base md:font-bold">
              آدرس‌ها
            </h4>
          </div>
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => openModalHandler("addressSelection")}
          >
            <img
              src="/icons/+.svg"
              className="w-3 rounded-full border border-green-primary-500"
              alt="Add Icon"
            />
            <span className="text-xs text-green-primary-500">افزودن آدرس</span>
          </div>
        </div>

        <div className="py-4">
          {addressState.length ? (
            addressState?.map((Address) => (
              <AddressBox
                onClick={() => handleSetDeliveryAddresses(Address)}
                key={Address.id}
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
          branchLocation={branchLocation}
          modalType={modalType}
        />
      )}
    </div>
  );
}

export default OrderDeliveryAddresses;
