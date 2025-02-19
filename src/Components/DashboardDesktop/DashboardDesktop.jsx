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

  const { email, firstname, lastname, phonenumber, username } = userData;

  return (
    <div className="mx-auto hidden max-w-8xl py-8 md:block">
      <div className="flex flex-row items-start gap-10">
        <aside className="w-1/4 divide-y-2 rounded-lg border border-gray-300 bg-white p-4">
          <div className="flex flex-row items-center gap-3 py-1">
            <div>
              <img
                src={profileImageUrl ? profileImageUrl : `/icons/Ellipse.svg`}
                className="h-20 w-20 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center space-y-2 text-base">
              <span className="text-base text-[#353535]">{`${firstname} ${lastname}`}</span>
              <span className="text-xs text-[#717171]">{`${email}`}</span>
              <span className="text-xs text-[#717171]">{`${phonenumber}`}</span>
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
