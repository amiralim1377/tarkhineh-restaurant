import { Dialog } from "@headlessui/react";
import "../../../CustomScrollbar.css";
import { formatPrice } from "../../helper_functions/formatPrice";
import useCart from "../React Custom Hooks/useCart/useCart";
import useModal from "../React Custom Hooks/useModal/useModal";
import MenuDetailsFakeComment from "../MenuDetailsFakeComment/MenuDetailsFakeComment";

function MenuDetailsItems({ item, FavoritesItemId }) {
  const {
    discount_percentage,
    discounted_price,
    ingredients,
    name_fa,
    number_of_reviews,
    preparation_time,
    price,
    rating,
    id,
    images,
  } = item;

  const {
    handleAddToCart,
    isAddedInCart,
    getNumberInCart,
    handleIncrease,
    handleDecrease,
    handleRemoveFromCart,
  } = useCart();
  const { closeModalHandler, isOpen, modalType, modalId } = useModal();

  return (
    <Dialog
      open={
        isOpen && modalType === "productDetails" && modalId == FavoritesItemId
      }
      onClose={closeModalHandler}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <Dialog.Panel className="flex w-full max-w-xs flex-col items-center justify-between rounded-lg bg-white p-2 md:max-w-3xl">
          <div
            className="custom-scrollbar sticky flex max-h-[90vh] w-full max-w-3xl flex-col items-center overflow-y-auto rounded-lg bg-white p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => closeModalHandler(item)}
              className="absolute right-2 top-2 rounded-full p-1 hover:rounded-full"
            >
              ✖
            </button>
            <div className="mt-5 flex w-full flex-col items-start justify-between gap-2 md:flex-row">
              <div className="h-full w-full rounded-lg">
                <img
                  src={item.images}
                  alt=""
                  className="h-full max-h-60 w-full rounded-lg object-cover object-center"
                />
              </div>
              <div className="flex w-full flex-col items-start space-y-2 rounded-lg bg-gray-200 p-2">
                <div className="">
                  <h2 className="text-base font-semibold">جزئیات غذا</h2>
                  <h3 className="text-xs font-semibold">{name_fa}</h3>
                  <p className="text-xs">{ingredients}</p>
                  <h3 className="text-xs">
                    مدت زمان آماده سازی: {preparation_time} دقیقه
                  </h3>
                </div>
                <div className="">
                  <h3 className="text-base font-semibold">نظرات کاربران</h3>
                  <h4 className="text-xs">امتیاز کاربران: {rating}⭐</h4>
                  <h4 className="text-xs">
                    نظرات کاربران: {number_of_reviews}
                  </h4>
                </div>
                <div className="">
                  <h3 className="text-base font-semibold">وضعیت موجودی</h3>
                  <div className="flex items-center gap-2">
                    <div className="relative h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                    <h4 className="text-xs text-green-700">موجود</h4>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="text-base font-semibold">
                    قیمت‌ها و تخفیف‌ها
                  </h3>
                  {discount_percentage !== 0 && (
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-xs text-gray-600 line-through">
                        {formatPrice(price)}
                      </span>
                      <span className="flex w-6 items-center justify-center rounded-full bg-red-200 p-1 text-[9px] text-red-800">
                        {discount_percentage}%
                      </span>
                    </div>
                  )}
                  {isAddedInCart(item.id) && (
                    <div>
                      <span className="w-full text-xs">
                        {formatPrice(discounted_price)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex w-full flex-row items-center justify-between gap-5">
                  {!isAddedInCart(item.id) && (
                    <span className="w-full text-xs">
                      {formatPrice(discounted_price)}
                    </span>
                  )}
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

                      {getNumberInCart(id) === 1 ? (
                        <img
                          src="/icons/greentrash.svg"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveFromCart(id);
                          }}
                          className="h-4 w-4 cursor-pointer"
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
                  )}
                  {isAddedInCart(item.id) ? (
                    <button
                      className="flex w-full max-w-24 items-center justify-center text-nowrap rounded-lg border border-green-primary-500 bg-white p-2 text-[10px] text-green-primary-500 hover:opacity-90 md:max-w-40 md:text-base"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      <img src="/icons/greentrash.svg" alt="" />
                      حذف از سبد خرید
                    </button>
                  ) : (
                    <button
                      className="w-full max-w-24 text-nowrap rounded-lg bg-green-primary-500 p-2 text-[10px] text-white hover:opacity-90 md:max-w-40 md:text-base"
                      onClick={() => handleAddToCart(item)}
                    >
                      افزودن به سبد خرید
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4 w-full rounded-lg p-2">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-gray-800">
                  نظرات کاربران
                </h4>
                <h4 className="text-base font-bold text-gray-800">
                  تعداد نظرات: {number_of_reviews}
                </h4>
              </div>

              <MenuDetailsFakeComment
                number_of_reviews={number_of_reviews}
                ingredients={ingredients}
                name_fa={name_fa}
                price={price}
              />
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default MenuDetailsItems;
