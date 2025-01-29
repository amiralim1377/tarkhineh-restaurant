import { formatPrice } from "../../helper_functions/formatPrice";

function MenuItemsMiddleDesktopContent({ item }) {
  return (
    <div className="flex items-center justify-between text-[10px] md:text-xs lg:text-base">
      <div className="w-full max-w-28 text-[#353535] md:line-clamp-2 md:max-w-64">
        <p className="line-clamp-2 overflow-ellipsis">{item.description}</p>
      </div>
      <div className="hidden w-full max-w-28 flex-col items-end gap-3 md:flex">
        {item.discount_percentage !== 0 && (
          <div className="flex w-full items-center justify-between text-xs md:text-base">
            <div className="w-full text-xs text-[#ADADAD] line-through">
              {formatPrice(item.price)}
            </div>
            <div className="flex w-10 items-center justify-center rounded-full bg-red-200 px-1 py-2 text-red-800 md:text-xs">
              %{item.discount_percentage}
            </div>
          </div>
        )}
        <div className="md:text-sm lg:text-base">
          {formatPrice(item.discounted_price)}
        </div>
      </div>
      <div className="md:hidden">{formatPrice(item.discounted_price)}</div>
    </div>
  );
}

export default MenuItemsMiddleDesktopContent;
