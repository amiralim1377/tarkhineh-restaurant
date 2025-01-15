import { useParams } from "react-router-dom";
import BranchPagePhotoSlider from "../../Components/BranchPagePhotoSlider/BranchPagePhotoSlider";
import BranchUsersComments from "../../Components/BranchUsersComments/BranchUsersComments";
import HomepageSlider from "../../Components/HomepageSlider/HomepageSlider";
import NoniranianFoods from "../../Components/NoniranianFoods/NoniranianFoods";
import PopularFoods from "../../Components/PopularFoods/PopularFoods";
import SpecialOffer from "../../Components/SpecialOffer/SpecialOffer";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import { fetchBranchesByname } from "../../Services/fetchBranchesByname";
import { useDispatch } from "react-redux";
import { setBranches, setSelectedBranch } from "../../Slice/branchesSlice";
import { useEffect } from "react";

function BranchesPages() {
  const { branchname } = useParams();
  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery({
    queryKey: ["branch", branchname],
    queryFn: () => fetchBranchesByname(branchname),
    onSuccess: () => {
      console.log("Data received on success:", data); // لاگ گرفتن داده‌های دریافتی
      dispatch(setSelectedBranch(data));
    },
  });

  useEffect(() => {
    if (data) {
      dispatch(setBranches(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <Loading />;

  if (error) return `An error has occurred: ${error.message}`;

  const { name_fa } = data;

  console.log(data);

  return (
    <div className="flex flex-col items-center">
      <HomepageSlider />
      <SpecialOffer />
      <PopularFoods />
      <NoniranianFoods />
      <button className="flex items-center gap-2 border border-green-primary-500 px-4 py-2 text-xs text-green-primary-500 md:text-base">
        <img src="/icons/note.svg" alt="" />
        مشاهده منوی کامل
      </button>
      <h2 className="mb-4 mt-8 text-base font-bold text-[#353535] md:text-2xl">
        شعبه {name_fa}
      </h2>
      <BranchPagePhotoSlider />
      <BranchUsersComments />
    </div>
  );
}

export default BranchesPages;
