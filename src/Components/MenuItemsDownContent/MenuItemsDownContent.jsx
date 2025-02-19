import useCart from "../React Custom Hooks/useCart/useCart";
import useModal from "../React Custom Hooks/useModal/useModal";

function MenuItemsDownContent({ item }) {
  const {
    handleAddToCart,
    isAddedInCart,
    getNumberInCart,
    handleIncrease,
    handleDecrease,
    handleRemoveFromCart,
  } = useCart();

  const { openModalHandler } = useModal();

  return (
    <div className="flex w-full flex-row items-center justify-between gap-3 md:justify-end">
      {isAddedInCart(item.id) && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex w-full max-w-16 flex-row items-center justify-center gap-3 rounded-lg bg-[#E5F2E9] p-2"
        >
          <img
            src="/icons/+.svg"
            onClick={(e) => {
              e.stopPropagation();
              handleIncrease(item.id);
            }}
            className="h-2 w-2 cursor-pointer object-contain md:h-3 md:w-3"
            alt=""
          />
          <span className="text-xs text-green-primary-500 md:text-sm">
            {getNumberInCart(item.id)}
          </span>

          <img
            src="/icons/-.svg"
            onClick={(e) => {
              e.stopPropagation();
              handleDecrease(item.id);
            }}
            className="h-2 w-2 cursor-pointer object-contain md:h-3 md:w-3"
            alt=""
          />
        </div>
      )}
      <div className="flex w-full flex-row items-center justify-end gap-2">
        {/* <button
          className="hidden w-full max-w-24 text-nowrap rounded-lg bg-green-primary-500 p-2 text-[8px] text-white hover:opacity-90 md:block md:max-w-40 md:text-sm lg:text-base"
          onClick={() => openModalHandler("productDetails", item)}
        >
          جزئیات محصول
        </button> */}
        {isAddedInCart(item.id) ? (
          <button
            className="flex w-full max-w-24 items-center text-nowrap rounded-lg border border-green-primary-500 bg-white p-2 text-[8px] text-green-primary-500 hover:opacity-90 md:max-w-40 md:text-base"
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveFromCart(item.id);
            }}
          >
            <img
              src="/icons/greentrash.svg"
              className="h-3 w-3 object-cover md:block md:h-4 md:w-4"
              alt=""
            />{" "}
            حذف از سبد خرید
          </button>
        ) : (
          <button
            className="w-full max-w-24 text-nowrap rounded-lg bg-green-primary-500 p-2 text-[8px] text-white hover:opacity-90 md:max-w-40 md:text-sm lg:text-base"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(item);
            }}
          >
            افزودن به سبد خرید
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuItemsDownContent;
