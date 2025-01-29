import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";

function DashboardMobile() {
  return (
    <div className="block divide-y divide-gray-500 px-2 py-4 md:hidden">
      <div className="flex flex-row items-center gap-3 py-1">
        <div>
          <img src="/icons/Ellipse.svg" alt="" />
        </div>
        <div className="flex flex-col items-center text-xs">
          <span className="text-base text-[#353535]">کاربر ترخینه</span>
          <span className="text-xs text-[#717171]">۰۹۱۴ ۸۶۴ ۳۳۵۰</span>
        </div>
      </div>
      <div>
        <ul className="flex flex-col space-y-4 py-2 text-xs">
          <DashboardSidebar />
        </ul>
      </div>
    </div>
  );
}

export default DashboardMobile;
