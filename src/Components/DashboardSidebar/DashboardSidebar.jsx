import { NavLink } from "react-router-dom";

function DashboardSidebar() {
  return (
    <div>
      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          isActive
            ? "block w-full py-2 text-base font-bold text-green-primary-500 transition-all duration-300"
            : "block w-full py-2 font-bold text-[#353535] transition-all duration-300"
        }
      >
        {({ isActive }) => (
          <li className="flex flex-row items-center justify-start gap-1">
            <img
              src={
                isActive ? "/dashboard/usergreen.svg" : "/dashboard/user.svg"
              }
              alt=""
            />
            <span>پروفایل</span>
          </li>
        )}
      </NavLink>
      <NavLink
        to="/dashboard/ordertracking"
        className={({ isActive }) =>
          isActive
            ? "block w-full py-2 text-base font-bold text-green-primary-500 transition-all duration-300"
            : "block w-full py-2 font-bold text-[#353535] transition-all duration-300"
        }
      >
        {({ isActive }) => (
          <li className="flex flex-row items-center justify-start gap-1">
            <img
              src={
                isActive
                  ? "/dashboard/wallet-2-green.svg"
                  : "/dashboard/wallet-2.svg"
              }
              alt=""
            />
            <span>پیگیری سفارشات</span>
          </li>
        )}
      </NavLink>
      <NavLink
        to="/dashboard/favorites"
        className={({ isActive }) =>
          isActive
            ? "block w-full py-2 text-base font-bold text-green-primary-500 transition-all duration-300"
            : "block w-full py-2 font-bold text-[#353535] transition-all duration-300"
        }
      >
        {({ isActive }) => (
          <li className="flex flex-row items-center justify-start gap-1">
            <img
              src={
                isActive
                  ? "/dashboard/favorite_16dp_417F56_FILL1_wght400_GRAD0_opsz20.svg"
                  : "/dashboard/heart.svg"
              }
              alt=""
            />
            <span>علاقمندی‌ها</span>
          </li>
        )}
      </NavLink>
      <NavLink
        to="/dashboard/myaddresses"
        className={({ isActive }) =>
          isActive
            ? "block w-full py-2 text-base font-bold text-green-primary-500 transition-all duration-300"
            : "block w-full py-2 font-bold text-[#353535] transition-all duration-300"
        }
      >
        {({ isActive }) => (
          <li className="flex flex-row items-center justify-start gap-1">
            <img
              src={
                isActive
                  ? "/dashboard/location.-green.svg"
                  : "/dashboard/location.svg"
              }
              alt=""
            />
            <span>آدرس‌های من</span>
          </li>
        )}
      </NavLink>
      <NavLink
        to="/dashboard/profile"
        className="block w-full py-2 font-bold text-red-700 transition-all duration-300"
      >
        <li className="flex flex-row items-center justify-start gap-1">
          <img src="/dashboard/logout.svg" alt="" />
          <span>خروج</span>
        </li>
      </NavLink>
    </div>
  );
}

export default DashboardSidebar;
