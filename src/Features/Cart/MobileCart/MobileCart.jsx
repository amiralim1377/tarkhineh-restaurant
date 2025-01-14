import MobileCartItem from "../../../Components/MobileCartItem/MobileCartItem";

function MobileCart() {
  return (
    <div className="p-2 md:hidden">
      <div className="p-2">
        <div className="flex flex-row items-baseline justify-between">
          <div>
            <img src="/icons/Slider Arrow.svg" alt="" />
          </div>

          <h3 className="text-base font-bold text-[#353535]">سبد خرید</h3>

          <div>
            <img src="/icons/trash.svg" alt="" />
          </div>
        </div>

        <MobileCartItem />
      </div>
    </div>
  );
}

export default MobileCart;
