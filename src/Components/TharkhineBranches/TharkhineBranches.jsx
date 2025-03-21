import { useDispatch } from "react-redux";
import { setSelectedBranch } from "../../Slice/branchesSlice/branchesSlice";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../../Slice/categorySlice/categorySlice";
import useModal from "../React Custom Hooks/useModal/useModal";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BranchModalImage from "../BranchModalImage/BranchModalImage";

function TharkhineBranches({ branches }) {
  const { address, name_fa, branch_id, branch_images, name } = branches;

  const [modalImageId, setModalImageId] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToBranchesPage = () => {
    dispatch(
      setSelectedBranch({
        id: branch_id,
        name,
        location: { lat: `${branches.latitude}`, lng: `${branches.longitude}` },
      }),
    );
    dispatch(setCategory(branches.default_category));
    navigate(`/branches/${branches.name}`);
  };

  const { isOpen, modalType, openModalHandler, modalId } = useModal();

  const handleBranchesModalImage = () => {
    const newModalId = uuidv4();
    setModalImageId(newModalId);
    openModalHandler("branchModalImage", null, newModalId);
  };

  return (
    <div className="relative flex w-full flex-row items-center justify-center overflow-hidden rounded-lg border transition-all duration-500 ease-in-out hover:border-green-primary-500 hover:shadow-md md:flex-col">
      <div
        onClick={handleBranchesModalImage}
        className="h-24 w-1/2 transform cursor-pointer transition-transform duration-500 ease-in-out md:h-52 md:w-full"
      >
        <img
          src={branch_images[0]}
          className="h-full w-full object-cover object-center md:h-full"
          alt=""
        />
      </div>
      <div className="group bottom-0 z-30 flex w-full flex-col items-center justify-center bg-white p-4 transition-all duration-500 ease-in-out md:absolute md:h-20 hover:md:min-h-40 hover:md:justify-between group-hover:md:translate-y-[-20px]">
        <h4 className="text-sm font-semibold md:text-xl">شعبه {name_fa}</h4>
        <p className="text-center text-xs md:p-2 md:text-sm">{address}</p>
        <button
          onClick={() => handleGoToBranchesPage()}
          className="hidden transform items-center rounded-lg border border-green-primary-500 p-2 text-green-primary-500 opacity-0 transition-opacity duration-500 ease-in-out group-hover:md:flex group-hover:md:translate-y-0 group-hover:md:opacity-100"
        >
          صفحه شعبه
          <img src="/icons/arrow-left-green.svg" className="" alt="" />
        </button>
      </div>
      {isOpen && modalType == "branchModalImage" && modalId == modalImageId && (
        <BranchModalImage
          branch_images={branch_images}
          modalImageId={modalImageId}
        />
      )}
    </div>
  );
}

export default TharkhineBranches;
