import { Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function DashboardMenuDropdown() {
  const navigate = useNavigate();
  const location = useLocation();
  const [icon, setIcon] = useState("/icons/user.svg");
  const [background, setBackground] = useState("bg-[#E5F2E9]");

  const activePaths = useMemo(
    () => [
      "/dashboard",
      "/dashboard/profile",
      "/dashboard/ordertracking",
      "/dashboard/favorites",
      "/dashboard/myaddresses",
    ],
    [],
  );

  useEffect(() => {
    if (activePaths.includes(location.pathname)) {
      setBackground("bg-green-primary-500");
      setIcon("/icons/user.svg");
    } else {
      setBackground("bg-[#E5F2E9]");
      setIcon("/icons/user2.svg");
    }
  }, [location.pathname, activePaths]);

  return (
    <Popover className="relative transition-transform duration-300 hover:scale-105">
      {({ open }) => (
        <>
          <Popover.Button
            className={`flex w-[34px] items-center justify-center rounded-md p-1 md:h-10 md:w-14 ${background}`}
          >
            <img
              src={icon}
              alt="User"
              className="h-4 w-4 object-cover md:h-6 md:w-6"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/dashboard/profile");
              }}
            />
            <img
              src={`${activePaths.includes(location.pathname) ? "/icons/arrow-down.svg" : "/icons/arrow-down-green.svg"}`}
              className={`cursor-pointer transition-transform duration-200 hover:rounded-full hover:bg-gray-300 ${open ? "rotate-0" : "rotate-180"} `}
              alt=""
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-0 z-10 mt-5 w-32 rounded-lg bg-white shadow-lg md:w-40">
              <div className="grid w-full grid-cols-1 rounded-lg bg-[#E5F2E9] px-4 py-6 text-xs text-[#717171]">
                <Link
                  to="/dashboard/profile"
                  className="py-2 hover:text-green-primary-500 hover:underline"
                >
                  پروفایل
                </Link>
                <Link
                  to="/dashboard/ordertracking"
                  className="py-2 hover:text-green-primary-500 hover:underline"
                >
                  پیگیری سفارشات
                </Link>
                <Link
                  to="/dashboard/favorites"
                  className="py-2 hover:text-green-primary-500 hover:underline"
                >
                  علاقه مندی
                </Link>
                <Link
                  to="/dashboard/myaddresses"
                  className="py-2 hover:text-green-primary-500 hover:underline"
                >
                  آدرس های من
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default DashboardMenuDropdown;
