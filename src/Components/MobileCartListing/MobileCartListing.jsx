import { formatPrice } from "../../helper_functions/formatPrice";
import MenuDetailsItems from "../MenuDetailsitems/MenuDetailsitems";
import useCart from "../React Custom Hooks/useCart/useCart";
import useModal from "../React Custom Hooks/useModal/useModal";

function MobileCartListing({ cartItem }) {
  const { name_fa, discounted_price, quantity, id } = cartItem;
  const { handleIncrease, handleDecrease } = useCart();
  const { selectedItem, isOpen, openModalHandler } = useModal();

  return (
    <div className="mx-auto flex w-full flex-row items-center justify-between space-y-4 hover:bg-[#EDEDED]">
      <div
        onClick={() => openModalHandler("productDetails", cartItem)}
        className="flex cursor-pointer flex-col"
      >
        <h5 className="text-xs">{name_fa}</h5>
        <h6 className="text-[10px]">{formatPrice(discounted_price)}</h6>
      </div>
      <div className="flex w-full max-w-14 items-center justify-between">
        <img
          src="/icons/+.svg"
          onClick={() => handleIncrease(id)}
          className="h-3 w-3 cursor-pointer"
          alt=""
        />

        <span className="text-green-primary-500">{quantity}</span>
        <div onClick={() => handleDecrease(id)}>
          {quantity == 1 ? (
            <img
              src="/icons/greentrash.svg"
              className="h-3 w-3 cursor-pointer"
              alt=""
            />
          ) : (
            <img src="/icons/-.svg" className="h-3 w-3 cursor-pointer" alt="" />
          )}
        </div>
      </div>
      {isOpen && selectedItem?.id === cartItem?.id && (
        <MenuDetailsItems item={selectedItem} />
      )}
    </div>
  );
}

export default MobileCartListing;
