import { useSelector } from "react-redux";
import MenuChipsSearchInput from "../../Components/MenuChipsSearchInput/MenuChipsSearchInput";
import UserSearchResult from "../../Components/UserSearchResult/UserSearchResult";
import SearchModalHomePage from "../../Components/SearchModalHomePage/SearchModalHomePage";
import SearchPageInputSearch from "../../Components/SearchPageInputSearch/SearchPageInputSearch";

function Search() {
  const searchDesireStatus = useSelector((state) => state.searchDesire.status);
  const searchDesireItems = useSelector((state) => state.searchDesire.items);
  const searchQuery = useSelector((state) => state.search);
  return (
    <div className="w-full">
      <div className="mt-8 flex w-full items-center justify-center">
        <h4 className="text-base text-[#353535] md:text-xl md:font-bold">
          نتایج جستجو برای:
        </h4>
        <span className="text-base text-green-primary-500 md:text-xl md:font-bold">
          {searchQuery}
        </span>
      </div>
      <SearchPageInputSearch />
      <div className="mx-auto flex flex-row flex-wrap items-center justify-center gap-2 p-3">
        {searchDesireItems?.map((desireItems) => (
          <UserSearchResult key={desireItems.id} desireItems={desireItems} />
        ))}
      </div>
    </div>
  );
}

export default Search;
