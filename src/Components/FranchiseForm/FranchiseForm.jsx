import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import FranchiseRequest from "../FranchiseRequest/FranchiseRequest";
import FranchiseSpecifications from "../FranchiseSpecifications/FranchiseSpecifications";
import FranchiseFacilities from "../FranchiseFacilities/FranchiseFacilities";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { resetPosition } from "../../Slice/mapSlice/mapSlice";

function FranchiseForm() {
  const methods = useForm();
  const dispatch = useDispatch();

  const notifySuccess = () =>
    toast.success("فرم درخواست نمایندگی شما با موفقیت دریافت شد.", {
      position: "top-left",
      style: {
        background: "#417F56",
        color: "white",
      },
    });

  const onSubmit = (data) => {
    notifySuccess();
    methods.reset();
    dispatch(resetPosition());
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="my-8 flex w-full flex-col items-center space-y-4 rounded-md border border-gray-300 p-4"
      >
        <FranchiseRequest />
        <FranchiseSpecifications />
        <FranchiseFacilities />
        <button
          type="submit"
          className="w-full max-w-52 rounded-md bg-green-primary-500 px-4 py-2 text-white"
        >
          ثبت اطلاعات
        </button>
      </form>
    </FormProvider>
  );
}

export default FranchiseForm;
