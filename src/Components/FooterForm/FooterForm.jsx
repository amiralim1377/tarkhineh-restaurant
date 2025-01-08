function FooterForm() {
  return (
    <form className="w-full flex-col items-center space-y-4">
      <h3 className="text-xl font-bold text-white">پیام به ترخینه </h3>
      <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between">
        <div className="flex w-full flex-col gap-y-2">
          <input
            type="text"
            className="w-full max-w-72 rounded-md border border-gray-400 bg-transparent px-4 py-2 caret-white focus:border-white"
            placeholder="نام و نام خانوادگی"
          />
          <input
            type="text"
            className="w-full max-w-72 rounded-md border border-gray-400 bg-transparent px-4 py-2 caret-white"
            placeholder="شماره تماس"
          />
          <input
            type="text"
            className="w-full max-w-72 rounded-md border border-gray-400 bg-transparent px-4 py-2 caret-white"
            placeholder="آدرس ایمیل (اختیاری)"
          />
        </div>
        <div className="w-full max-w-72">
          <textarea
            className="h-full w-full max-w-72 rounded-md border border-gray-400 bg-transparent px-4 py-2 caret-white"
            placeholder="پیام شما"
          ></textarea>
        </div>
      </div>
      <div className="flex w-full items-start justify-end">
        <button className="w-full max-w-44 rounded-md border border-gray-400 bg-none px-4 py-2 text-white">
          ارسال پیام
        </button>
      </div>
    </form>
  );
}

export default FooterForm;
