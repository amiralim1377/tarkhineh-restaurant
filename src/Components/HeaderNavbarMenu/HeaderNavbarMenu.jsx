import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBranch } from "../../Slice/branchesSlice";

function HeaderNavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const selectedBranch = useSelector((state) => state.branches.selectedBranch);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleBranchClick = (branchName) => {
    dispatch(setSelectedBranch(branchName));
    setIsOpen(false); // بستن منو بعد از انتخاب
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // بستن منو وقتی که خارج از آن کلیک می‌شود
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
        className={`flex items-center transition-all duration-300 ${selectedBranch !== "شعبه" ? "text-green-primary-500" : ""}`}
      >
        <span>{`شعبه ${selectedBranch || ""}`}</span>
        {isOpen ? (
          <ExpandLess className="ml-2 rounded-full hover:bg-gray-200" />
        ) : (
          <ExpandMore className="ml-2 rounded-full hover:bg-gray-200" />
        )}
      </button>
      {isOpen && (
        <ul className="absolute right-0 z-50 mt-2 w-48 rounded-lg border border-gray-300 bg-white shadow-lg">
          <li className="border-b border-gray-300">
            <NavLink
              to="/branches/ekbatan"
              onClick={() => handleBranchClick("اکباتان")}
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                  : "block px-4 py-2 transition-all duration-300 hover:bg-gray-100"
              }
            >
              اکباتان
            </NavLink>
          </li>
          <li className="border-b border-gray-300">
            <NavLink
              to="/branches/chalus"
              onClick={() => handleBranchClick("چالوس")}
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                  : "block px-4 py-2 transition-all duration-300 hover:bg-gray-100"
              }
            >
              چالوس
            </NavLink>
          </li>
          <li className="border-b border-gray-300">
            <NavLink
              to="/branches/aghdasieh"
              onClick={() => handleBranchClick("اقدسیه")}
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                  : "block px-4 py-2 transition-all duration-300 hover:bg-gray-100"
              }
            >
              اقدسیه
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/branches/vanak"
              onClick={() => handleBranchClick("ونک")}
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
                  : "block px-4 py-2 transition-all duration-300 hover:bg-gray-100"
              }
            >
              ونک
            </NavLink>
          </li>
        </ul>
      )}
    </li>
  );
}

export default HeaderNavbarMenu;
