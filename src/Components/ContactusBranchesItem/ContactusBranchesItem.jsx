import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedBranch } from "../../Slice/branchesSlice/branchesSlice";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

function ContactusBranchesItem({ branches }) {
  const {
    address,
    name_fa,
    name,
    phone_number,
    working_hours,
    latitude,
    longitude,
  } = branches;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleGoToBranchesPage = () => {
    dispatch(setSelectedBranch({ id: branches.id, name: branches.name }));
    navigate(`/branches/${branches.name}`);
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center overflow-hidden rounded-md border border-gray-300 md:h-72 md:max-w-8xl md:flex-row">
      <div className="h-28 w-full flex-none bg-gray-600 md:h-full md:w-1/2 lg:h-full lg:max-w-3xl">
        <img
          src="/contact-us/2.jpg"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="mx-auto flex w-full flex-col items-center space-y-1 py-3 text-[10px] text-[#717171] md:max-w-xl md:text-sm lg:max-w-2xl lg:text-lg">
        <h3 className="text-xs text-[#353535] md:text-lg md:font-semibold lg:text-xl lg:font-bold">
          شعبه {name_fa}
        </h3>
        <p>{address}</p>
        <div className="flex flex-row space-x-1">
          <span>شماره تماس:</span>
          <span>{phone_number}</span>
        </div>
        <p>ساعت کاری:{working_hours}</p>
        <div className="flex w-full flex-row items-center justify-center gap-2 px-2">
          <button
            onClick={handleGoToBranchesPage}
            className="w-full max-w-32 rounded-md border border-green-primary-500 py-1 text-green-primary-500"
          >
            صفحه شعبه
          </button>
          <button
            onClick={openModal}
            className="w-full max-w-32 text-nowrap rounded-md bg-green-primary-500 py-1 text-white"
          >
            دیدن در نقشه
          </button>
          <Dialog open={isOpen} onClose={closeModal}>
            <Dialog.Panel className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto bg-black bg-opacity-70 px-2">
              <div className="relative w-full max-w-xs rounded-md bg-white p-4 md:max-w-sm">
                <Dialog.Title className="text-sm font-bold md:text-lg">
                  نقشه
                </Dialog.Title>
                <Dialog.Description className="mb-2 text-xs md:mb-4 md:text-sm">
                  موقعیت شعبه {name_fa} روی نقشه.
                </Dialog.Description>
                <iframe
                  title="Map"
                  src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
                  className="h-32 w-full border-none md:h-48"
                ></iframe>
                <div className="mt-2 flex justify-end space-x-2 md:mt-4">
                  <button
                    onClick={closeModal}
                    className="rounded-md bg-red-500 px-3 py-1 text-xs font-medium text-white md:px-4 md:py-2 md:text-sm"
                  >
                    بستن
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default ContactusBranchesItem;
