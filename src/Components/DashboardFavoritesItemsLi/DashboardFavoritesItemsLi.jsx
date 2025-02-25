import { useState } from "react";
import { formatPrice } from "../../helper_functions/formatPrice";
import MenuDetailsItems from "../MenuDetailsitems/MenuDetailsitems";
import useCart from "../React Custom Hooks/useCart/useCart";
import useModal from "../React Custom Hooks/useModal/useModal";
import { v4 as uuidv4 } from "uuid";
import FavoriteFoodDeleteModal from "../FavoriteFoodDeleteModal/FavoriteFoodDeleteModal";

const DashboardFavoritesItemsLi = ({ favorite }) => {
  const {
    id,
    name_fa,
    rating,
    price,
    discounted_price,
    discount_percentage,
    images,
  } = favorite;

  const [FavoritesItemId, setFavoritesItemId] = useState();

  const { selectedItem, isOpen, modalType, modalId, openModalHandler } =
    useModal();
  const { handleAddToCart, handleRemoveFromCart, isAddedInCart } = useCart();

  const handleOpenFavoritesModal = () => {
    const newModalId = uuidv4();
    setFavoritesItemId(newModalId);
    openModalHandler("productDetails", favorite, newModalId);
  };

  const handleDeleteFavoriteFoodModal = () => {
    const newModalId = uuidv4();
    setFavoritesItemId(newModalId);
    openModalHandler("FavoriteFoodDeleteModal", favorite, newModalId);
  };

  return (
    <li
      className="flex w-auto cursor-pointer flex-col items-center overflow-hidden rounded-lg border shadow-md"
      onClick={() => handleOpenFavoritesModal()}
    >
      <img
        src={images}
        alt={name_fa}
        className="h-full max-h-28 w-full object-cover object-center md:max-h-36"
      />
      <div className="flex w-full flex-col items-center space-y-4 p-2">
        <div className="flex w-full items-center justify-between">
          <span className="text-xs md:text-xl">{name_fa}</span>
          <img
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteFavoriteFoodModal();
            }}
            src="/icons/heart-bold.svg"
            alt="Favorite"
            className="h-3 w-3 md:h-6 md:w-6"
          />
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <span className="text-xs md:text-sm">{rating}⭐</span>
          {discount_percentage == 0 && (
            <span className="text-nowrap text-left text-xs">
              {formatPrice(price)}
            </span>
          )}
          {discount_percentage != 0 && (
            <div className="flex items-center gap-2">
              <span className="text-nowrap text-[8px] md:text-xs">
                {formatPrice(discounted_price)}
              </span>
              <span className="text-wrap text-left text-[8px] text-[#353535] line-through md:text-xs">
                {formatPrice(price)}
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          {isAddedInCart(id) ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveFromCart(id);
              }}
              className="flex w-full max-w-24 items-center text-nowrap rounded-lg border border-green-primary-500 bg-white p-2 text-green-primary-500 hover:opacity-90 md:max-w-40 md:text-sm"
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
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(favorite);
              }}
              className="w-full max-w-24 text-nowrap rounded-lg bg-green-primary-500 p-2 text-[8px] text-white hover:opacity-90 md:max-w-40 md:text-sm lg:text-base"
            >
              افزودن به سبد خرید
            </button>
          )}
        </div>
      </div>
      {isOpen &&
        modalType === "productDetails" &&
        modalId === FavoritesItemId && (
          <MenuDetailsItems
            item={selectedItem}
            FavoritesItemId={FavoritesItemId}
          />
        )}
      {isOpen &&
        modalType === "FavoriteFoodDeleteModal" &&
        modalId === FavoritesItemId && (
          <FavoriteFoodDeleteModal
            FavoritesItemId={FavoritesItemId}
            favorite={selectedItem}
          />
        )}
    </li>
  );
};

export default DashboardFavoritesItemsLi;
