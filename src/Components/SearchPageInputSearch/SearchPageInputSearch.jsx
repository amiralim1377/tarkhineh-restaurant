import { useEffect } from "react";
import { fetchSearchDesireItems } from "../../Slice/searchDesireSlice/searchDesireSlice";
import { Riple } from "react-loading-indicators";
import { setCategory } from "../../Slice/categorySlice/categorySlice";
import { setSelectedBranch } from "../../Slice/branchesSlice/branchesSlice";
import { fetchBranches } from "../../Services/fetchBranches";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import useModal from "../React Custom Hooks/useModal/useModal";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setSearchQuery } from "../../Slice/searchSlice/searchSlice";

function SearchPageInputSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, modalType, modalId, closeModalHandler } = useModal();
  const selectedBranch = useSelector(
    (state) => state.branches?.selectedBranch?.id,
  );
  console.log(selectedBranch);

  const isSelectedBranch = Boolean(selectedBranch);
  const searchDesireStatus = useSelector((state) => state.searchDesire.status);
  const searchDesireItems = useSelector((state) => state.searchDesire.items);

  const {
    data: branches,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  });

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
    const cleanedQuery = cleanQuery(data.searchQuery);

    if (!selectedBranch) {
      console.error("Selected branch is not defined");
      return;
    }

    // Dispatch the thunk action to fetch and store the desired menu items
    dispatch(
      fetchSearchDesireItems({
        branchId: selectedBranch,
        query: cleanedQuery,
      }),
    );
    dispatch(setSearchQuery(data.searchQuery));
  };

  if (searchDesireStatus === "loading") {
    return (
      <div className="flex items-center justify-center">
        <Riple color="#417F56" size="medium" text="" textColor="" />
      </div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="relative mt-6 w-full max-w-md px-2">
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
    </form>
  );
}

export default SearchPageInputSearch;
