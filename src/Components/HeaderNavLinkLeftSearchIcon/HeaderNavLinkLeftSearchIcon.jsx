import { NavLink } from "react-router-dom";

function HeaderNavLinkLeftSearchIcon() {
  return (
    <NavLink>
      <div className="hidden rounded-md bg-[#E5F2E9] p-2 transition-transform duration-300 hover:scale-105 md:block">
        <img src="/icons/search-normal.svg" alt="Search" className="h-5 w-5" />
      </div>
    </NavLink>
  );
}

export default HeaderNavLinkLeftSearchIcon;
