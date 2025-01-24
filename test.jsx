import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
  useMap,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setAddress } from "../../Slice/cartSlice/cartSlice";

const SetOrderDeliveryAddresses = ({ isOpen, closeModal, modalType }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
  } = useForm();
  const branchLocation = useSelector(
    (state) => state.branches.selectedBranch.location,
  );
  const { lat, lng } = branchLocation;
  const initialLocation = [lat, lng];
  const [location, setLocation] = useState(initialLocation);
  const [address, setAddressState] = useState("");
  const isDeliveryForMe = watch("isDeliveryForMe", true);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const filteredData = isDeliveryForMe
      ? {
          mapAddress: data.mapAddress,
          number: data.number,
          exactAddress: data.exactAddress,
        }
      : {
          mapAddress: data.mapAddress,
          recipientName: data.recipientName,
          recipientNumber: data.recipientNumber,
          exactAddress: data.exactAddress,
        };

    console.log(filteredData);
    dispatch(setAddress(filteredData));
    reset();
    setAddressState("");
    setLocation(initialLocation);
    closeModal();
  };

  const handleCloseModal = () => {
    closeModal();
    reset();
    setLocation(initialLocation);
    setAddressState("");
  };

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setLocation([e.latlng.lat, e.latlng.lng]);
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${e.latlng.lat}&lon=${e.latlng.lng}`,
        )
          .then((response) => response.json())
          .then((data) => {
            setAddressState(data.display_name);
            setValue("mapAddress", data.display_name);
          })
          .catch((error) => console.log(error));
      },
    });
    return location ? (
      <>
        {/* نشانگر لوکیشن انتخاب‌شده */}
        <Marker position={location}>
          <Popup>{address}</Popup>
        </Marker>
        {/* نشانگر موقعیت رستوران */}
        <Marker position={initialLocation}>
          <Popup>موقعیت رستوران</Popup>
        </Marker>
        {/* رسم خط بین لوکیشن‌ها */}
        <Polyline positions={[initialLocation, location]} color="blue" />
      </>
    ) : null;
  };

  const ResetCenterView = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(center);
      map.invalidateSize();
    }, [map, center]);
    return null;
  };

  return (
    <Dialog
      open={isOpen && modalType === "addressSelection"}
      onClose={closeModal}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded-lg bg-white p-6">
          <Dialog.Title className="text-center text-lg font-bold text-gray-900">
            ثبت آدرس
          </Dialog.Title>
          <Dialog.Description className="mb-4 cursor-pointer text-sm text-gray-500">
            <img
              src="/icons/arrow-left-blakc.svg"
              className="h-4 w-4 rotate-180"
              onClick={handleCloseModal}
              alt=""
            />
          </Dialog.Description>
          <div className="flex flex-col space-y-3">
            <div className="relative">
              <MapContainer
                center={location}
                zoom={13}
                style={{ width: "100%", height: "250px" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                />
                <LocationMarker />
                <ResetCenterView center={location} />
              </MapContainer>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-3"
            >
              <input
                type="text"
                value={address}
                {...register("mapAddress", {
                  required: "برای ثبت سفارش ثبت لوکشین داخل نقشه الزامی است",
                })}
                onChange={(e) => setAddressState(e.target.value)}
                placeholder="عنوان آدرس"
                className={`w-full rounded-md border p-2 ${
                  errors.mapAddress
                    ? "border border-red-300"
                    : "border border-green-primary-500"
                }`}
              />
              {errors.mapAddress && (
                <p role="alert" className="text-[10px] text-red-600">
                  {errors.mapAddress?.message}
                </p>
              )}
              {/* سایر فیلدهای فرم */}
              <input
                type="submit"
                value="ثبت آدرس"
                className="rounded-lg bg-green-primary-500 px-5 py-2 text-white"
              />
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SetOrderDeliveryAddresses;
