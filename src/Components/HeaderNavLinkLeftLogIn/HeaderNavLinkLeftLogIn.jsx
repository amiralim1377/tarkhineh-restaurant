import { useSelector } from "react-redux";
import DashboardMenuDropdown from "../DashboardMenuDropdown/DashboardMenuDropdown";
import useModal from "../React Custom Hooks/useModal/useModal";
import { useNavigate } from "react-router-dom";
import LoginLogoutModal from "../LoginLogoutModal/LoginLogoutModal";

function HeaderNavLinkLeftLogIn() {
  const { isOpen, modalType, openModalHandler } = useModal();
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const navigate = useNavigate();

  const handleUserIconClick = (e) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      openModalHandler("LoginLogout");
    } else {
      navigate("dashboard/profile");
    }
  };
  return (
    <>
      <div className="">
        {isAuthenticated ? (
          <DashboardMenuDropdown />
        ) : (
          <div
            onClick={handleUserIconClick}
            className="flex items-center justify-center rounded-md transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/Login-Logout/mobile/Device=Mobile, Style=Normal, Login State=Not Loged.svg"
              alt="User"
              className="h-6 w-6 cursor-pointer object-cover md:h-10 md:w-10"
            />
          </div>
        )}
      </div>
      {isOpen && modalType === "LoginLogout" && <LoginLogoutModal />}
    </>
  );
}

export default HeaderNavLinkLeftLogIn;
