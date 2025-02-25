import { formatPrice } from "../../helper_functions/formatPrice";
import MenuDetailsItems from "../MenuDetailsitems/MenuDetailsitems";
import useCart from "../React Custom Hooks/useCart/useCart";
import useModal from "../React Custom Hooks/useModal/useModal";

function DesktopCartListing({ cartItem }) {
  const {
    name_fa,
    discounted_price,
    quantity,
    price,
    discount_percentage,
    ingredients,
    id,
  } = cartItem;

  const { handleIncrease, handleDecrease, handleRemoveFromCart } = useCart();
  const { selectedItem, isOpen, openModalHandler, modalType } = useModal();

  return (
    <div className="flex w-full gap-2 rounded-lg border">
      <div className="min-h-32 w-full max-w-32 overflow-hidden rounded-r-lg bg-red-500 lg:min-h-44 lg:max-w-44">
        <img
          src={cartItem.images}
          className="h-full max-h-32 w-full overflow-hidden object-cover object-center lg:max-h-44"
          alt=""
        />
      </div>

      <div
        onClick={() => openModalHandler("productDetails", cartItem)}
        className="w-full cursor-pointer p-2"
      >
        <div className="flex h-full flex-col justify-between p-2">
          <div className="flex flex-row items-center justify-between hover:opacity-65">
            <h5 className="font-semibold text-[#353535] md:text-xs lg:text-xl">
              {name_fa}
            </h5>
            <div>
              <img
                src="/public/icons/trash.svg"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFromCart(id);
                }}
                className="w-6"
                alt="حذف"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div>
              <p className="line-clamp-1 text-xs lg:line-clamp-none lg:text-sm">
                {ingredients}
              </p>
            </div>
            {discount_percentage !== 0 && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#CBCBCB] line-through lg:text-base">
                  {price} تومان
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-200 text-xs text-red-800">
                  %{discount_percentage}
                </span>
              </div>
            )}
          </div>
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex w-full max-w-16 flex-row items-center justify-center gap-3 rounded-lg bg-[#E5F2E9] p-2">
              <img
                src="/icons/+.svg"
                onClick={(e) => {
                  e.stopPropagation();
                  handleIncrease(id);
                }}
                className="h-3 w-3 cursor-pointer object-contain"
                alt="افزایش تعداد"
              />
              <span
                className="text-sm text-green-primary-500"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {quantity}
              </span>
              {quantity == 1 ? (
                <img
                  src="/icons/greentrash.svg"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFromCart(id);
                  }}
                  className="h-4 w-4"
                  alt=""
                />
              ) : (
                <img
                  src="/icons/-.svg"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDecrease(id);
                  }}
                  className="h-3 w-3 cursor-pointer object-contain"
                  alt=""
                />
              )}
            </div>
            <div className="text-left text-xs text-[#353535] lg:text-xl">
              {formatPrice(discounted_price)}
            </div>
          </div>
        </div>
      </div>
      {isOpen && selectedItem?.id === cartItem?.id && (
        <MenuDetailsItems item={selectedItem} />
      )}
    </div>
  );
}

export default DesktopCartListing;
