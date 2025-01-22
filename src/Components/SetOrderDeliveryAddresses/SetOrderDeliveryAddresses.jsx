// import React, { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const SetOrderDeliveryAddresses = ({ isOpen, closeModal }) => {
//   const [step, setStep] = useState(1);
//   const [location, setLocation] = useState([35.6892, 51.389]); // موقعیت اولیه تهران
//   const [address, setAddress] = useState("");
//   const [recipient, setRecipient] = useState({
//     name: "",
//     phone: "",
//   });

//   const onNextStep = () => setStep((prevStep) => prevStep + 1);
//   const onPrevStep = () => setStep((prevStep) => prevStep - 1);

//   const onSubmit = () => {
//     console.log("Location:", location);
//     console.log("Address:", address);
//     console.log("Recipient:", recipient);
//     closeModal(); // بستن مدال پس از ثبت
//   };

//   const LocationMarker = () => {
//     useMapEvents({
//       click(e) {
//         setLocation([e.latlng.lat, e.latlng.lng]);
//         fetch(
//           `https://nominatim.openstreetmap.org/reverse?format=json&lat=${e.latlng.lat}&lon=${e.latlng.lng}`,
//         )
//           .then((response) => response.json())
//           .then((data) => setAddress(data.display_name))
//           .catch((error) => console.log(error));
//       },
//     });

//     return location ? <Marker position={location}></Marker> : null;
//   };

//   return (
//     <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
//       <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
//       <div className="fixed inset-0 flex items-center justify-center p-4">
//         <Dialog.Panel className="w-full max-w-lg rounded-lg bg-white p-6">
//           <Dialog.Title className="text-lg font-bold text-gray-900">
//             تنظیم آدرس تحویل
//           </Dialog.Title>
//           <Dialog.Description className="mb-4 text-sm text-gray-500">
//             لطفاً مراحل را تکمیل کنید.
//           </Dialog.Description>

//           {step === 1 && (
//             <div>
//               <h2 className="mb-4 text-base font-semibold">
//                 مرحله 1: انتخاب مکان روی نقشه
//               </h2>
//               <MapContainer
//                 center={location}
//                 zoom={12}
//                 style={{ width: "100%", height: "200px" }}
//               >
//                 <TileLayer
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
//                 />
//                 <LocationMarker />
//               </MapContainer>
//               <button
//                 onClick={onNextStep}
//                 className="mt-4 w-full rounded-md bg-blue-500 py-2 text-white"
//               >
//                 بعدی
//               </button>
//             </div>
//           )}

//           {step === 2 && (
//             <div>
//               <h2 className="mb-4 text-base font-semibold">
//                 مرحله 2: وارد کردن آدرس
//               </h2>
//               <input
//                 type="text"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 placeholder="آدرس خود را وارد کنید"
//                 className="w-full rounded-md border p-2"
//               />
//               <div className="mt-4 flex justify-between">
//                 <button
//                   onClick={onPrevStep}
//                   className="rounded-md bg-gray-300 px-4 py-2"
//                 >
//                   قبلی
//                 </button>
//                 <button
//                   onClick={onNextStep}
//                   className="rounded-md bg-blue-500 px-4 py-2 text-white"
//                 >
//                   بعدی
//                 </button>
//               </div>
//             </div>
//           )}

//           {step === 3 && (
//             <div>
//               <h2 className="mb-4 text-base font-semibold">
//                 مرحله 3: اطلاعات تحویل گیرنده
//               </h2>
//               <input
//                 type="text"
//                 value={recipient.name}
//                 onChange={(e) =>
//                   setRecipient({ ...recipient, name: e.target.value })
//                 }
//                 placeholder="نام"
//                 className="mb-2 w-full rounded-md border p-2"
//               />
//               <input
//                 type="text"
//                 value={recipient.phone}
//                 onChange={(e) =>
//                   setRecipient({ ...recipient, phone: e.target.value })
//                 }
//                 placeholder="شماره تماس"
//                 className="w-full rounded-md border p-2"
//               />
//               <div className="mt-4 flex justify-between">
//                 <button
//                   onClick={onPrevStep}
//                   className="rounded-md bg-gray-300 px-4 py-2"
//                 >
//                   قبلی
//                 </button>
//                 <button
//                   onClick={onSubmit}
//                   className="rounded-md bg-green-500 px-4 py-2 text-white"
//                 >
//                   ثبت آدرس
//                 </button>
//               </div>
//             </div>
//           )}

//           <button
//             onClick={closeModal}
//             className="absolute right-3 top-3 rounded-full bg-gray-200 p-2"
//           >
//             ✕
//           </button>
//         </Dialog.Panel>
//       </div>
//     </Dialog>
//   );
// };

// export default SetOrderDeliveryAddresses;
