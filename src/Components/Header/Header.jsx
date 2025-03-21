import { Link } from "react-router-dom";
import HeaderNavLinkLeft from "../HeaderNavLinkLeft/HeaderNavLinkLeft";
import MobileMenu from "../MobileMenu/MobileMenu";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import { fetchBranches } from "../../Services/fetchBranches";
import { useQuery } from "@tanstack/react-query";

function Header() {
  const {
    data: branches,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  });

  if (isLoading) {
    return <div>Loading branches...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-center bg-white px-2 py-9 shadow-md transition-all duration-300">
      <div className="mx-auto flex w-full max-w-8xl flex-row items-center justify-between">
        <MobileMenu branches={branches} />
        <div className="flex items-center justify-center">
          <Link className="" to="/">
            <img
              src="/logo/Color=Green, Size=Big.svg"
              alt="Logo"
              className="hidden object-cover md:block"
            />
            <img
              src="/logo/Color=Green, Size=Small.svg"
              alt="Logo"
              className="object-cover md:hidden"
            />
          </Link>
        </div>

        <HeaderNavigation />
        <HeaderNavLinkLeft />
      </div>
    </header>
  );
}

export default Header;
