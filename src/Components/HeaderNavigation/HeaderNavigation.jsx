import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import HeaderNavbarMenu from "../HeaderNavbarMenu/HeaderNavbarMenu";

function HeaderNavigation() {
  const selectedBranch = useSelector(
    (state) => state.branches?.selectedBranch?.id,
  );
  const boolSelectedBranch = Boolean(selectedBranch);

  const notifyError = () =>
    toast.error("لطفا اول شعبه ی مد نظر برای سفارش را انتخاب نمایید", {
      position: "top-left",
      style: {
        background: "#E50046",
        color: "white",
      },
    });
  return (
    <nav className="mx-auto hidden md:block">
      <ul className="font-Esteedad flex items-center justify-between gap-3 text-base font-normal leading-9 text-[#717171] transition-all duration-300 lg:gap-5 lg:text-xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                : "transition-all duration-300"
            }
          >
            صفحه اصلی
          </NavLink>
        </li>
        <HeaderNavbarMenu />
        <li>
          <NavLink
            to={boolSelectedBranch ? "/menu" : ""}
            className={({ isActive }) =>
              isActive && boolSelectedBranch
                ? "block font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                : "transition-all duration-300"
            }
            onClick={() => {
              if (!boolSelectedBranch) {
                notifyError();
              }
            }}
          >
            منو
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/franchise"
            className={({ isActive }) =>
              isActive
                ? "block font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                : "transition-all duration-300"
            }
          >
            اعطای نمایندگی
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "block font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                : "transition-all duration-300"
            }
          >
            درباره ما
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "block font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                : "transition-all duration-300"
            }
          >
            تماس باما
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
