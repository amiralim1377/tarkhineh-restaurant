import AddressBox from "../AddressBox/AddressBox";
import NoAddressRegistered from "../NoAddressRegistered/NoAddressRegistered";

function OrderDeliveryAddresses() {
  return (
    <div className="w-full rounded-md border border-gray-300 p-4">
      <div className="divide-y">
        <div className="flex flex-row items-center justify-between py-2">
          <div className="flex items-center">
            <div>
              <img src="/icons/location.svg" alt="" />
            </div>
            <h4 className="text-sm text-[#353535] md:text-base md:font-bold">
              آدرس‌ها
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/icons/+.svg"
              className="w-3 rounded-full border border-green-primary-500"
              alt=""
            />
            <h4 className="text-xs text-green-primary-500">افزودن آدرس</h4>
          </div>
        </div>
        <div>
          <AddressBox />
          <NoAddressRegistered />
        </div>
      </div>
    </div>
  );
}

export default OrderDeliveryAddresses;
