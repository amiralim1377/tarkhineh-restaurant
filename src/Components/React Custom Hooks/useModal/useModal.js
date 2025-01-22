import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../../Slice/modalSlice/modalSlice";

const useModal = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.modal.selectedItem);
  const isOpen = useSelector((state) => state.modal.isOpen);

  const openModalHandler = (item) => {
    dispatch(openModal(item));
  };

  const closeModalHandler = (item) => {
    dispatch(closeModal(item));
  };

  return {
    selectedItem,
    isOpen,
    openModalHandler,
    closeModalHandler,
  };
};

export default useModal;
