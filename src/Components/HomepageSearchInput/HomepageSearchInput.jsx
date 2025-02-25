function HomepageSearchInput() {
  return (
    <div className="relative mt-6 w-full px-2 md:hidden">
      <input
        type="text"
        className="w-full rounded-sm border border-gray-200 p-2 pl-14 focus:outline-none focus:ring-2 focus:ring-green-900"
        placeholder="جست وجو"
      />
      <img
        src="/icons/search-normal.svg"
        alt="آیکون جست وجو"
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400"
      />
    </div>
  );
}

export default HomepageSearchInput;
