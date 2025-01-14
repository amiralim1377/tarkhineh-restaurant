import ForeignFoods from "../ForeignFoods/ForeignFoods";
import IranianFood from "../IranianFood/IranianFood";
import MenuItemsPizza from "../MenuItemsPizza/MenuItemsPizza";
import MenuItemsSandwiches from "../MenuItemsSandwiches/MenuItemsSandwiches";

function MenuItems() {
  return (
    <div className="mx-auto mb-10 max-w-8xl">
      <IranianFood />
      <ForeignFoods />
      <MenuItemsPizza />
      <MenuItemsSandwiches />
    </div>
  );
}

export default MenuItems;
