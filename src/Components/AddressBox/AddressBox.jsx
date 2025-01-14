function AddressBox() {
  return (
    <div className="mt-5 rounded-md border border-gray-300 bg-[#F9F9F9] p-2">
      <div className="flex flex-row items-center justify-between">
        <div className="max-w-52 md:w-full md:max-w-2xl">
          <p className="text-xs text-[#353535] md:text-sm">
            تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img src="/icons/trash.svg" className="w-6" alt="" />
          </div>
          <div>
            <img src="/icons/edit-2.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="text-xs text-[#717171] md:text-sm">سردار وظیفه</div>
        <div>
          <span className="text-xs text-[#717171] md:text-sm">
            ۰۹۱۴ ۸۶۴ ۳۳۵۰
          </span>
        </div>
      </div>
    </div>
  );
}

export default AddressBox;
