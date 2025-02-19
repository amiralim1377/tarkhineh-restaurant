import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedBranch } from "../../Slice/branchesSlice/branchesSlice";
import { setCategory } from "../../Slice/categorySlice/categorySlice";
import useModal from "../React Custom Hooks/useModal/useModal";
import ContactusBranchesItemMap from "../ContactusBranchesItemMap/ContactusBranchesItemMap";

function ContactusBranchesItem({ branches }) {
  const {
    address,
    name_fa,
    phone_number,
    working_hours,
    name,
    latitude,
    longitude,
    branch_id,
  } = branches;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isOpen, modalType, openModalHandler, selectedItem } = useModal();

  const handleGoToBranchesPage = () => {
    dispatch(
      setSelectedBranch({
        id: branch_id,
        name,
        location: { lat: `${branches.latitude}`, lng: `${branches.longitude}` },
      }),
    ),
      dispatch(setCategory(branches.default_category));
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
            onClick={() => openModalHandler("BranchesItemMap", branches)}
            className="w-full max-w-32 text-nowrap rounded-md bg-green-primary-500 py-1 text-white"
          >
            دیدن در نقشه
          </button>
        </div>
      </div>
      {isOpen && modalType === "BranchesItemMap" && (
        <ContactusBranchesItemMap branches={selectedItem} />
      )}
    </div>
  );
}

export default ContactusBranchesItem;
