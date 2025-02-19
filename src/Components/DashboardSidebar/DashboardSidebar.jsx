import { NavLink } from "react-router-dom";
import { useState } from "react";
import DashboardModalExit from "../DashboardModalExit/DashboardModalExit";
import useModal from "../React Custom Hooks/useModal/useModal";

function DashboardSidebar({ handleMenuClick }) {
  const [activeItem, setActiveItem] = useState(null);
  const [delay, setDelay] = useState(false);
  const { isOpen, modalType, openModalHandler } = useModal();

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
            ? "block w-full py-2 text-base font-normal text-green-primary-500 transition-all duration-300 ease-in-out"
            : "block w-full py-2 text-sm font-normal text-[#353535] transition-all duration-300 ease-in-out"
        }
        onClick={() => handleNavLinkClick("profile")}
      >
        {({ isActive }) => (
          <li
            className={`flex transform flex-row items-center justify-start gap-1 transition-transform duration-300 ease-in-out ${
              isActive
                ? "scale-100 rounded-b-sm rounded-t-sm border-r-2 border-green-primary-500 px-2"
                : "scale-95"
            }`}
          >
            <img
              src={
                isActive || activeItem === "profile"
                  ? "/dashboard/usergreen.svg"
                  : "/dashboard/user.svg"
              }
              alt=""
            />
            <span
              className={`transition-all duration-300 ease-in-out ${
                delay && activeItem === "profile"
                  ? "pl-2 text-green-primary-500"
                  : "pl-2"
              }`}
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
            ? "block w-full py-2 text-base font-normal text-green-primary-500 transition-all duration-300 ease-in-out"
            : "block w-full py-2 text-sm font-normal text-[#353535] transition-all duration-300 ease-in-out"
        }
        onClick={() => handleNavLinkClick("ordertracking")}
      >
        {({ isActive }) => (
          <li
            className={`flex transform flex-row items-center justify-start gap-1 transition-transform duration-300 ease-in-out ${
              isActive
                ? "scale-100 rounded-b-sm rounded-t-sm border-r-2 border-green-primary-500 px-2"
                : "scale-95"
            }`}
          >
            <img
              src={
                isActive || activeItem === "ordertracking"
                  ? "/dashboard/wallet-2-green.svg"
                  : "/dashboard/wallet-2.svg"
              }
              alt=""
            />
            <span
              className={`transition-all duration-300 ease-in-out ${
                delay && activeItem === "ordertracking"
                  ? "pl-2 text-green-primary-500"
                  : "pl-2"
              }`}
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
            ? "block w-full py-2 text-base font-normal text-green-primary-500 transition-all duration-300 ease-in-out"
            : "block w-full py-2 text-sm font-normal text-[#353535] transition-all duration-300 ease-in-out"
        }
        onClick={() => handleNavLinkClick("favorites")}
      >
        {({ isActive }) => (
          <li
            className={`flex flex-row items-center justify-start gap-1 transition-all duration-300 ease-in-out ${
              isActive
                ? "scale-100 rounded-b-sm rounded-t-sm border-r-2 border-green-primary-500 px-2"
                : "scale-95"
            }`}
          >
            <img
              src={
                isActive || activeItem === "favorites"
                  ? "/dashboard/favorite_16dp_417F56_FILL1_wght400_GRAD0_opsz20.svg"
                  : "/dashboard/heart.svg"
              }
              alt=""
            />
            <span
              className={`transition-all duration-300 ease-in-out ${
                delay && activeItem === "favorites"
                  ? "pl-2 text-green-primary-500"
                  : "pl-2"
              }`}
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
            ? "block w-full py-2 text-base font-normal text-green-primary-500 transition-all duration-300 ease-in-out"
            : "block w-full py-2 text-sm font-normal text-[#353535] transition-all duration-300 ease-in-out"
        }
        onClick={() => handleNavLinkClick("myaddresses")}
      >
        {({ isActive }) => (
          <li
            className={`flex flex-row items-center justify-start gap-1 transition-all duration-300 ease-in-out ${
              isActive
                ? "scale-100 rounded-b-sm rounded-t-sm border-r-2 border-green-primary-500 px-2"
                : "scale-95"
            }`}
          >
            <img
              src={
                isActive || activeItem === "myaddresses"
                  ? "/dashboard/location.-green.svg"
                  : "/dashboard/location.svg"
              }
              alt=""
            />
            <span
              className={`transition-all duration-300 ease-in-out ${
                delay && activeItem === "myaddresses"
                  ? "pl-2 text-green-primary-500"
                  : "pl-2"
              }`}
            >
              آدرس‌های من
            </span>
          </li>
        )}
      </NavLink>

      <button
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
      </button>
      {isOpen && modalType === "exitDashboard" && <DashboardModalExit />}
    </div>
  );
}

export default DashboardSidebar;
