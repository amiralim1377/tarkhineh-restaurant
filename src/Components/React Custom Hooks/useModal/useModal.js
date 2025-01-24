import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../../Slice/modalSlice/modalSlice";

const useModal = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.modal.selectedItem);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalType = useSelector((state) => state.modal.modalType);

  const openModalHandler = (type, item = null) => {
    dispatch(openModal({ type, item }));
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return {
    selectedItem,
    isOpen,
    modalType,
    openModalHandler,
    closeModalHandler,
  };
};

export default useModal;
