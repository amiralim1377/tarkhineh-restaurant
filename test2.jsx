import useFormhandler from "../React Custom Hooks/useFormhandler/useFormhandler";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { memo, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import useMapLocation from "../React Custom Hooks/useMapLocation/useMapLocation";
import useModal from "../React Custom Hooks/useModal/useModal";
import supabase from "../../Services/supabase";
import { fetchAddresses } from "../../Slice/userSlice/userSlice";
import { useDispatch } from "react-redux";

const UpdateDashboardAddressBox = memo(({ Address }) => {
  const dispatch = useDispatch();
  const {
    recipient_phone_number: recipientNumber,
    mapaddress,
    exactaddress: exactAddress,
    recipient_name: recipientName,
    user_phone_number: number,
    id,
    latitude: lat,
    longitude: lng,
    is_recipient_self,
  } = Address;

  const { register, handleSubmit, reset, errors, setValue } = useFormhandler();
  const { isOpen, modalType, closeModalHandler } = useModal();
  const { initialLocation, location, address, setLocation, setAddressState } =
    useMapLocation();

  const [initialLoad, setInitialLoad] = useState(true);
  const [isDeliveryForMe, setIsDeliveryForMe] = useState(is_recipient_self);

  // This useEffect sets the map address whenever it changes
  useEffect(() => {
    setValue("mapaddress", mapaddress);
  }, [mapaddress, setValue]);

  // This useEffect sets the exact address whenever it changes
  useEffect(() => {
    setValue("exactAddress", exactAddress);
  }, [exactAddress, setValue]);

  // This useEffect sets the user phone number whenever it changes
  useEffect(() => {
    setValue("number", number);
  }, [number, setValue]);

  // This useEffect sets the recipient name whenever it changes
  useEffect(() => {
    setValue("recipientName", recipientName);
  }, [recipientName, setValue]);

  // This useEffect sets the recipient phone number whenever it changes
  useEffect(() => {
    setValue("recipientNumber", recipientNumber);
  }, [recipientNumber, setValue]);

  // This useEffect initializes the location on the first render using useRef
  useEffect(() => {
    if (initialLoad.current) {
      if (lat && lng) {
        setLocation([lat, lng]);
      } else {
        setLocation(initialLocation);
      }
      initialLoad.current = false;
    }
  }, [lat, lng, initialLocation, setLocation, initialLoad]);

  const onSubmit = async (data) => {
    const filteredData = isDeliveryForMe
      ? {
          id: id,
          mapaddress: data.mapaddress,
          user_phone_number: data.number,
          exactaddress: data.exactAddress,
          latitude: location[0],
          longitude: location[1],
        }
      : {
          id: id,
          mapaddress: data.mapaddress,
          recipient_name: data.recipientName,
          recipient_phone_number: data.recipientNumber,
          exactaddress: data.exactAddress,
          latitude: location[0],
          longitude: location[1],
        };

    const { error } = await supabase
      .from("addresses")
      .update(filteredData)
      .eq("id", id);

    if (error) {
      console.error("خطا در به‌روزرسانی آدرس:", error.message);
      return;
    }

    dispatch(fetchAddresses());
    reset();
    setAddressState("");
    setLocation(initialLocation);
    closeModalHandler();
  };

  const handleCloseModal = () => {
    closeModalHandler();
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
            setValue("mapaddress", data.display_name);
          })
          .catch((error) => console.log(error));
      },
    });

    return location ? (
      <Marker position={location}>
        <Popup>{mapaddress}</Popup>
      </Marker>
    ) : null;
  };

  const ResetCenterView = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      if (center && center.length) {
        map.setView(center);
        map.invalidateSize();
      }
    }, [center, map]);
    return null;
  };

  return (
    <Dialog
      open={isOpen && modalType === "addressEdit"}
      onClose={closeModalHandler}
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
                value={address || mapaddress}
                readOnly
                {...register("mapaddress", {
                  required: "برای ثبت سفارش ثبت لوکشین داخل نقشه الزامی است",
                })}
                onChange={(e) => setAddressState(e.target.value)}
                placeholder="با کلیک روی نقشه آدرس را مشخص کنید"
                className={`w-full rounded-md border p-2 ${errors.mapaddress ? "border border-red-300" : "border border-green-primary-500"}`}
              />
              {errors.mapaddress && (
                <p role="alert" className="text-[10px] text-red-600">
                  {errors.mapaddress?.message}
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
                    className={`w-full rounded-md border p-2 ${errors.exactaddress ? "border border-red-300" : "border border-green-primary-500"}`}
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
                      pattern: {
                        value: /^[\u0600-\u06FF\s]+$/,
                        message: "اسم باید به زبان فارسی وارد شود",
                      },
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
                    className={`w-full rounded-md border p-2 ${errors.exactaddress ? "border border-red-300" : "border border-green-primary-500"}`}
                  />
                  {errors.exactAddress && (
                    <p role="alert" className="text-xs text-red-600">
                      {errors.exactAddress?.message}
                    </p>
                  )}
                </>
              )}
              <input
                type="submit"
                value="ثبت ویرایش آدرس"
                className="cursor-pointer rounded-lg bg-green-primary-500 px-5 py-2 text-white"
              />
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
});

UpdateDashboardAddressBox.displayName = "UpdateDashboardAddressBox";
export default UpdateDashboardAddressBox;
