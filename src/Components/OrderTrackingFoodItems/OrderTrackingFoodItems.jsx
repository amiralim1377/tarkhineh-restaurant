import { formatPrice } from "../../helper_functions/formatPrice";

function OrderTrackingFoodItems({ item, quantity }) {
  const { name_fa, price, discounted_price, discount_available, images } = item;

  return (
    <li className="flex flex-col items-center overflow-hidden rounded-lg border border-gray-300">
      <div className="relative w-full">
        <img
          src={images}
          alt=""
          className="max-h-10 w-full overflow-hidden object-cover md:max-h-20"
        />

        <span className="absolute bottom-1 left-2 flex items-center justify-center rounded-full bg-white p-1 text-xs text-green-primary-500">
          x{quantity}
        </span>
      </div>
      <div className="flex flex-col items-center space-y-1 py-2 text-xs text-[#353535]">
        <span className="text-center text-xs">{name_fa}</span>
        {!discount_available && (
          <span className="text-center text-xs">{formatPrice(price)}</span>
        )}
        {discount_available && (
          <>
            <span className="text text-[#ADADAD] line-through">
              {formatPrice(price)}
            </span>
            <span>{formatPrice(discounted_price)}</span>
          </>
        )}
      </div>
    </li>
  );
}

export default OrderTrackingFoodItems;
