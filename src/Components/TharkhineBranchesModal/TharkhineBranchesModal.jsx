import { useDispatch } from "react-redux";
import { setSelectedBranch } from "../../Slice/branchesSlice/branchesSlice";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../../Slice/categorySlice/categorySlice";

function TharkhineBranchesModal({ branches }) {
  const { address, name_fa, branch_id, name, branch_images } = branches;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToBranchesPage = (branch_id) => {
    dispatch(
      setSelectedBranch({
        id: branch_id,
        name,
        location: { lat: `${branches.latitude}`, lng: `${branches.longitude}` },
      }),
    ),
      dispatch(setCategory(branches.default_category));
    // navigate(`/branches/${branches.name}`);
    navigate(`/menu`);
  };

  return (
    <div
      onClick={() => handleGoToBranchesPage(branch_id)}
      className="flex w-full transform cursor-pointer flex-row overflow-hidden rounded-lg border transition duration-300 ease-in-out hover:scale-105 hover:border-green-primary-500 hover:bg-green-primary-500 hover:shadow-md md:flex-col"
    >
      <div className="max-h-20 max-w-40 md:max-w-52">
        <img
          src={branch_images[0]}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="flex w-full flex-col items-center bg-white py-2">
        <h4 className="text-xs font-semibold md:text-base">شعبه {name_fa}</h4>
        <span className="max-w-36 text-center text-[10px] md:max-w-full md:p-2 md:text-xs">
          {address}
        </span>
      </div>
    </div>
  );
}

export default TharkhineBranchesModal;
