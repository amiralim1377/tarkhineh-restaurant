function DashboardOrderTrackingFourthItem() {
  return (
    <div
      id="4"
      className="flex flex-col items-center justify-center space-y-4 font-semibold md:items-end"
    >
      <a href="" className="text-[#717171] md:hidden">
        مشاهده همه سفارشات
      </a>

      <button className="w-full max-w-32 rounded-md border-2 border-red-600 p-2 text-red-600 hover:border-red-800 hover:text-red-800">
        لغو سفارش
      </button>
      <button className="hover:text--green-primary-500 hover:border--green-primary-500 w-full max-w-32 rounded-md border-2 border-green-primary-500 p-2 text-green-primary-500">
        سفارش مجدد
      </button>
    </div>
  );
}

export default DashboardOrderTrackingFourthItem;
