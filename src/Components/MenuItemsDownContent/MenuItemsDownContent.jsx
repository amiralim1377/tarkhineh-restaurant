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
      <div className="md:hidden">
        <img src="/icons/heart.svg" alt="Heart" />
      </div>
      {isAddedInCart(item.id) && (
        <div className="flex w-full max-w-16 flex-row items-center justify-center gap-3 rounded-lg bg-[#E5F2E9] p-2">
          <img
            src="/icons/+.svg"
            onClick={() => handleIncrease(item.id)}
            className="h-3 w-3 cursor-pointer object-contain"
            alt=""
          />
          <span className="text-sm text-green-primary-500">
            {getNumberInCart(item.id)}
          </span>

          <img
            src="/icons/-.svg"
            onClick={() => handleDecrease(item.id)}
            className="h-3 w-3 cursor-pointer object-contain"
            alt=""
          />
        </div>
      )}
      <div className="flex w-full flex-row items-center justify-end gap-2">
        <button
          className="w-full max-w-24 text-nowrap rounded-lg bg-green-primary-500 p-2 text-[10px] text-white hover:opacity-90 md:max-w-40 md:text-base"
          onClick={() => openModalHandler(item)}
        >
          جزئیات محصول
        </button>
        {isAddedInCart(item.id) ? (
          <button
            className="flex w-full max-w-24 items-center text-nowrap rounded-lg border border-green-primary-500 bg-white p-2 text-[10px] text-green-primary-500 hover:opacity-90 md:max-w-40 md:text-base"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            <img src="/icons/greentrash.svg" alt="" /> حذف از سبد خرید
          </button>
        ) : (
          <button
            className="w-full max-w-24 text-nowrap rounded-lg bg-green-primary-500 p-2 text-[10px] text-white hover:opacity-90 md:max-w-40 md:text-sm lg:text-base"
            onClick={() => handleAddToCart(item)}
          >
            افزودن به سبد خرید
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuItemsDownContent;
