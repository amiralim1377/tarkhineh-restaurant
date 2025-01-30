import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";

function DashboardMobile() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768 && location.pathname !== "/dashboard") {
      setShowMenu(false);
      setFade(true);
    } else {
      setShowMenu(true);
      setFade(false);
    }
  }, [location.pathname]);

  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      setShowMenu(false);
    }
  };

  return (
    <div className="block md:hidden">
      {showMenu ? (
        <div className="divide-y divide-gray-500 px-2 py-4">
          <div className="flex flex-row items-center gap-3 py-1">
            <div>
              <img src="/icons/Ellipse.svg" alt="" />
            </div>
            <div className="flex flex-col items-center text-xs">
              <span className="text-base text-[#353535]">کاربر ترخینه</span>
              <span className="text-xs text-[#717171]">۰۹۱۴ ۸۶۴ ۳۳۵۰</span>
            </div>
          </div>
          <ul className="flex flex-col space-y-4 py-2 text-xs">
            <DashboardSidebar handleMenuClick={handleMenuClick} />
          </ul>
        </div>
      ) : (
        <button
          onClick={() => setShowMenu(true)}
          className="rounded bg-gray-200 p-2"
        >
          بازگشت به منو
        </button>
      )}
      {!showMenu && (
        <div className={fade ? "fade-in" : ""}>
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default DashboardMobile;
