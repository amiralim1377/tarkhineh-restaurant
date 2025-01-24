import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Popup,
  Circle,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { setAddress } from "../../redux/slices/addressSlice";

const SetOrderDeliveryAddresses = ({ isOpen, closeModal, modalType }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const initialLocation = [35.6892, 51.389]; // موقعیت پیش‌فرض شعبه (تهران به عنوان مثال)
  const [location, setLocation] = useState(initialLocation);

  const RADIUS = 2000; // شعاع محدوده رایگان (به متر)
  const BASE_DELIVERY_COST = 5000; // هزینه پایه ارسال
  const COST_PER_KM = 2000; // هزینه اضافی برای هر کیلومتر بیشتر از محدوده رایگان

  const [deliveryCost, setDeliveryCost] = useState(0);
  const [distance, setDistance] = useState(null);

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setLocation([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  useEffect(() => {
    if (location && initialLocation) {
      const userLatLng = L.latLng(location[0], location[1]);
      const branchLatLng = L.latLng(initialLocation[0], initialLocation[1]);
      const calculatedDistance = userLatLng.distanceTo(branchLatLng); // فاصله بر حسب متر
      setDistance(calculatedDistance);

      if (calculatedDistance > RADIUS) {
        const extraDistance = (calculatedDistance - RADIUS) / 1000; // تبدیل متر به کیلومتر
        setDeliveryCost(BASE_DELIVERY_COST + extraDistance * COST_PER_KM);
      } else {
        setDeliveryCost(0); // ارسال رایگان در محدوده
      }
    }
  }, [location]);

  const onSubmit = (data) => {
    const filteredData = {
      mapAddress: data.mapAddress,
      exactAddress: data.exactAddress,
      deliveryCost, // اضافه کردن هزینه ارسال به اطلاعات فرم
    };

    dispatch(setAddress(filteredData));
    reset();
    setLocation(initialLocation);
    closeModal();
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
                  radius={RADIUS}
                  color="blue"
                  fillColor="blue"
                  fillOpacity={0.1}
                />
                {distance && (
                  <Popup position={location}>
                    فاصله: {distance.toFixed(2)} متر
                    <br />
                    {distance > RADIUS
                      ? `هزینه ارسال: ${deliveryCost.toFixed(2)} تومان`
                      : "ارسال رایگان"}
                  </Popup>
                )}
                <LocationMarker />
              </MapContainer>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-3"
            >
              <input
                type="text"
                placeholder="آدرس روی نقشه"
                {...register("mapAddress", { required: true })}
                className="rounded-lg border px-4 py-2"
              />
              <textarea
                placeholder="آدرس دقیق"
                {...register("exactAddress", { required: true })}
                className="rounded-lg border px-4 py-2"
              ></textarea>
              <input
                type="submit"
                value={`ثبت آدرس ${
                  deliveryCost > 0
                    ? `(هزینه ارسال: ${deliveryCost.toFixed(2)} تومان)`
                    : "(ارسال رایگان)"
                }`}
                className="rounded-lg bg-green-500 px-5 py-2 text-white"
              />
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SetOrderDeliveryAddresses;
