function FranchiseRequest() {
  return (
    <div className="mt-8 w-full">
      <h2 className="text-center text-base font-semibold md:text-2xl">
        فرم درخواست نمایندگی
      </h2>
      <form action="">
        <div className="flex flex-col items-start">
          <h3 className="text-xs text-[#353535] md:text-lg">
            مشخصات فردی متقاضی{" "}
          </h3>
          <div className="mt-3 flex w-full max-w-md flex-col items-start justify-between gap-3 md:max-w-8xl md:flex-row">
            <input
              type="text"
              className="w-full max-w-md rounded-md border border-gray-300 p-2"
              placeholder="نام و نام خانوادگی"
            />
            <input
              type="text"
              className="w-full max-w-md rounded-md border border-gray-300 p-2"
              placeholder="کدملی"
            />
            <input
              type="text"
              className="w-full max-w-md rounded-md border border-gray-300 p-2"
              placeholder="شماره تماس"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xs text-[#353535] md:text-lg">آدرس ملک متقاضی</h3>
          <div className="mt-3 flex w-full max-w-md flex-col items-start justify-between gap-3 md:max-w-8xl md:flex-row">
            <div className="flex w-full max-w-[943px] flex-col justify-between gap-4">
              <div className="flex w-full flex-col justify-between gap-2 md:flex-row">
                <input
                  type="text"
                  className="w-full max-w-md rounded-md border border-gray-300 p-2"
                  placeholder="استان"
                />
                <input
                  type="text"
                  className="w-full max-w-md rounded-md border border-gray-300 p-2"
                  placeholder="شهر"
                />
              </div>
              <div className="flex w-full flex-col justify-between gap-2 md:flex-row">
                <input
                  type="text"
                  className="w-full max-w-md rounded-md border border-gray-300 p-2"
                  placeholder="منطقه"
                />
                <input
                  type="text"
                  className="w-full max-w-md rounded-md border border-gray-300 p-2"
                  placeholder="آدرس دقیق"
                />
              </div>
            </div>

            <div className="hidden min-h-40 w-full max-w-md bg-teal-500 md:block">
              map container
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FranchiseRequest;
