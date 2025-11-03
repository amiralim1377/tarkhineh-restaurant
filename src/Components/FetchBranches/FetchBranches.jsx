// FetchBranches.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { setBranches } from "./Slice/branchesSlice/branchesSlice"; // به مسیر صحیح توجه کنید
import { fetchBranches } from "./Services/fetchBranches";
import Loading from "./Components/Loading/Loading";

const FetchBranches = () => {
  const dispatch = useDispatch();

  const {
    data: branches,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
    onSuccess: (data) => {
      dispatch(setBranches(data)); // اعمال dispatch به محض دریافت داده‌ها
    },
  });

  useEffect(() => {
    if (isSuccess) {
      console.log("Data loaded successfully: ", branches); // بررسی لاگ داده‌ها
    }
  }, [isSuccess, branches]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error fetching branches: {error.message}</div>;
  }

  return null;
};

export default FetchBranches;
