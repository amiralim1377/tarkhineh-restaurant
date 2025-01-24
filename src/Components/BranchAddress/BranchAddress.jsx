import { useSelector } from "react-redux";

function BranchAddress() {
  const branches = useSelector((state) => state.branches?.branches);
  const { address, latitude, longitude, name_fa, phone_number, working_hours } =
    branches;

  return (
    <div className="flex w-full flex-row items-start justify-between rounded-md border border-gray-300 bg-white p-4">
      <div className="flex min-h-40 flex-col space-y-2 divide-y md:divide-none">
        <div className="flex items-center gap-2">
          <img src="/icons/location.svg" className="md:h-6 md:w-6" alt="" />

          <h2 className="text-sm font-semibold text-[#353535] md:text-base md:font-semibold">
            آدرس شعبه {name_fa}
          </h2>
        </div>
        <div className="flex flex-col space-y-2 py-2 text-xs text-[#717171] md:space-y-5 md:text-sm">
          <span>{address}</span>
          <div className="flex items-center gap-1">
            <span>شماره تماس:</span>
            <span>{phone_number}</span>
          </div>
          <span>ساعت کاری: {working_hours}</span>
          <div className="hidden justify-end md:flex">
            <a
              href={`https://maps.google.com/?q=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-300 px-5 py-2 text-center hover:text-black"
            >
              مشاهده در نقشه
            </a>
          </div>
        </div>
      </div>
      <div className="hidden w-full max-w-72 overflow-hidden rounded-lg md:flex">
        <iframe
          title="Map"
          src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
          className="h-32 w-full border-none shadow-xl md:min-h-48"
        ></iframe>
      </div>
    </div>
  );
}

export default BranchAddress;
