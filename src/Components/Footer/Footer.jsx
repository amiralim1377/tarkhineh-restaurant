import { Link, useNavigate } from "react-router-dom";
import FooterForm from "../FooterForm/FooterForm";
import { useQuery } from "@tanstack/react-query";
import { fetchBranches } from "../../Services/fetchBranches";
import { useDispatch } from "react-redux";
import { setSelectedBranch } from "../../Slice/branchesSlice/branchesSlice";
import { setCategory } from "../../Slice/categorySlice/categorySlice";

function Footer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: branches,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  });

  const handleGoToBranchesPage = (branch) => {
    dispatch(
      setSelectedBranch({
        id: branch.branch_id,
        name: branch.name,
        location: { lat: `${branch.latitude}`, lng: `${branch.longitude}` },
      }),
    ),
      dispatch(setCategory(branch.default_category));
    navigate(`/branches/${branch.name}`);
  };

  return (
    <footer className="bg-backgroundfooter flex w-full flex-row items-center justify-between md:py-16">
      <div className="mx-auto flex w-full max-w-8xl justify-between">
        <div className="flex w-full max-w-xl flex-row items-start justify-start gap-4 px-2 py-5 md:justify-between">
          <div className="flex h-full w-full max-w-28 flex-col space-y-2 md:max-w-48">
            <h2 className="text-nowrap text-sm font-bold text-white md:text-xl">
              دسترسی آسان
            </h2>
            <div className="flex flex-col space-y-3 text-nowrap px-4">
              <ul className="flex flex-col space-y-3 text-xs font-medium text-white md:text-sm">
                <li className="cursor-pointer hover:text-gray-400">
                  <Link to="FAQ">پرسش‌های متداول</Link>
                </li>
                <li className="cursor-pointer hover:text-gray-400">
                  <Link to="Rules">قوانین ترخینه</Link>
                </li>
                <li className="cursor-pointer hover:text-gray-400">
                  <Link to="Privacy">حریم خصوصی</Link>
                </li>
              </ul>
              <div>
                <img src="/footer/Social Media.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex h-full w-full max-w-28 flex-col space-y-2 md:max-w-48">
            <h2 className="text-nowrap text-sm font-bold text-white md:text-xl">
              شعبه‌های ترخینه
            </h2>
            <div className="flex flex-col space-y-3 px-4">
              <ul className="flex flex-col space-y-3 text-nowrap text-xs text-white md:text-sm">
                {branches && branches.length > 0 ? (
                  branches.map((branch) => (
                    <li
                      key={branch.branch_id}
                      className="cursor-pointer hover:text-gray-400"
                    >
                      <a onClick={() => handleGoToBranchesPage(branch)}>
                        شعبه {branch.name_fa}
                      </a>
                    </li>
                  ))
                ) : (
                  <div>No branches available</div>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden w-full max-w-xl items-end py-5 md:flex md:justify-end">
          <FooterForm />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
