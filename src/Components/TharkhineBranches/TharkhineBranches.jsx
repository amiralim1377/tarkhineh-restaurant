function TharkhineBranches() {
  return (
    <div className="mx-auto mt-4 grid max-w-8xl grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-4">
      <div className="group relative flex max-w-72 flex-col items-center overflow-hidden rounded-lg border-2 hover:border-green-primary-500 hover:shadow-2xl">
        <img
          src="/branches/d5c39ff5c7dcfd7412a964561eb2869d.jpg"
          className="h-full w-full object-cover"
          alt=""
        />
        <div className="absolute bottom-0 flex h-[100px] w-full flex-col items-center bg-white p-5 text-center transition-all duration-300 ease-in-out group-hover:h-[120px]">
          <h4 className="text-xl font-semibold">شعبه چالوس</h4>
          <p className="text-sm font-medium">
            چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی
          </p>
          <button className="hidden flex-row items-center rounded-md border-2 border-green-primary-500 px-2 text-black group-hover:flex">
            صفحه شعبه{" "}
            <img src="/icons/arrow-left-green.svg" className="" alt="" />
          </button>
        </div>
      </div>
      <div className="group relative flex max-w-72 flex-col items-center overflow-hidden rounded-lg border-2 hover:border-green-primary-500 hover:shadow-2xl">
        <img
          src="/public/branches/8295be0e464709726a66931b63d8cfdb.jpg"
          className="h-full w-full object-cover"
          alt=""
        />
        <div className="absolute bottom-0 flex h-[100px] w-full flex-col items-center bg-white p-5 text-center transition-all duration-300 ease-in-out group-hover:h-[120px]">
          <h4 className="text-xl font-semibold">شعبه اقدسیه</h4>
          <p className="text-sm font-medium">
            خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸
          </p>
          <button className="hidden flex-row items-center rounded-md border-2 border-green-primary-500 px-2 text-black group-hover:flex">
            صفحه شعبه{" "}
            <img src="/icons/arrow-left-green.svg" className="" alt="" />
          </button>
        </div>
      </div>

      <div className="group relative flex max-w-72 flex-col items-center overflow-hidden rounded-lg border-2 hover:border-green-primary-500 hover:shadow-2xl">
        <img
          src="/public/branches/d5c39ff5c7dcfd7412a964561eb2869d.jpg"
          className="h-full w-full object-cover"
          alt=""
        />
        <div className="absolute bottom-0 flex h-[100px] w-full flex-col items-center bg-white p-5 text-center transition-all duration-300 ease-in-out group-hover:h-[120px]">
          <h4 className="text-xl font-semibold">شعبه اکباتان</h4>
          <p className="text-sm font-medium">
            شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم{" "}
          </p>
          <button className="hidden flex-row items-center rounded-md border-2 border-green-primary-500 px-2 text-black group-hover:flex">
            صفحه شعبه{" "}
            <img src="/icons/arrow-left-green.svg" className="" alt="" />
          </button>
        </div>
      </div>
      <div className="group relative flex max-w-72 flex-col items-center overflow-hidden rounded-lg border-2 hover:border-green-primary-500 hover:shadow-2xl">
        <img
          src="/public/branches/d5c39ff5c7dcfd7412a964561eb2869d.jpg"
          className="h-full w-full object-cover"
          alt=""
        />
        <div className="absolute bottom-0 flex h-[100px] w-full flex-col items-center bg-white p-5 text-center transition-all duration-300 ease-in-out group-hover:h-[120px]">
          <h4 className="text-xl font-semibold">شعبه ونک</h4>
          <p className="text-sm font-medium">
            میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶
          </p>
          <button className="hidden flex-row items-center rounded-md border-2 border-green-primary-500 px-2 text-black group-hover:flex">
            صفحه شعبه{" "}
            <img src="/icons/arrow-left-green.svg" className="" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TharkhineBranches;
