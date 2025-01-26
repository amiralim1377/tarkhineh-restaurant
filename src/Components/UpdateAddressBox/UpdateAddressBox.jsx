import { useDispatch } from "react-redux";
import useFormhandler from "../React Custom Hooks/useFormhandler/useFormhandler";
import {
  Circle,
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { editAddress } from "../../Slice/userSlice/userSlice";
import useMapLocation from "../React Custom Hooks/useMapLocation/useMapLocation";

function UpdateAddressBox({ isOpen, closeModal, modalType, Address }) {
  const {
    recipientNumber,
    mapAddress,
    exactAddress,
    recipientName,
    number,
    id,
  } = Address;
  const { register, handleSubmit, reset, errors, setValue, isDeliveryForMe } =
    useFormhandler();

  const {
    initialLocation,
    location,
    address,
    setLocation,
    setAddressState,
    resetLocation,
  } = useMapLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    setValue("mapAddress", mapAddress);
    setValue("exactAddress", exactAddress);
    setValue("number", number);
    setValue("recipientName", recipientName);
    setValue("recipientNumber", recipientNumber);
  }, [
    mapAddress,
    exactAddress,
    number,
    recipientName,
    recipientNumber,
    setValue,
  ]);

  const onSubmit = (data) => {
    const filteredData = isDeliveryForMe
      ? {
          id: id,
          mapAddress: data.mapAddress,
          number: data.number,
          exactAddress: data.exactAddress,
          lat: location[0],
          lng: location[1],
        }
      : {
          id: id,
          mapAddress: data.mapAddress,
          recipientName: data.recipientName,
          recipientNumber: data.recipientNumber,
          exactAddress: data.exactAddress,
          lat: location[0],
          lng: location[1],
        };
    dispatch(editAddress({ id: id, updatedAddress: filteredData }));
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
        <Marker position={location}>
          <Popup>{address}</Popup>
        </Marker>
        <Marker position={initialLocation}>
          <Popup>موقعیت رستوران</Popup>
        </Marker>
        <Polyline positions={[initialLocation, location]} color="green" />
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
      open={isOpen && modalType === "addressEdit"}
      onClose={closeModal}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded-lg bg-white p-6">
          <Dialog.Title className="text-center text-lg font-bold text-gray-900">
            ویرایش آدرس
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
                <Circle
                  center={initialLocation}
                  radius={2000}
                  color="blue"
                  fillColor="blue"
                  fillOpacity={0.1}
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
                value={address || mapAddress}
                readOnly
                {...register("mapAddress", {
                  required: "برای ثبت سفارش ثبت لوکشین داخل نقشه الزامی است",
                })}
                onChange={(e) => setAddressState(e.target.value)}
                placeholder="با کلیک روی نقشه آدرس را مشخص کنید"
                className={`w-full rounded-md border p-2 ${errors.mapAddress ? "border border-red-300" : "border border-green-primary-500"}`}
              />
              {errors.mapAddress && (
                <p role="alert" className="text-[10px] text-red-600">
                  {errors.mapAddress?.message}
                </p>
              )}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  {...register("isDeliveryForMe")}
                  className="border"
                  defaultChecked={isDeliveryForMe}
                />
                <label htmlFor="isDeliveryForMe" className="text-xs">
                  تحویل گیرنده خودم هستم.
                </label>
              </div>
              {isDeliveryForMe ? (
                <>
                  <input
                    type="text"
                    defaultValue={number}
                    placeholder="شماره همراه"
                    {...register("number", {
                      required: "ثبت شماره همراه برای ثبت سفارش الزامی است",
                      pattern: {
                        value: /^09\d{9}$/,
                        message:
                          "شماره موبایل باید 11 رقم باشد و با 09 شروع شود",
                      },
                    })}
                    className={`w-full rounded-md border p-2 ${errors.number ? "border border-red-300" : "border border-green-primary-500"}`}
                  />
                  {errors.number && (
                    <p role="alert" className="text-[10px] text-red-600">
                      {errors.number.message}
                    </p>
                  )}
                  <input
                    type="text"
                    defaultValue={exactAddress}
                    placeholder="آدرس دقیق شما"
                    {...register("exactAddress", {
                      required: "ثبت  آدرس برای ثبت سفارش الزامی است",
                      pattern: {
                        value: /^[\u0600-\u06FF0-9\s]+$/,
                        message: "آدرس باید به زبان فارسی وارد شود",
                      },
                      minLength: {
                        value: 10,
                        message: "آدرس باید حداقل شامل 10 کاراکتر باشد",
                      },
                    })}
                    className={`w-full rounded-md border p-2 ${errors.exactAddress ? "border border-red-300" : "border border-green-primary-500"}`}
                  />
                  {errors.exactAddress && (
                    <p role="alert" className="text-xs text-red-600">
                      {errors.exactAddress?.message}
                    </p>
                  )}
                </>
              ) : (
                <>
                  <input
                    type="text"
                    defaultValue={recipientName}
                    placeholder="نام و نام خانوادگی تحویل گیرنده"
                    {...register("recipientName", {
                      required:
                        "ثبت نام و نام خانوداگی تحویل گیرنده الزامی است",
                    })}
                    className={`w-full rounded-md border p-2 ${errors.recipientName ? "border border-red-300" : "border border-green-primary-500"}`}
                  />
                  {errors.recipientName && (
                    <p role="alert" className="text-[10px] text-red-600">
                      {errors.recipientName?.message}
                    </p>
                  )}
                  <input
                    type="text"
                    defaultValue={recipientNumber}
                    placeholder="شماره همراه"
                    {...register("recipientNumber", {
                      required: "ثبت شماره همراه برای ثبت سفارش الزامی است",
                      pattern: {
                        value: /^09\d{9}$/,
                        message:
                          "شماره موبایل باید 11 رقم باشد و با 09 شروع شود",
                      },
                    })}
                    className={`w-full rounded-md border p-2 ${errors.number ? "border border-red-300" : "border border-green-primary-500"}`}
                  />
                  {errors.recipientNumber && (
                    <p role="alert" className="text-[10px] text-red-600">
                      {errors.recipientNumber?.message}
                    </p>
                  )}
                </>
              )}
              <input
                type="submit"
                value="ثبت ویرایش آدرس"
                className="rounded-lg bg-green-primary-500 px-5 py-2 text-white"
              />
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default UpdateAddressBox;
