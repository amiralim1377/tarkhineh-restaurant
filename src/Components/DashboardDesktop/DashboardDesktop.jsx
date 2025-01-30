import { Outlet } from "react-router-dom";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";

function DashboardDesktop() {
  return (
    <div className="mx-auto hidden max-w-8xl py-8 md:block">
      <div className="flex flex-row items-start gap-10">
        <aside className="w-1/4 divide-y-2 rounded-lg border border-gray-300 bg-white p-4">
          <div className="flex flex-row items-center gap-3 py-1">
            <div>
              <img src="/icons/Ellipse.svg" className="h-20 w-20" alt="" />
            </div>
            <div className="flex flex-col items-center text-base">
              <span className="text-base text-[#353535]">کاربر ترخینه</span>
              <span className="text-xs text-[#717171]">۰۹۱۴ ۸۶۴ ۳۳۵۰</span>
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
