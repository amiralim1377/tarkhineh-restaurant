import { Dialog } from "@headlessui/react";
import useModal from "../React Custom Hooks/useModal/useModal";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchBranches } from "../../Services/fetchBranches";
import { useNavigate } from "react-router-dom";
import { setSelectedBranch } from "../../Slice/branchesSlice/branchesSlice";
import { setCategory } from "../../Slice/categorySlice/categorySlice";
import { useForm } from "react-hook-form";
import { fetchSearchDesireItems } from "../../Slice/searchDesireSlice/searchDesireSlice";
import { setSearchQuery } from "../../Slice/searchSlice/searchSlice";

const SearchModalHomePage = memo(({ searchModalId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, modalType, modalId, closeModalHandler } = useModal();
  const selectedBranch = useSelector(
    (state) => state.branches?.selectedBranch?.id,
  );
  const isSelectedBranch = Boolean(selectedBranch);

  const {
    data: branches,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  });

  const searchDesireStatus = useSelector((state) => state.searchDesire.status);
  const searchDesireItems = useSelector((state) => state.searchDesire.items);

  useEffect(() => {
    if (searchDesireStatus === "succeeded") {
      navigate("/search"); // Navigate to the search page
    }
  }, [searchDesireStatus, navigate]);

  const handleBranchClick = (branch) => {
    dispatch(
      setSelectedBranch({
        id: branch.branch_id,
        name: branch.name,
        location: { lat: `${branch.latitude}`, lng: `${branch.longitude}` },
      }),
    );
    dispatch(setCategory(branch.default_category));
    setValue("branchId", branch.branch_id); // set the value of branchId in form
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const cleanQuery = (query) => {
    return query.replace(/\s+/g, " ").trim();
  };

  const onSubmit = async (data) => {
    console.log(data);

    const cleanedQuery = cleanQuery(data.searchQuery);

    // Dispatch the thunk action to fetch and store the desired menu items
    dispatch(
      fetchSearchDesireItems({ branchId: data.branchId, query: cleanedQuery }),
    );
    dispatch(setSearchQuery(data.searchQuery));
  };

  return (
    <Dialog
      open={
        isOpen && modalType === "searchModalId" && modalId === searchModalId
      }
      onClose={closeModalHandler}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center px-4">
        <Dialog.Panel className="flex w-full max-w-xs flex-col items-center justify-between space-y-2 rounded-lg bg-white p-4 md:max-w-2xl">
          <Dialog.Title className="text-center text-lg font-bold text-gray-900">
            جستجو
          </Dialog.Title>
          <Dialog.Description className="cursor-pointer text-nowrap text-center text-[10px] text-[#353535] md:text-base">
            لطفا غذای مورد نظر خود را جست و جو کنید.
          </Dialog.Description>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="relative mt-6 w-full px-2">
              <input
                type="text"
                className="w-full rounded-sm border border-gray-200 p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-green-900"
                placeholder="جست و جو"
                {...register("searchQuery", {
                  required: "لطفاً نام غذای دلخواه خود را وارد کنید.",
                  pattern: {
                    value: /^[آ-ی\s]+$/,
                    message: "لطفاً فقط از حروف فارسی استفاده کنید.",
                  },
                })}
              />
              <img
                src="/icons/search-normal.svg"
                alt="آیکون جست و جو"
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400"
              />
            </div>
            {errors.searchQuery && (
              <span className="text-red-600">{errors.searchQuery.message}</span>
            )}
            {!isSelectedBranch && (
              <section className="w-full p-2">
                <h5 className="w-full text-right">
                  شعبه مد نظر برای جست و جوی غذا رو انتخاب کنید:
                </h5>
                <div className="flex w-full items-start justify-start gap-4 p-2">
                  {branches?.map((branch) => (
                    <div
                      key={branch.branch_id}
                      className="flex items-center gap-1"
                    >
                      <input
                        type="radio"
                        id={`searchbranch-${branch.branch_id}`}
                        value={branch.branch_id}
                        {...register("branchId", {
                          required: "لطفاً شعبه‌ای را انتخاب کنید.",
                        })}
                        className="h-4 w-4 cursor-pointer text-lime-600 accent-lime-600"
                        onClick={() => handleBranchClick(branch)}
                      />
                      <label
                        htmlFor={`searchbranch-${branch.branch_id}`}
                        className="ml-2 flex cursor-pointer items-center"
                      >
                        <span className="text-[#717171]">{branch.name_fa}</span>
                      </label>
                    </div>
                  ))}
                </div>
                {errors.branchId && (
                  <span className="text-red-600">
                    {errors.branchId.message}
                  </span>
                )}
              </section>
            )}
          </form>
          {searchDesireStatus === "loading" && <p>در حال جستجو...</p>}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
});

SearchModalHomePage.displayName = "SearchModalHomePage";

export default memo(SearchModalHomePage);
