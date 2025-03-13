import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedBranch } from "../../Slice/branchesSlice/branchesSlice";
import { setCategory } from "../../Slice/categorySlice/categorySlice";
import useModal from "../React Custom Hooks/useModal/useModal";
import ContactusBranchesItemMap from "../ContactusBranchesItemMap/ContactusBranchesItemMap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BranchModalImage from "../BranchModalImage/BranchModalImage";

function ContactusBranchesItem({ branches }) {
  const [modalMapId, setModalMapId] = useState();
  const [modalImageId, setModalImageId] = useState();
  const {
    address,
    name_fa,
    phone_number,
    working_hours,
    name,
    branch_id,
    branch_images,
  } = branches;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isOpen, modalType, openModalHandler, selectedItem, modalId } =
    useModal();

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

  const handleBranchesModalImage = () => {
    const newModalId = uuidv4();
    setModalImageId(newModalId);
    openModalHandler("branchModalImage", null, newModalId);
  };

  const handleBranchesModalMap = () => {
    const newModalId = uuidv4();
    setModalMapId(newModalId);
    openModalHandler("BranchesItemMap", branches, newModalId);
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center overflow-hidden rounded-md border border-gray-300 md:h-72 md:max-w-8xl md:flex-row">
      <div
        onClick={() => handleBranchesModalImage()}
        className="h-28 w-full flex-none cursor-pointer bg-gray-600 md:h-full md:w-1/2 lg:h-full lg:max-w-3xl"
      >
        <img
          src={branch_images[0]}
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
            onClick={() => handleBranchesModalMap()}
            className="w-full max-w-32 text-nowrap rounded-md bg-green-primary-500 py-1 text-white"
          >
            دیدن در نقشه
          </button>
        </div>
      </div>
      {isOpen && modalType === "BranchesItemMap" && modalId === modalMapId && (
        <ContactusBranchesItemMap
          branches={selectedItem}
          modalMapId={modalMapId}
        />
      )}
      {isOpen && modalType == "branchModalImage" && modalId == modalImageId && (
        <BranchModalImage
          branch_images={branch_images}
          modalImageId={modalImageId}
        />
      )}
    </div>
  );
}

export default ContactusBranchesItem;
