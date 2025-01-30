function DashboardProfileItems() {
  return (
    <div className="flex w-full flex-col space-y-2 md:mx-auto md:max-w-2xl md:flex-row md:flex-wrap md:justify-center md:gap-4 md:space-y-0 md:py-5">
      <input type="text" placeholder="نام" className="rounded-lg border p-2" />
      <input
        type="text"
        placeholder="نام خانوادگی"
        className="rounded-lg border p-2"
      />
      <input
        type="text"
        placeholder="آدرس ایمیل"
        className="rounded-lg border p-2"
      />
      <input
        type="text"
        placeholder="شماره همراه"
        className="rounded-lg border p-2"
      />
      <input
        type="text"
        placeholder="تاریخ تولد"
        className="rounded-lg border p-2"
      />
      <input
        type="text"
        placeholder="نام کاربری"
        className="rounded-lg border p-2"
      />
      <div className="flex items-center justify-center py-4">
        <button className="flex items-center gap-2 rounded-lg border border-green-primary-500 p-3 text-xs text-green-primary-500">
          <img src="/icons/edit-green.svg" alt="" />
          ویرایش اطلاعات شخصی
        </button>
      </div>
    </div>
  );
}

export default DashboardProfileItems;
