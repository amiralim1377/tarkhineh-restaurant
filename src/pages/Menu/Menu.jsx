import { useEffect } from "react";
import HomepageSlider from "../../Components/HomepageSlider/HomepageSlider";
import MenuChips from "../../Components/MenuChips/MenuChips";
import MenuItems from "../../Components/MenuItems/MenuItems";
import MenupageNavbar from "../../Components/MenupageNavbar/MenupageNavbar";
import { useDispatch } from "react-redux";
import { resetSearchQuery } from "../../Slice/searchSlice/searchSlice";
import MenuChipsSearchInput from "../../Components/MenuChipsSearchInput/MenuChipsSearchInput";

function Menu() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Reset search query when MenuPage is loaded
    dispatch(resetSearchQuery());
  }, [dispatch]);

  return (
    <div>
      <HomepageSlider />
      <MenupageNavbar />
      <div className="mx-auto flex max-w-8xl flex-col items-center justify-between pt-4 md:flex-row">
        <MenuChips />
        <MenuChipsSearchInput />
      </div>

      <MenuItems />
    </div>
  );
}

export default Menu;
