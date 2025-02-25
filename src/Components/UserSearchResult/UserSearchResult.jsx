import { useSelector } from "react-redux";
import { formatPrice } from "../../helper_functions/formatPrice";
import useCart from "../React Custom Hooks/useCart/useCart";

function UserSearchResult({ desireItems }) {
  const { handleAddToCart, handleRemoveFromCart, isAddedInCart } = useCart();
  const {
    images,
    name_fa,
    price,
    discount_percentage,
    rating,
    number_of_reviews,
    id,
  } = desireItems;

  const handleAddToCartFromPagesSlider = (desireItems) => {
    handleAddToCart(desireItems);
  };

  const handleRemoveFromPagesSlider = (desireItems) => {
    handleRemoveFromCart(desireItems.id);
  };
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg border border-gray-300">
      <img
        src={images}
        className="h-28 w-full overflow-hidden object-cover md:h-64"
        alt=""
      />
      <div className="mx-auto flex w-full flex-col items-center space-y-3 p-2 md:p-4">
        <h4 className="line-clamp-1 text-center text-xs md:text-lg">
          {name_fa}
        </h4>
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex items-center gap-1">
            <img src="/SpecialOffer/Heart.svg" alt="" />
            <h6 className="hidden text-xs text-[#ADADAD] md:block">
              افزودن به علاقمندی‌ها
            </h6>
          </div>
          <div className="justify بین flex items-center gap-1">
            <span className="text-[10px] text-[#ADADAD] line-through">
              {formatPrice(price)}
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-200 p-2 text-center text-[10px] text-red-700 md:text-sm">
              %{discount_percentage}
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-1 text-[10px]">
            <img src="/SpecialOffer/Star rate.svg" alt="" />
            <span>{rating}</span>
            {number_of_reviews ? (
              <span className="text-[#ADADAD]">({number_of_reviews} نظر)</span>
            ) : (
              <span className="text-[#ADADAD]">بدون نظر</span>
            )}
          </div>
          <span className="text-[10px] md:text-base">{formatPrice(price)}</span>
        </div>
        {isAddedInCart(id) ? (
          <button
            onClick={() => handleRemoveFromPagesSlider(desireItems)}
            className="text-overflow-ellipsis h-10 w-full max-w-52 overflow-hidden whitespace-nowrap rounded-lg border border-green-primary-500 bg-white p-3 text-xs text-green-primary-500"
          >
            حذف از سبد خرید
          </button>
        ) : (
          <button
            onClick={() => handleAddToCartFromPagesSlider(desireItems)}
            className="text-overflow-ellipsis h-10 w-full max-w-52 overflow-hidden whitespace-nowrap rounded-lg bg-green-primary-500 p-3 text-xs text-white"
          >
            افزودن به سبد خرید
          </button>
        )}
      </div>
    </div>
  );
}

export default UserSearchResult;
