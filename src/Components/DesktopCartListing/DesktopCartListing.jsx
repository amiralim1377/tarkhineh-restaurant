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
  const { selectedItem, isOpen, openModalHandler, modalType } = useModal(); // closeModalHandler اضافه شده است

  return (
    <div className="flex flex-row rounded-lg border hover:bg-[#EDEDED]">
      <div className="w-full max-w-44">
        <img
          src="/menu/IranianFood/c18324ae6672db4300937e223eb47955.jpg"
          className="min-h-40 object-cover"
          alt=""
        />
      </div>
      <div className="w-full p-2">
        <div className="flex h-full flex-col justify-between p-2">
          <div
            onClick={() => openModalHandler("productDetails", cartItem)}
            className="flex cursor-pointer flex-row items-center justify-between hover:opacity-65"
          >
            <h5 className="text-xl font-semibold text-[#353535]">{name_fa}</h5>
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
              <p className="text-sm">{ingredients}</p>
            </div>
            {discount_percentage !== 0 && (
              <div className="flex items-center gap-2">
                <div className="text-base text-[#CBCBCB] line-through">
                  {price} تومان
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-300 text-xs text-red-800">
                  %{discount_percentage}
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
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
              <span className="text-sm text-green-primary-500">{quantity}</span>
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
            <div className="text-xl text-[#353535]">
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
