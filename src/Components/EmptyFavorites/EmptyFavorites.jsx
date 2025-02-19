function EmptyFavorites() {
  return (
    <div className="flex w-full items-center justify-center p-6">
      <div className="relative flex w-full items-center justify-center">
        <img src="/icons/Empty page.svg" className="" alt="" />
        <span className="absolute top-8 z-10 text-center text-lg text-[#717171]">
          شما در حال حاضر هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید!
        </span>
      </div>
    </div>
  );
}

export default EmptyFavorites;
