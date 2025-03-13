import { Link, NavLink } from "react-router-dom";
import HeaderNavbarMenu from "../HeaderNavbarMenu/HeaderNavbarMenu";
import HeaderNavLinkLeft from "../HeaderNavLinkLeft/HeaderNavLinkLeft";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function Header() {
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
    <header className="sticky top-0 z-50 w-full bg-white px-2 py-9 shadow-md transition-all duration-300">
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between">
        <button
          id="menu-btn"
          className="hamburger z-30 block transition-transform duration-300 focus:outline-none md:hidden"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div>
          <Link to="/">
            <img src="/logo/Logo.png" alt="Logo" className="h-10" />
          </Link>
        </div>
        <nav className="hidden max-w-4xl md:block">
          <ul className="font-Esteedad flex items-center gap-3 text-base font-normal leading-9 text-[#717171] transition-all duration-300 lg:gap-5 lg:text-xl">
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
        <HeaderNavLinkLeft />
      </div>
    </header>
  );
}

export default Header;
