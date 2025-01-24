import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setSelectedBranch } from "../../Slice/branchesSlice/branchesSlice";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { fetchBranches } from "../../Services/fetchBranches";
import { setCategory } from "../../Slice/categorySlice/categorySlice";

function HeaderNavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const selectedBranch = useSelector((state) => state.branches.selectedBranch);

  const {
    data: branches,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  });
  // console.log(branches);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleBranchClick = (branch) => {
    dispatch(
      setSelectedBranch({
        id: branch.id,
        name: branch.name,
        location: { lat: `${branch.latitude}`, lng: `${branch.longitude}` },
      }),
    );
    dispatch(setCategory(branch.default_category));
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex items-center transition-all duration-300 ${
          selectedBranch.name ? "text-green-primary-500" : ""
        }`}
      >
        <span>{`شعبه ${branches?.find((branch) => branch.name === selectedBranch.name)?.name_fa || ""}`}</span>
        {isOpen ? (
          <ExpandLess className="ml-2 rounded-full hover:bg-gray-200" />
        ) : (
          <ExpandMore className="ml-2 rounded-full hover:bg-gray-200" />
        )}
      </button>
      {isOpen && (
        <ul className="absolute right-0 z-50 mt-2 w-48 rounded-lg border border-gray-300 bg-white shadow-lg">
          {branches &&
            branches
              .filter((branch) => branch.id !== selectedBranch.id)
              .map((branch) => (
                <li className="border-b border-gray-300" key={branch.id}>
                  <NavLink
                    to={`/branches/${branch.name}`}
                    onClick={() => handleBranchClick(branch)}
                    className={({ isActive }) =>
                      selectedBranch.id === branch.id
                        ? "block w-full px-4 py-2 font-bold text-green-primary-500 transition-all duration-300"
                        : "block w-full px-4 py-2 transition-all duration-300 hover:bg-gray-100"
                    }
                  >
                    {branch.name_fa}
                  </NavLink>
                </li>
              ))}
        </ul>
      )}
    </li>
  );
}

export default HeaderNavbarMenu;
