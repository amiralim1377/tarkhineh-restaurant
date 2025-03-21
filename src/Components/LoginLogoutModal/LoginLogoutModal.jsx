import { Dialog } from "@headlessui/react";
import useModal from "../React Custom Hooks/useModal/useModal";
import { useState } from "react";
import DashboardLoginForm from "../DashboardLoginForm.jsx/DashboardLoginForm";
import DashboardSignupForm from "../DashboardSignupForm/DashboardSignupForm";

function LoginLogoutModal({ modalLoginId }) {
  const { isOpen, modalType, closeModalHandler, modalId } = useModal();

  const [isSelectedLogin, setIsSelectedLogin] = useState(true);

  return (
    <Dialog
      open={isOpen && modalType === "LoginLogout" && modalId == modalLoginId}
      onClose={closeModalHandler}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <Dialog.Panel className="flex w-full max-w-xs flex-col items-center justify-between rounded-lg bg-white p-2 md:max-w-md">
          <Dialog.Title className="flex items-center justify-center text-center text-lg font-bold text-gray-900">
            <img src="/logo/Logo.png" className="py-2" alt="" />
          </Dialog.Title>
          <Dialog.Description className="mx-auto w-full cursor-pointer px-4 text-sm text-gray-500">
            {isSelectedLogin ? (
              <DashboardLoginForm setLoginFalse={setIsSelectedLogin} />
            ) : (
              <DashboardSignupForm setLoginFalse={setIsSelectedLogin} />
            )}
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default LoginLogoutModal;
