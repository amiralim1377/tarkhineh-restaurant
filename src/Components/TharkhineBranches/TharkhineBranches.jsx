import { useDispatch } from "react-redux";
import { setSelectedBranch } from "../../Slice/branchesSlice/branchesSlice";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../../Slice/categorySlice/categorySlice";

function TharkhineBranches({ branches }) {
  const { address, name_fa, id, latitude, longitude, default_category, name } =
    branches;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToBranchesPage = () => {
    dispatch(
      setSelectedBranch({
        id,
        name,
        location: { lat: `${branches.latitude}`, lng: `${branches.longitude}` },
      }),
    ),
      dispatch(setCategory(branches.default_category));
    navigate(`/branches/${branches.name}`);
  };

  return (
    <div className="relative flex w-full flex-row items-center justify-center overflow-hidden rounded-lg border transition-all duration-500 ease-in-out hover:border-green-primary-500 hover:shadow-md md:min-h-[344px] md:flex-col">
      <div className="h-full w-full transform bg-red-300 transition-transform duration-500 ease-in-out group-hover:translate-y-[-20px] md:min-h-60">
        <img
          src="/public/branches/d5c39ff5c7dcfd7412a964561eb2869d.jpg"
          className="h-full min-h-20 w-full max-w-36 object-cover md:min-h-48 md:max-w-full"
          alt=""
        />
      </div>
      <div className="group bottom-0 z-30 flex w-full flex-col items-center justify-center bg-white p-3 transition-all duration-500 ease-in-out hover:min-h-40 hover:justify-between group-hover:translate-y-[-20px] md:absolute md:min-h-24">
        <h4 className="text-sm font-semibold md:text-xl">شعبه {name_fa}</h4>
        <p className="text-center text-xs md:p-2 md:text-sm">{address}</p>
        <button
          onClick={() => handleGoToBranchesPage()}
          className="hidden transform items-center rounded-lg border border-green-primary-500 p-2 text-green-primary-500 opacity-0 transition-opacity duration-500 ease-in-out group-hover:flex group-hover:translate-y-0 group-hover:opacity-100"
        >
          صفحه شعبه
          <img src="/icons/arrow-left-green.svg" className="" alt="" />
        </button>
      </div>
    </div>
  );
}

export default TharkhineBranches;
