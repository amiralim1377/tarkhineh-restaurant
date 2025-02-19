import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Slice/orderCategorySlice/orderCategorySlice";

function DashboardOrderTrackingChips() {
  const selectedCategory = useSelector((state) => state.orderCategory);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="flex w-full gap-3 overflow-y-scroll p-2 text-center text-sm md:max-w-3xl md:overflow-visible xl:text-base">
        <li
          className={`flex cursor-pointer items-center justify-center text-nowrap rounded-lg bg-gray-100 px-3 py-2 text-center text-xs transition-all duration-300 ${selectedCategory == "all" ? "bg-green-100" : ""}`}
          onClick={() => dispatch(setCategory("all"))}
        >
          همه
          <img
            src="/icons/arrow-left-blakc.svg"
            className="ml-2 h-3 w-3"
            alt="Arrow"
          />
        </li>
        <li
          className={`flex cursor-pointer items-center justify-center text-nowrap rounded-lg bg-gray-100 px-3 py-2 text-center text-xs transition-all duration-300 ${selectedCategory == "processing" ? "bg-green-100" : ""}`}
          onClick={() => dispatch(setCategory("processing"))}
        >
          جاری
          <img
            src="/icons/arrow-left-blakc.svg"
            className="ml-2 h-3 w-3"
            alt="Arrow"
          />
        </li>
        <li
          className={`flex cursor-pointer items-center justify-center text-nowrap rounded-lg bg-gray-100 px-3 py-2 text-center text-xs transition-all duration-300 ${selectedCategory == "delivered" ? "bg-green-100" : ""}`}
          onClick={() => dispatch(setCategory("delivered"))}
        >
          تحویل‌شده
          <img
            src="/icons/arrow-left-blakc.svg"
            className="ml-2 h-3 w-3"
            alt="Arrow"
          />
        </li>
        <li
          className={`flex cursor-pointer items-center justify-center text-nowrap rounded-lg bg-gray-100 px-3 py-2 text-center text-xs transition-all duration-300 ${selectedCategory == "canceled" ? "bg-green-100" : ""}`}
          onClick={() => dispatch(setCategory("canceled"))}
        >
          لغو‌شده
          <img
            src="/icons/arrow-left-blakc.svg"
            className="ml-2 h-3 w-3"
            alt="Arrow"
          />
        </li>
      </ul>
    </div>
  );
}

export default DashboardOrderTrackingChips;
