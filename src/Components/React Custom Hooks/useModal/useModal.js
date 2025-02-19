import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../../Slice/modalSlice/modalSlice";

const useModal = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.modal.selectedItem);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalType = useSelector((state) => state.modal.modalType);
  const modalId = useSelector((state) => state.modal.modalId);

  const openModalHandler = (type, item = null, id = null) => {
    dispatch(openModal({ type, item, id }));
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return {
    selectedItem,
    isOpen,
    modalType,
    modalId,
    openModalHandler,
    closeModalHandler,
  };
};

export default useModal;
