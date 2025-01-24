import _, { omit } from "lodash";
import useMenuItemsLogic from "../React Custom Hooks/useMenuItemsLogic/useMenuItemsLogic";
import MenuDetailsItems from "../MenuDetailsitems/MenuDetailsitems";
import useModal from "../React Custom Hooks/useModal/useModal"; // اضافه شده
import MenuItemsImageWrapper from "../MenuItemsImageWrapper/MenuItemsImageWrapper";
import MenuItemsContentUpWrapper from "../MenuItemsContentUpWrapper/MenuItemsContentUpWrapper";
import MenuItemsMiddleDesktopContent from "../MenuItemsMiddleDesktopContent/MenuItemsMiddleDesktopContent";
import MenuItemsDownContent from "../MenuItemsDownContent/MenuItemsDownContent";
import { useSelector } from "react-redux";

const MenuItems = () => {
  const {
    branchId,
    categoryId,
    subcategoryId,
    subcategoryName,
    subcategoryName_Fa,
    menuItems,
    isLoading,
    isError,
    error,
  } = useMenuItemsLogic();
  const { selectedItem, isOpen } = useModal();

  const menuItemsRedux = useSelector((state) => state.menu.items);
  const searchQuery = useSelector((state) => state.search);
  const filteredItems = _.filter(menuItemsRedux, (item) =>
    searchQuery ? item.name_fa.includes(searchQuery) : true,
  );

  return (
    <div className="mx-auto mb-10 max-w-8xl">
      <div className="mx-auto w-full p-2">
        <div className="my-4 flex flex-row items-center justify-between">
          <h3 className="text-base font-bold leading-6 text-[#353535] md:text-2xl">
            {subcategoryName_Fa}
          </h3>
          <button className="flex flex-row items-center gap-x-2 rounded-lg border border-green-primary-500 p-2 text-xs font-normal text-green-primary-500 md:text-base">
            <img src="/icons/shopping-cart.svg" alt="" />
            تکمیل خرید
          </button>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {filteredItems?.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center justify-between overflow-hidden rounded-lg border border-gray-300 md:max-w-3xl md:gap-2"
            >
              <MenuItemsImageWrapper item={item} />
              <div className="flex h-full w-full flex-col justify-between space-y-2 p-2 md:max-w-lg">
                <MenuItemsContentUpWrapper item={item} />
                <MenuItemsMiddleDesktopContent item={item} />
                <MenuItemsDownContent item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpen && <MenuDetailsItems item={selectedItem} />}
    </div>
  );
};

export default MenuItems;
