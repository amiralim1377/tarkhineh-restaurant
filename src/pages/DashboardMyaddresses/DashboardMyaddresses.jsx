import { useSelector } from "react-redux";
import DashboardNotAddresses from "../../Components/DashboardNotAddresses/DashboardNotAddresses";
import DashboardMyaddressesList from "../../Components/DashboardMyaddressesList/DashboardMyaddressesList";

function DashboardMyaddresses() {
  const addresses = useSelector((state) => state.user?.addresses);
  console.log(addresses);

  return (
    <div>
      {addresses.length > 0 ? (
        <DashboardMyaddressesList addresses={addresses} />
      ) : (
        <DashboardNotAddresses />
      )}
    </div>
  );
}

export default DashboardMyaddresses;
