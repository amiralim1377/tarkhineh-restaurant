import { useDispatch, useSelector } from "react-redux";
import DashboardNotAddresses from "../../Components/DashboardNotAddresses/DashboardNotAddresses";
import DashboardMyaddressesList from "../../Components/DashboardMyaddressesList/DashboardMyaddressesList";
import { fetchAddresses } from "../../Services/fetchAddresses";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { setAddresses } from "../../Slice/userSlice/userSlice";

function DashboardMyaddresses() {
  const dispatch = useDispatch();
  const {
    data: addresses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["addresses"],
    queryFn: fetchAddresses,
  });

  useEffect(() => {
    if (addresses) {
      dispatch(setAddresses(addresses));
    }
  }, [addresses, dispatch]);

  const addressState = useSelector((state) => state.user?.addresses);

  if (isLoading) {
    return <div>در حال بارگذاری آدرس‌ها...</div>;
  }

  if (error) {
    return <div>خطا در دریافت آدرس‌ها: {error.message}</div>;
  }

  return (
    <div>
      {addressState.length > 0 ? (
        <DashboardMyaddressesList addressState={addressState} />
      ) : (
        <DashboardNotAddresses />
      )}
    </div>
  );
}

export default DashboardMyaddresses;
