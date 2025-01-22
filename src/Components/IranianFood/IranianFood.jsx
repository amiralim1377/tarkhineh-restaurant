import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { fetchMenuItems } from "../../Services/fetchMenuItems";
import { fetchEconomicItems } from "../../Services/fetchEconomicItems"; // وارد کرده تابع جدید

const IranianFood = () => {
  const branchId = useSelector((state) => state.branches.selectedBranch.id);
  const categoryId = useSelector((state) => state.category.selectedCategory);
  const subcategoryId = useSelector(
    (state) => state.category.selectedSubCategory.id,
  );
  const subcategoryName = useSelector(
    (state) => state.category.selectedSubCategory.name,
  );

  const {
    data: menuItems,
    isLoading: isMenuItemsLoading,
    isError: isMenuItemsError,
    error: menuItemsError,
  } = useQuery({
    queryKey: ["menuItems", branchId, categoryId, subcategoryId],
    queryFn: () =>
      fetchMenuItems({
        branchId,
        categoryId,
        subcategoryId,
      }),
    enabled: !!branchId && !!categoryId,
  });

  return (
    <div className="mx-auto mb-10 max-w-8xl">
      <div className="mx-auto w-full p-2">
        <div className="my-4 flex flex-row items-center justify-between">
          <h3 className="text-base font-bold leading-6 text-[#353535] md:text-2xl">
            {subcategoryName}
          </h3>
          <button className="flex flex-row items-center gap-x-2 rounded-lg border border-green-primary-500 p-2 text-xs font-normal text-green-primary-500 md:text-base">
            <img src="/icons/shopping-cart.svg" alt="" />
            تکمیل خرید
          </button>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {menuItems?.map((item) => (
            <div
              key={item.id}
              className="flex max-w-md flex-row items-center justify-between overflow-hidden rounded-lg border border-gray-300 md:max-w-3xl md:gap-2"
            >
              <div className="w-full max-w-24 md:max-w-52">
                <img
                  src={
                    item.image ||
                    "/menu/IranianFood/c18324ae6672db4300937e223eb47955.jpg"
                  }
                  alt={item.name_fa}
                  className="min-h-28 object-cover md:min-h-44"
                />
              </div>
              <div className="flex w-full max-w-80 flex-col space-y-2 p-2 md:max-w-lg">
                <div className="flex flex-row items-center justify-between">
                  <h3 className="text-xs text-[#353535] md:text-xl md:font-semibold">
                    {item.name_fa}
                  </h3>
                  <div className="flex w-full max-w-20 items-center justify-between text-[10px] md:hidden">
                    <div className="w-full text-[#ADADAD] line-through">
                      {item.price}
                    </div>
                    <div className="flex w-6 items-center justify-center rounded-full bg-red-200 p-1 text-[9px] text-red-800">
                      %{item.discount_percentage}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <img
                      src="/icons/heart.svg"
                      className="h-6 w-6"
                      alt="Heart"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] md:text-sm">
                  <div className="line-clamp-1 w-full max-w-28 text-[#353535] md:line-clamp-2 md:max-w-64">
                    <p>{item.description}</p>
                  </div>
                  <div className="hidden w-full max-w-28 flex-col items-center gap-3 md:flex">
                    <div className="flex w-full items-center justify-between text-base">
                      <div className="w-full text-[#ADADAD] line-through">
                        {item.price}
                      </div>
                      <div className="flex w-10 items-center justify-center rounded-full bg-red-200 px-1 py-2 text-red-800 md:text-xs">
                        %{item.discount_percentage}
                      </div>
                    </div>
                    <div className="text-lg">
                      {item.discounted_price} تومان{" "}
                    </div>
                  </div>
                  <div className="md:hidden">
                    {item.discounted_price} تومان{" "}
                  </div>
                </div>
                <div className="flex w-full flex-row items-center justify-between md:justify-end">
                  <div className="md:hidden">
                    <img src="/icons/heart.svg" alt="Heart" />
                  </div>
                  <button className="w-full max-w-28 text-nowrap rounded-lg bg-green-primary-500 p-2 text-[10px] text-white md:max-w-80 md:text-base">
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IranianFood;
