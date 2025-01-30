function DashboardSignupFormMessage({
  successMessage,
  errorMessage,
  isRegisteredSuccessfull,
  setLoginFalse,
}) {
  return (
    <>
      <div className="flex w-full flex-row items-center">
        <img
          src={`${isRegisteredSuccessfull ? "/icons/task_alt_24dp_417F56_FILL0_wght400_GRAD0_opsz24.svg" : "/icons/error_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.svg"}`}
          alt=""
        />
        <span
          className={`w-full text-center text-xs ${isRegisteredSuccessfull ? "text-green-primary-500" : "text-red-600"}`}
        >
          {errorMessage || successMessage}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <a
          onClick={() => setLoginFalse(true)}
          className="rounded-lg border border-green-primary-500 px-4 py-2 text-base text-green-primary-500 hover:border-green-900 hover:text-green-900"
        >
          ورود به سایت
        </a>
      </div>
    </>
  );
}

export default DashboardSignupFormMessage;
