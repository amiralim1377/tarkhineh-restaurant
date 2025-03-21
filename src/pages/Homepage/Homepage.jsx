import HomepageMenu from "../../Components/HomepageMenu/HomepageMenu";
import HomepageRestaurantBranches from "../../Components/HomepageRestaurantBranches/HomepageRestaurantBranches";
import HomepageRestaurantInformation from "../../Components/HomepageRestaurantInformation/HomepageRestaurantInformation";
import HomepageSearchInput from "../../Components/HomepageSearchInput/HomepageSearchInput";
import HomepageSlider from "../../Components/HomepageSlider/HomepageSlider";

function Homepage() {
  return (
    <div className="w-full">
      <HomepageSlider />
      {/* <HomepageSearchInput /> */}
      <HomepageMenu />
      <HomepageRestaurantInformation />
      <HomepageRestaurantBranches />
    </div>
  );
}

export default Homepage;
