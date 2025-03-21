import { v4 as uuidv4 } from "uuid";
import useModal from "../React Custom Hooks/useModal/useModal";
import { useState } from "react";
import SearchModalHomePage from "../SearchModalHomePage/SearchModalHomePage";
import { useSelector } from "react-redux";

function HeaderNavLinkLeftSearchIcon() {
  const [searchModalId, setSearchModalId] = useState();
  const { isOpen, modalType, openModalHandler, modalId } = useModal();
  const selectedBranch = useSelector(
    (state) => state.branches?.selectedBranch?.id,
  );
  const isSelectedBranch = Boolean(selectedBranch);

  const handleOpenSearchModal = () => {
    const newModalId = uuidv4();
    setSearchModalId(newModalId);
    openModalHandler("searchModalId", null, newModalId);
  };
  return (
    <>
      <div
        onClick={handleOpenSearchModal}
        className="hidden cursor-pointer rounded-md bg-[#E5F2E9] p-2 transition-transform duration-300 hover:scale-105 md:block"
      >
        <img src="/icons/search-normal.svg" alt="Search" className="h-6 w-6" />
      </div>
      {isOpen && modalType == "searchModalId" && modalId == searchModalId && (
        <SearchModalHomePage searchModalId={searchModalId} />
      )}
    </>
  );
}

export default HeaderNavLinkLeftSearchIcon;
