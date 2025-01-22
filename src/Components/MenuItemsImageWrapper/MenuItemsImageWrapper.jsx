function MenuItemsImageWrapper({ item }) {
  return (
    <div className="h-full w-full max-w-28 md:max-w-52">
      <img
        src={
          item.image || "/menu/IranianFood/c18324ae6672db4300937e223eb47955.jpg"
        }
        alt={item.name_fa}
        className="min-h-36 object-cover md:min-h-52"
      />
    </div>
  );
}

export default MenuItemsImageWrapper;
