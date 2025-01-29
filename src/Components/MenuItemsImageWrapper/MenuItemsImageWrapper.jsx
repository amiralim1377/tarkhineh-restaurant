function MenuItemsImageWrapper({ item }) {
  return (
    <>
      <div className="h-full w-full max-w-24 md:max-w-32 lg:max-w-52">
        <img
          src={
            item.image ||
            "/menu/IranianFood/c18324ae6672db4300937e223eb47955.jpg"
          }
          alt={item.name_fa}
          className="min-h-32 w-full min-w-24 object-cover md:min-h-44"
        />
      </div>
    </>
  );
}

export default MenuItemsImageWrapper;
