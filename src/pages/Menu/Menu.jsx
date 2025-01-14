import HomepageSlider from "../../Components/HomepageSlider/HomepageSlider";
import MenuChips from "../../Components/MenuChips/MenuChips";
import MenuItems from "../../Components/MenuItems/MenuItems";
import MenupageNavbar from "../../Components/MenupageNavbar/MenupageNavbar";

function Menu() {
  return (
    <div>
      <HomepageSlider />
      <MenupageNavbar />
      <MenuChips />
      <MenuItems />
    </div>
  );
}

export default Menu;
