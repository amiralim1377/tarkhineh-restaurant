function DashboardFavoritesSearch() {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full rounded-sm border border-gray-200 p-2 pl-14 focus:outline-none focus:ring-2 focus:ring-green-900"
        placeholder="جست وجو"
      />
      <img
        src="/public/icons/search-normal.svg"
        alt="آیکون جست وجو"
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400"
      />
    </div>
  );
}

export default DashboardFavoritesSearch;
