function DashboardFavoritesItems() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-4 py-6 md:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <>
            <li
              key={index}
              className="flex flex-col items-center overflow-hidden rounded-lg border"
            >
              <div>
                <img
                  src="/menu/IranianFood/c18324ae6672db4300937e223eb47955.jpg"
                  alt=""
                  className="overflow-hidden"
                />
              </div>
              <div className="flex w-full flex-col items-center space-y-4 p-2">
                <div className="flex w-full items-center justify-between">
                  <span className="text-xs">پاستا سبزیجات </span>
                  <img src="/icons/heart.svg" alt="" />
                </div>
                <div className="flex w-full items-center justify-between text-xs">
                  <span>4⭐</span>
                  <span>۱۵۰٬۰۰۰ تومان</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="rounded-md bg-green-primary-500 p-2 text-white hover:opacity-80">
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default DashboardFavoritesItems;
