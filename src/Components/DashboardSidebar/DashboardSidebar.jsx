import { NavLink } from "react-router-dom";
import { useState } from "react";
import DashboardModalExit from "../DashboardModalExit/DashboardModalExit";
import useModal from "../React Custom Hooks/useModal/useModal";

function DashboardSidebar({ handleMenuClick }) {
  const [activeItem, setActiveItem] = useState(null);
  const [delay, setDelay] = useState(false);
  const { selectedItem, isOpen, modalType, openModalHandler } = useModal();

  const handleNavLinkClick = (item) => {
    setDelay(true);
    setActiveItem(item);
    setTimeout(() => {
      setDelay(false);
    }, 600); // 0.6s delay
  };

  return (
    <div>
      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          isActive
            ? "transition-text block w-full py-2 text-base font-normal text-green-primary-500"
            : "transition-text block w-full py-2 text-sm font-normal text-[#353535]"
        }
        onClick={() => handleNavLinkClick("profile")}
      >
        {({ isActive }) => (
          <li className="flex flex-row items-center justify-start gap-1">
            <img
              src={
                isActive || activeItem === "profile"
                  ? "/dashboard/usergreen.svg"
                  : "/dashboard/user.svg"
              }
              alt=""
            />
            <span
              className={
                delay && activeItem === "profile"
                  ? "text-green-primary-500"
                  : ""
              }
            >
              پروفایل
            </span>
          </li>
        )}
      </NavLink>
      <NavLink
        to="/dashboard/ordertracking"
        className={({ isActive }) =>
          isActive
            ? "transition-text block w-full py-2 text-base font-normal text-green-primary-500"
            : "transition-text block w-full py-2 text-sm font-normal text-[#353535]"
        }
        onClick={() => handleNavLinkClick("ordertracking")}
      >
        {({ isActive }) => (
          <li className="flex flex-row items-center justify-start gap-1">
            <img
              src={
                isActive || activeItem === "ordertracking"
                  ? "/dashboard/wallet-2-green.svg"
                  : "/dashboard/wallet-2.svg"
              }
              alt=""
            />
            <span
              className={
                delay && activeItem === "ordertracking"
                  ? "text-green-primary-500"
                  : ""
              }
            >
              پیگیری سفارشات
            </span>
          </li>
        )}
      </NavLink>
      <NavLink
        to="/dashboard/favorites"
        className={({ isActive }) =>
          isActive
            ? "transition-text block w-full py-2 text-base font-normal text-green-primary-500"
            : "transition-text block w-full py-2 text-sm font-normal text-[#353535]"
        }
        onClick={() => handleNavLinkClick("favorites")}
      >
        {({ isActive }) => (
          <li className="flex flex-row items-center justify-start gap-1">
            <img
              src={
                isActive || activeItem === "favorites"
                  ? "/dashboard/favorite_16dp_417F56_FILL1_wght400_GRAD0_opsz20.svg"
                  : "/dashboard/heart.svg"
              }
              alt=""
            />
            <span
              className={
                delay && activeItem === "favorites"
                  ? "text-green-primary-500"
                  : ""
              }
            >
              علاقمندی‌ها
            </span>
          </li>
        )}
      </NavLink>
      <NavLink
        to="/dashboard/myaddresses"
        className={({ isActive }) =>
          isActive
            ? "transition-text block w-full py-2 text-base font-normal text-green-primary-500"
            : "transition-text block w-full py-2 text-sm font-normal text-[#353535]"
        }
        onClick={() => handleNavLinkClick("myaddresses")}
      >
        {({ isActive }) => (
          <li className="flex flex-row items-center justify-start gap-1">
            <img
              src={
                isActive || activeItem === "myaddresses"
                  ? "/dashboard/location.-green.svg"
                  : "/dashboard/location.svg"
              }
              alt=""
            />
            <span
              className={
                delay && activeItem === "myaddresses"
                  ? "text-green-primary-500"
                  : ""
              }
            >
              آدرس‌های من
            </span>
          </li>
        )}
      </NavLink>
      <NavLink
        to="/dashboard/profile"
        className="transition-text block w-full py-2 font-bold text-red-700"
        onClick={() => openModalHandler("exitDashboard")}
      >
        <li className="flex flex-row items-center justify-start gap-1">
          <img src="/dashboard/logout.svg" alt="" />
          <span
            className={
              delay && activeItem === "logout" ? "text-green-primary-500" : ""
            }
          >
            خروج
          </span>
        </li>
      </NavLink>
      {isOpen && modalType === "exitDashboard" && <DashboardModalExit />}
    </div>
  );
}

export default DashboardSidebar;
