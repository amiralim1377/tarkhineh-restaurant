import { NavLink } from "react-router-dom";

function MenupageNavbar() {
  return (
    <div className="mx-auto bg-[#EDEDED]">
      <div className="mx-auto max-w-md md:max-w-8xl">
        <nav>
          <ul className="flex items-center gap-6 px-2 py-5 text-sm leading-9 text-[#717171] md:text-xl">
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "block font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                    : "transition-all duration-300"
                }
              >
                غذای اصلی
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "block font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                    : "transition-all duration-300"
                }
              >
                پیش غذا
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "block font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                    : "transition-all duration-300"
                }
              >
                دسر
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "block font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                    : "transition-all duration-300"
                }
              >
                نوشیدنی
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenupageNavbar;
