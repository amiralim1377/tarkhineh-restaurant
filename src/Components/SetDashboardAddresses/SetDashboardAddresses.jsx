import { useEffect } from "react";
import { Dialog } from "@headlessui/react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch } from "react-redux";
import useMapLocation from "../React Custom Hooks/useMapLocation/useMapLocation";
import useFormhandler from "../React Custom Hooks/useFormhandler/useFormhandler";
import { v4 as uuidv4 } from "uuid";
import { addAddress } from "../../Slice/userSlice/userSlice";
import useModal from "../React Custom Hooks/useModal/useModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../../Services/supabase";

const SetDashboardAddresses = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, errors, setValue, watch } =
    useFormhandler();
  const isDeliveryForMe = watch("isDeliveryForMe", true);

  const {
    initialLocation,
    location,
    address,
    setLocation,
    setAddressState,
    resetLocation,
  } = useMapLocation();

  const { isOpen, modalType, closeModalHandler } = useModal();

  const mutation = useMutation({
    mutationFn: async (newAddress) => {
      const { data, error } = await supabase
        .from("addresses")
        .insert([newAddress]);

      if (error) {
        throw error;
      }
      return data;
    },
    onSuccess: (data) => {
      console.log("Address added successfully:", data);
      queryClient.invalidateQueries("addresses");
    },
    onError: (error) => {
      console.error("Error adding address:", error.message);
    },
  });

  const onSubmit = async (data) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const filteredData = isDeliveryForMe
      ? {
          id: uuidv4(),
          customer_id: user.id,
          mapaddress: data.mapAddress,
          user_phone_number: data.number,
          exactaddress: data.exactAddress,
          latitude: location[0],
          longitude: location[1],
          is_recipient_self: true,
        }
      : {
          id: uuidv4(),
          customer_id: user.id,
          mapaddress: data.mapAddress,
          recipient_name: data.recipientName,
          recipient_phone_number: data.recipientNumber,
          exactaddress: data.exactAddress,
          latitude: location[0],
          longitude: location[1],
          is_recipient_self: false,
        };
    mutation.mutate(filteredData);
    dispatch(addAddress(filteredData));
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
            setValue("mapAddress", data.display_name);
          })
          .catch((error) => console.log(error));
      },
    });
    return location ? (
      <Marker position={location}>
        <Popup>{address}</Popup>
      </Marker>
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
      open={isOpen && modalType === "addMap"}
      onClose={handleCloseModal}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded-lg bg-white p-6">
          <Dialog.Title className="text-center text-lg font-bold text-gray-900">
            ثبت آدرس
          </Dialog.Title>
          <div
            className="mb-4 cursor-pointer text-sm text-gray-500"
            onClick={handleCloseModal}
          >
            <img
              src="/icons/arrow-left-blakc.svg"
              className="h-4 w-4 rotate-180"
              alt=""
            />
          </div>
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
                readOnly
                {...register("mapAddress", {
                  required: "برای ثبت سفارش ثبت لوکیشن داخل نقشه الزامی است",
                })}
                placeholder="با کلیک روی نقشه آدرس را مشخص کنید"
                className={`w-full rounded-md border p-2 ${
                  errors.mapAddress
                    ? "border-red-300"
                    : "border-green-primary-500"
                }`}
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
                  defaultChecked={true}
                />
                <label htmlFor="isDeliveryForMe" className="text-xs">
                  تحویل گیرنده خودم هستم.
                </label>
              </div>
              {isDeliveryForMe ? (
                <>
                  <input
                    type="text"
                    placeholder="شماره همراه"
                    {...register("number", {
                      required: "ثبت شماره همراه برای ثبت سفارش الزامی است",
                      pattern: {
                        value: /^09\d{9}$/,
                        message:
                          "شماره موبایل باید 11 رقم باشد و با 09 شروع شود",
                      },
                    })}
                    className={`w-full rounded-md border p-2 ${
                      errors.number
                        ? "border-red-300"
                        : "border-green-primary-500"
                    }`}
                  />
                  {errors.number && (
                    <p role="alert" className="text-[10px] text-red-600">
                      {errors.number.message}
                    </p>
                  )}
                  <input
                    type="text"
                    placeholder="آدرس دقیق شما"
                    {...register("exactAddress", {
                      required: "ثبت آدرس برای ثبت سفارش الزامی است",
                      pattern: {
                        value: /^[\u0600-\u06FF0-9\s]+$/,
                        message: "آدرس باید به زبان فارسی وارد شود",
                      },
                      minLength: {
                        value: 10,
                        message: "آدرس باید حداقل شامل 10 کاراکتر باشد",
                      },
                    })}
                    className={`w-full rounded-md border p-2 ${
                      errors.exactAddress
                        ? "border-red-300"
                        : "border-green-primary-500"
                    }`}
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
                    placeholder="نام و نام خانوادگی تحویل گیرنده"
                    {...register("recipientName", {
                      required:
                        "ثبت نام و نام خانوادگی تحویل گیرنده الزامی است",
                    })}
                    className={`w-full rounded-md border p-2 ${
                      errors.recipientName
                        ? "border-red-300"
                        : "border-green-primary-500"
                    }`}
                  />
                  {errors.recipientName && (
                    <p role="alert" className="text-[10px] text-red-600">
                      {errors.recipientName?.message}
                    </p>
                  )}
                  <input
                    type="text"
                    placeholder="شماره همراه"
                    {...register("recipientNumber", {
                      required: "ثبت شماره همراه برای ثبت سفارش الزامی است",
                      pattern: {
                        value: /^09\d{9}$/,
                        message:
                          "شماره موبایل باید 11 رقم باشد و با 09 شروع شود",
                      },
                    })}
                    className={`w-full rounded-md border p-2 ${
                      errors.recipientNumber
                        ? "border-red-300"
                        : "border-green-primary-500"
                    }`}
                  />
                  {errors.recipientNumber && (
                    <p role="alert" className="text-[10px] text-red-600">
                      {errors.recipientNumber?.message}
                    </p>
                  )}
                  <input
                    type="text"
                    placeholder="آدرس دقیق تحویل گیرنده"
                    {...register("exactAddress", {
                      required: "ثبت آدرس برای ثبت سفارش الزامی است",
                      minLength: {
                        value: 10,
                        message: "آدرس باید حداقل شامل 10 کاراکتر باشد",
                      },
                      pattern: {
                        value: /^[\u0600-\u06FF0-9\s]+$/,
                        message: "آدرس باید به زبان فارسی وارد شود",
                      },
                    })}
                    className={`w-full rounded-md border p-2 ${
                      errors.exactAddress
                        ? "border-red-300"
                        : "border-green-primary-500"
                    }`}
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

export default SetDashboardAddresses;
