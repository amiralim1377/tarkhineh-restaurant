import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../Slice/categorySlice/categorySlice";

function MenupageNavbar() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory,
  );

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  const getCategoryClass = (category) =>
    //Selected category === the category the user clicked.
    selectedCategory === category
      ? "block font-bold text-green-primary-500 underline-offset-2 transition-all duration-300"
      : "transition-all duration-300";

  return (
    <div className="mx-auto bg-[#EDEDED]">
      <div className="mx-auto max-w-md md:max-w-8xl">
        <nav>
          <ul className="flex items-center gap-6 px-2 py-5 text-sm leading-9 text-[#717171] md:text-xl">
            <li>
              <button
                className={getCategoryClass("main")}
                onClick={() => handleCategoryClick("main")}
              >
                غذای اصلی
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenupageNavbar;
