import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useCartCalculations from "../React Custom Hooks/useCartCalculations/useCartCalculations";

function HeaderNavLinkLeftCartIcon() {
  const { totalItems } = useCartCalculations();
  const location = useLocation();
  const [icon, setIcon] = useState("/icons/Shop.svg");
  const [textColor, setTextColor] = useState("text-[#E5F2E9]");
  const [background, setBackground] = useState();

  useEffect(() => {
    const updateIconAndBackground = () => {
      const activePaths = ["/cart", "/completion-of-information", "/payment"];
      if (activePaths.includes(location.pathname)) {
        setIcon("/icons/Device=Desktop, Style=Active, Shopping Sign=No.svg");
        setTextColor("text-[#E5F2E9]");

        setBackground("bg-green-primary-500");
      } else {
        setIcon("/icons/Shop.svg");
        setTextColor("text-[#E5F2E9]");
      }
    };
    updateIconAndBackground();
  }, [location.pathname]);

  return (
    <NavLink to="cart">
      {({ isActive }) => (
        <div
          className={`relative z-0 rounded-md p-1 transition-transform duration-300 hover:scale-105`}
        >
          <img
            src={
              isActive
                ? "/icons/Device=Desktop, Style=Active, Shopping Sign=No.svg"
                : icon
            }
            alt="Shopping Cart"
            className="h-6 w-6 rounded-md object-cover md:h-10 md:w-10"
          />
          {totalItems !== 0 && (
            <span
              className={`absolute right-0 top-0 flex h-3 w-3 items-center justify-center rounded-full text-center text-[10px] md:h-4 md:w-4 ${isActive ? textColor : "text-[#E5F2E9]"} ${isActive ? background : "bg-green-primary-500"} `}
            >
              {totalItems}
            </span>
          )}
        </div>
      )}
    </NavLink>
  );
}

export default HeaderNavLinkLeftCartIcon;
