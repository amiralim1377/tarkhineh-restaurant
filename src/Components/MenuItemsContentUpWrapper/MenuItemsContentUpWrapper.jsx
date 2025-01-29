import { formatPrice } from "../../helper_functions/formatPrice";

function MenuItemsContentUpWrapper({ item }) {
  return (
    <div className="flex flex-row items-center justify-between">
      <h3 className="text-xs text-[#353535] md:text-base md:font-semibold lg:text-xl">
        {item.name_fa}
      </h3>
      {item.discount_percentage !== 0 && (
        <div className="flex w-full max-w-20 items-center justify-between gap-1 text-[10px] md:hidden">
          <span className="w-full text-nowrap text-[#ADADAD] line-through">
            {formatPrice(item.price)}
          </span>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-200 p-1 text-center text-[9px] text-red-800">
            %{item.discount_percentage}
          </div>
        </div>
      )}
      <div className="hidden md:block">
        <img src="/icons/heart.svg" className="h-6 w-6" alt="Heart" />
      </div>
    </div>
  );
}

export default MenuItemsContentUpWrapper;
