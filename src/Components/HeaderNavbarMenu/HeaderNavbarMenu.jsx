import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

function HeaderNavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("شعبه");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleBranchClick = (branchName) => {
    setSelectedBranch(`شعبه ${branchName}`);
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
        <span>{selectedBranch}</span>
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
              to="/branches/chalous"
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
              to="/branches/aghadsie"
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
