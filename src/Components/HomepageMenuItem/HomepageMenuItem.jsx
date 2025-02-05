function HomepageMenuItem() {
  return (
    <div className="relative mx-auto mt-28 grid max-w-8xl grid-cols-2 justify-items-center gap-6 px-2 md:grid-cols-4">
      <div className="relative h-[5rem] w-full max-w-36 rounded-md border bg-green-primary-500 shadow-2xl hover:scale-105 md:h-[10rem] md:max-w-72">
        <img
          src="/menuitem/4.png"
          className="absolute bottom-5 left-1/2 z-10 h-32 w-32 -translate-x-1/2 transform md:h-60 md:w-60"
          alt="غذای اصلی"
        />
        <div className="absolute -bottom-4 left-1/2 flex w-full max-w-24 -translate-x-1/2 transform items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-2xl md:max-w-32 lg:max-w-40">
          غذای اصلی
        </div>
      </div>
      <div className="relative h-[5rem] w-full max-w-36 rounded-md bg-green-primary-500 shadow-2xl hover:scale-105 md:h-[10rem] md:max-w-72">
        <img
          src="/menuitem/3.png"
          className="absolute bottom-5 left-1/2 z-10 h-32 w-32 -translate-x-1/2 transform md:h-60 md:w-60"
          alt="پیش غذا"
        />
        <div className="absolute -bottom-4 left-1/2 flex w-full max-w-24 -translate-x-1/2 transform items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-2xl md:max-w-32 lg:max-w-40">
          پیش غذا
        </div>
      </div>
      <div className="relative mt-20 h-[5rem] w-full max-w-36 rounded-md bg-green-primary-500 shadow-2xl hover:scale-105 md:mt-0 md:h-[10rem] md:max-w-72">
        <img
          src="/menuitem/2.png"
          className="absolute bottom-5 left-1/2 z-10 h-32 w-32 -translate-x-1/2 transform md:h-60 md:w-60"
          alt="دسر"
        />
        <div className="absolute -bottom-4 left-1/2 flex w-full max-w-24 -translate-x-1/2 transform items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-2xl md:max-w-32 lg:max-w-40">
          دسر
        </div>
      </div>
      <div className="relative mt-20 h-[5rem] w-full max-w-36 rounded-md bg-green-primary-500 shadow-2xl hover:scale-105 md:mt-0 md:h-[10rem] md:max-w-72">
        <img
          src="/menuitem/1.png"
          className="absolute bottom-5 left-1/2 z-10 h-32 w-32 -translate-x-1/2 transform md:h-60 md:w-60"
          alt="نوشیدنی"
        />
        <div className="absolute -bottom-4 left-1/2 flex w-full max-w-24 -translate-x-1/2 transform items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-2xl md:max-w-32 lg:max-w-40">
          نوشیدنی
        </div>
      </div>
    </div>
  );
}

export default HomepageMenuItem;
