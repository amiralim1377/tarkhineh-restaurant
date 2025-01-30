function DashboardFavoritesSearchChips() {
  return (
    <div className="flex flex-row items-center justify-between py-2">
      <div className="mx-auto hidden w-full max-w-md flex-col items-center justify-between gap-3 md:flex md:max-w-8xl md:flex-row">
        <ul className="flex w-full gap-3 overflow-y-scroll p-2 text-center text-sm md:max-w-3xl md:overflow-visible xl:text-base">
          {Array.from({ length: 6 }, (_, index) => (
            <>
              <li
                key={index}
                className="flex cursor-pointer items-center justify-center text-nowrap rounded-lg bg-gray-100 px-4 py-3 text-xs transition-all duration-300"
              >
                غذای اصلی
                <img
                  src="/icons/arrow-left-blakc.svg"
                  className="ml-2 h-3 w-3"
                  alt="Arrow"
                />
              </li>
            </>
          ))}
        </ul>
      </div>
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
    </div>
  );
}

export default DashboardFavoritesSearchChips;
