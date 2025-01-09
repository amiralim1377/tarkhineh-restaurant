import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white px-2 py-9 shadow-2xl transition-all duration-300">
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
          <img src="/logo/Logo.png" alt="Logo" className="h-10" />
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
            <li>
              <NavLink
                to="/branches"
                className={({ isActive }) =>
                  isActive
                    ? "block font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                    : "transition-all duration-300"
                }
              >
                شعبه
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive
                    ? "block font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                    : "transition-all duration-300"
                }
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
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="hidden rounded-md bg-[#E5F2E9] p-2 md:block">
            <img
              src="/icons/search-normal.svg"
              alt="Search"
              className="h-5 w-5"
            />
          </div>
          <div className="rounded-md bg-[#E5F2E9] p-2 transition-transform duration-300">
            <img
              src="/icons/shopping-cart.svg"
              alt="Shopping Cart"
              className="h-5 w-5"
            />
          </div>
          <div className="rounded-md bg-[#E5F2E9] p-2 transition-transform duration-300">
            <img src="/icons/user2.svg" alt="User" className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
