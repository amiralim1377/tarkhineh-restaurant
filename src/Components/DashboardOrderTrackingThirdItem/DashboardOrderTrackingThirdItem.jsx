function DashboardOrderTrackingThirdItem() {
  return (
    <div id="3" className="">
      <div className="flex flex-col items-center justify-center py-2">
        <img
          src="/icons/Device=Mobile, Type=Send by courier, Step=1.svg"
          alt=""
          className="w-full"
        />
        <img
          src="/icons/Device=Mobile, Type=In-person delivery, Step=1.svg"
          alt=""
          className="w-full"
        />
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-6 md:grid-cols-6">
          {Array.from({ length: 6 }, (_, index) => (
            <>
              <li className="flex flex-col items-center overflow-hidden rounded-lg border border-gray-300">
                <div className="relative w-full bg-red-400">
                  <img
                    src="/public/menu/IranianFood/c18324ae6672db4300937e223eb47955.jpg"
                    alt=""
                    className="w-full overflow-hidden bg-red-500 object-cover"
                  />

                  <span className="absolute bottom-1 left-2 flex items-center justify-center rounded-full bg-white p-1 text-xs text-green-primary-500">
                    x3
                  </span>
                </div>
                <div className="flex flex-col py-2 text-xs text-[#353535]">
                  <span>کوفته برنجی</span>
                  <span> ۱۴۵٬۰۰۰ تومان</span>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardOrderTrackingThirdItem;
