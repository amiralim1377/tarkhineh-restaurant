import { Outlet } from "react-router-dom";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import useUserData from "../React Custom Hooks/useUserData/useUserData";
import { useQuery } from "@tanstack/react-query";
import fetchProfileImage from "../../Services/fetchProfileImage";

function DashboardDesktop() {
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

  if (isUserLoading || isUserDataLoading) {
    return <div>Loading...</div>;
  }

  if (userError || userDataError) {
    return <div>Error loading user data</div>;
  }

  if (!userData) {
    return null;
  }

  const { email, firstname, lastname, phonenumber } = userData;

  return (
    <div className="mx-auto hidden max-w-8xl px-2 py-8 md:block">
      <div className="flex flex-row items-start gap-10">
        <aside className="w-1/4 divide-y-2 rounded-lg border border-gray-300 bg-white p-2">
          <div className="flex flex-row items-center justify-start gap-3 py-1">
            <div className="flex items-center justify-center p-1">
              <img
                src={profileImageUrl ? profileImageUrl : `/icons/Ellipse.svg`}
                className="h-7 w-7 rounded-full object-cover lg:h-10 lg:w-10 xl:h-16 xl:w-16"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-base text-[#353535]">{`${firstname || "کاربر"} ${lastname || "ترخینه"}`}</span>
              <span className="text-xs text-[#717171]">{`${phonenumber}`}</span>
              <span className="flex-wrap text-[10px] text-[#717171] lg:text-xs">{`${email}`}</span>
            </div>
          </div>
          <DashboardSidebar />
        </aside>
        <main className="w-3/4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardDesktop;
