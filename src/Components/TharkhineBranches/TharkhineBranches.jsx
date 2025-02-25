import { useDispatch } from "react-redux";
import { setSelectedBranch } from "../../Slice/branchesSlice/branchesSlice";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../../Slice/categorySlice/categorySlice";

function TharkhineBranches({ branches }) {
  const {
    address,
    name_fa,
    branch_id,
    latitude,
    longitude,
    default_category,
    name,
  } = branches;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToBranchesPage = () => {
    dispatch(
      setSelectedBranch({
        id: branch_id,
        name,
        location: { lat: `${branches.latitude}`, lng: `${branches.longitude}` },
      }),
    );
    dispatch(setCategory(branches.default_category));
    navigate(`/branches/${branches.name}`);
  };

  return (
    <div className="relative flex w-full flex-row items-center justify-center overflow-hidden rounded-lg border transition-all duration-500 ease-in-out hover:border-green-primary-500 hover:shadow-md md:min-h-[344px] md:flex-col">
      <div className="h-full w-full transform transition-transform duration-500 ease-in-out md:min-h-60 group-hover:md:translate-y-[-20px]">
        <img
          src="/public/branches/d5c39ff5c7dcfd7412a964561eb2869d.jpg"
          className="h-full min-h-20 w-full max-w-36 object-cover md:min-h-48 md:max-w-full"
          alt=""
        />
      </div>
      <div className="group bottom-0 z-30 flex w-full flex-col items-center justify-center bg-white p-3 transition-all duration-500 ease-in-out md:absolute md:min-h-24 hover:md:min-h-40 hover:md:justify-between group-hover:md:translate-y-[-20px]">
        <h4 className="text-sm font-semibold md:text-xl">شعبه {name_fa}</h4>
        <p className="text-center text-xs md:p-2 md:text-sm">{address}</p>
        <button
          onClick={() => handleGoToBranchesPage()}
          className="hidden transform items-center rounded-lg border border-green-primary-500 p-2 text-green-primary-500 opacity-0 transition-opacity duration-500 ease-in-out group-hover:md:flex group-hover:md:translate-y-0 group-hover:md:opacity-100"
        >
          صفحه شعبه
          <img src="/icons/arrow-left-green.svg" className="" alt="" />
        </button>
      </div>
    </div>
  );
}

export default TharkhineBranches;
