import { NavLink, useLocation } from "react-router-dom";
import useCartCalculations from "../React Custom Hooks/useCartCalculations/useCartCalculations";
import { useEffect, useState } from "react";
import useModal from "../React Custom Hooks/useModal/useModal";
import LoginLogoutModal from "../LoginLogoutModal/LoginLogoutModal";

function HeaderNavLinkLeft() {
  const { totalItems } = useCartCalculations();
  const location = useLocation();
  const [background, setBackground] = useState("bg-[#E5F2E9]");
  const [icon, setIcon] = useState("/icons/shopping-cart.svg");
  const { isOpen, modalType, openModalHandler } = useModal();

  useEffect(() => {
    const activePaths = ["/cart", "/completion-of-information", "/payment"];
    if (activePaths.includes(location.pathname)) {
      setBackground("bg-green-primary-500");
      setIcon("/icons/Shop_selected.svg");
    } else {
      setBackground("bg-[#E5F2E9]");
      setIcon("/icons/shopping-cart.svg");
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <NavLink>
        <div className="hidden rounded-md bg-[#E5F2E9] p-2 md:block">
          <img
            src="/icons/search-normal.svg"
            alt="Search"
            className="h-5 w-5"
          />
        </div>
      </NavLink>
      <NavLink to="cart">
        {({ isActive }) => (
          <div
            className={`relative rounded-md p-2 transition-transform duration-300 ${isActive ? "bg-green-primary-500" : background}`}
          >
            <img
              src={isActive ? "/icons/Shop_selected.svg" : icon}
              alt="Shopping Cart"
              className="h-5 w-5"
            />
            {totalItems !== 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-primary-500 text-center text-[10px] text-white">
                {totalItems}
              </span>
            )}
          </div>
        )}
      </NavLink>
      <div className="rounded-md bg-[#E5F2E9] p-2 transition-transform duration-300">
        <img
          onClick={() => openModalHandler("LoginLogout")}
          src="/icons/user2.svg"
          alt="User"
          className="h-5 w-5 cursor-pointer"
        />
      </div>
      {isOpen && modalType == "LoginLogout" && <LoginLogoutModal />}
    </div>
  );
}

export default HeaderNavLinkLeft;
