import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import { useQuery } from "@tanstack/react-query";
import fetchProfileImage from "../../Services/fetchProfileImage";
import useUserData from "../React Custom Hooks/useUserData/useUserData";

function DashboardMobile() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(true);
  const [fade, setFade] = useState(false);

  const {
    userId,
    isUserLoading,
    userError,
    userData,
    isUserDataLoading,
    userDataError,
  } = useUserData();

  const {
    data: profileImageUrl,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["profileImage", userId],
    queryFn: () => fetchProfileImage(userId),
  });

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

  if (isUserLoading || isUserDataLoading) {
    return <div>Loading...</div>;
  }

  if (userError || userDataError) {
    return <div>Error loading user data</div>;
  }

  if (!userData) {
    return null;
  }

  const { firstname, lastname, phonenumber } = userData;

  return (
    <div className="block md:hidden">
      {showMenu && (
        <div className="divide-y divide-gray-500 px-2 py-4">
          <div className="flex flex-row items-center gap-3 py-1">
            <div>
              <img
                src={profileImageUrl ? profileImageUrl : `/icons/Ellipse.svg`}
                className="h-10 w-10 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center text-xs">
              <span className="text-base text-[#353535]">{`${firstname || "کاربر"} ${lastname || "ترخینه"}`}</span>
              <span className="text-xs text-[#717171]">{`${phonenumber}`}</span>
            </div>
          </div>
          <ul className="flex flex-col space-y-4 py-2 text-xs">
            <DashboardSidebar handleMenuClick={handleMenuClick} />
          </ul>
        </div>
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
