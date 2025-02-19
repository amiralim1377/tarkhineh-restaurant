import { Dialog } from "@headlessui/react";
import useModal from "../React Custom Hooks/useModal/useModal";
import supabase from "../../Services/supabase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Slice/authSlice/authSlice";
import { resetUser } from "../../Slice/userSlice/userSlice";

function DashboardModalExit() {
  const { isOpen, modalType, closeModalHandler } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = async () => {
    // Sign out the user from Supabase
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    // Remove the authentication token from Local Storage
    localStorage.removeItem("authToken");
    // Dispatch the logout action to update the Redux state
    dispatch(logout());
    dispatch(resetUser());
    closeModalHandler();
    // Navigate the user to the home page
    navigate("/");
  };

  return (
    <Dialog
      open={isOpen && modalType === "exitDashboard"}
      onClose={closeModalHandler}
      className="relative z-50"
    >
      {/* Overlay for the modal */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      {/* Centering the modal content */}
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <Dialog.Panel className="flex w-full max-w-xs flex-col items-center justify-between rounded-lg bg-white p-2 md:max-w-md">
          {/* Modal title */}
          <Dialog.Title className="text-center text-lg font-bold text-gray-900">
            خروج
          </Dialog.Title>
          {/* Modal description */}
          <Dialog.Description className="cursor-pointer text-sm text-gray-500">
            آیا مایل به خروج از حساب کاربری خود هستید؟
            <div className="flex w-full items-center justify-center gap-3 py-2">
              <button
                onClick={() => closeModalHandler()}
                className="rounded-lg border border-green-primary-500 px-4 py-2 text-green-primary-500"
              >
                خیر
              </button>
              <button
                onClick={signOut} // Call signOut to log out the user
                className="rounded-lg border border-red-500 px-4 py-2 text-red-500"
              >
                بله
              </button>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default DashboardModalExit;
