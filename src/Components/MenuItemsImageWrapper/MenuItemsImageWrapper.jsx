function MenuItemsImageWrapper({ item }) {
  return (
    <img
      src={
        item.images || "/menu/IranianFood/c18324ae6672db4300937e223eb47955.jpg"
      }
      alt={item.name_fa}
      className="h-full max-h-32 w-full max-w-24 object-cover object-center md:min-h-48 md:max-w-36 lg:min-h-44 lg:max-w-44"
    />
  );
}

export default MenuItemsImageWrapper;
