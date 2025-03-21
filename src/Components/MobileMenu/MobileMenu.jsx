import { Popover } from "@headlessui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedBranch } from "../../Slice/branchesSlice/branchesSlice";
import { setCategory } from "../../Slice/categorySlice/categorySlice";

function MobileMenu({ branches }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleGoToBranchesPage = (branch, closePopover) => {
    dispatch(
      setSelectedBranch({
        id: branch.branch_id,
        name: branch.name,
        location: { lat: `${branch.latitude}`, lng: `${branch.longitude}` },
      }),
    ),
      dispatch(setCategory(branch.default_category));
    navigate(`/branches/${branch.name}`);
    closePopover();
    setIsMenuOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        id="menu-btn"
        className="hamburger z-30 block transition-transform duration-300 focus:outline-none md:hidden"
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>

      {isMenuOpen && (
        <>
          <div
            id="backdrop"
            className={`fixed inset-0 z-10 bg-black transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? "opacity-60" : "pointer-events-none opacity-0"
            }`}
            onClick={toggleMenu}
          ></div>

          <div
            id="menu"
            className={`absolute right-0 top-0 z-50 w-full max-w-52 transform rounded-l-lg bg-white transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex h-screen w-full flex-col items-end justify-start font-bold text-[#353535]">
              <div className="relative h-32 w-full bg-gray-400">
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <img
                  src="/menu/mobile-menu/832c8a64b2c34d3480247217b7544394.jpg"
                  alt=""
                  className="h-32 w-full object-cover"
                />
                <img
                  src="/logo/Vector.svg"
                  className="absolute inset-3"
                  alt="Logo"
                />
                <div
                  className="absolute left-3 top-3 cursor-pointer text-white"
                  onClick={toggleMenu}
                >
                  ✖
                </div>
              </div>

              <div className="flex w-full flex-col items-center justify-center space-y-4 divide-y-2 p-2">
                <div
                  onClick={() => {
                    navigate("/");
                    toggleMenu();
                  }}
                  className="flex w-full cursor-pointer gap-1 p-1"
                >
                  <img src="/icons/mobile-menu/home.svg" alt="" />
                  <span className="text-xs">صفحه ی اصلی</span>
                </div>

                <Popover className="relative flex w-full flex-col">
                  {({ open, close }) => (
                    <>
                      <div className="flex w-full cursor-pointer flex-row items-start justify-between p-1">
                        <div className="flex items-center justify-between gap-1">
                          <img
                            src="/icons/mobile-menu/home-hashtag.svg"
                            alt="Icon"
                          />
                          <span className="text-xs">شعبه</span>
                        </div>
                        <Popover.Button>
                          <img
                            src="/icons/Direct=down, Color=Black.svg"
                            className={`w-4 rounded-full transition-transform duration-300 hover:bg-gray-200 ${
                              open ? "rotate-180" : ""
                            }`}
                            alt="Toggle"
                          />
                        </Popover.Button>
                      </div>

                      <Popover.Panel
                        className={`transition-transform duration-300 ease-in-out ${
                          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
                        }`}
                      >
                        <div className="flex flex-col space-y-2 p-2 text-xs">
                          {branches?.map((branch) => (
                            <div
                              key={branch.branch_id}
                              onClick={() =>
                                handleGoToBranchesPage(branch, close)
                              }
                              className="cursor-pointer"
                            >
                              {branch.name_fa}
                            </div>
                          ))}
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>

                <div
                  onClick={() => {
                    navigate("/about-us");
                    toggleMenu();
                  }}
                  className="flex w-full cursor-pointer items-center gap-1 p-1"
                >
                  <img src="/icons/mobile-menu/profile-2user.svg" alt="" />
                  <span className="text-xs">درباره ما</span>
                </div>
                <div
                  onClick={() => {
                    navigate("/contact-us");
                    toggleMenu();
                  }}
                  className="flex w-full cursor-pointer items-center gap-1 p-1"
                >
                  <img src="/icons/mobile-menu/call-calling.svg" alt="" />
                  <span className="text-xs">تماس با ما</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MobileMenu;
