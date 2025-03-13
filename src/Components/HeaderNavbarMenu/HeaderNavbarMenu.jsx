import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setSelectedBranch } from "../../Slice/branchesSlice/branchesSlice";
import { Popover, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { fetchBranches } from "../../Services/fetchBranches";
import { setCategory } from "../../Slice/categorySlice/categorySlice";
import ErrorNotification from "../ErrorNotification/ErrorNotification";

function HeaderNavbarMenu() {
  const dispatch = useDispatch();
  const selectedBranch = useSelector((state) => state.branches?.selectedBranch);

  const {
    data: branches,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  });

  useEffect(() => {
    if (selectedBranch) {
      console.log("Selected branch has changed:", selectedBranch);
    }
  }, [selectedBranch]);

  const handleBranchClick = (branch, closePopover) => {
    // به‌روزرسانی اطلاعات انتخاب شده
    dispatch(
      setSelectedBranch({
        id: branch.branch_id,
        name: branch.name,
        location: { lat: `${branch.latitude}`, lng: `${branch.longitude}` },
      }),
    );
    dispatch(setCategory(branch.default_category));

    closePopover();
  };

  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (isError) {
    return <ErrorNotification error={error.message} />;
  }

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`flex items-center transition-all duration-300 ${
              selectedBranch?.name ? "text-green-primary-500" : ""
            }`}
          >
            <span>{`شعبه ${
              branches?.find((branch) => branch.name === selectedBranch.name)
                ?.name_fa || ""
            }`}</span>
            <img
              src={`${open ? "/icons/Direct=Up, Color=Black.svg" : "/icons/Direct=down, Color=Black.svg"}`}
              className="w-4 rounded-full hover:bg-gray-200"
              alt="Toggle"
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
              <div className="grid w-full grid-cols-1 rounded-lg bg-[#E5F2E9] px-4 py-6 text-xs text-green-primary-500">
                {branches &&
                  branches.map((branch) => (
                    <NavLink
                      key={branch.branch_id}
                      to={`/branches/${branch.name}`}
                      onClick={() => handleBranchClick(branch, close)}
                      className="py-2 text-base hover:text-green-primary-500 hover:underline"
                    >
                      {branch.name_fa}
                    </NavLink>
                  ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default HeaderNavbarMenu;
