import DashboardDesktop from "../../Components/DashboardDesktop/DashboardDesktop";
import DashboardMobile from "../../Components/DashboardMobile/DashboardMobile";

function Dashboard() {
  return (
    <div>
      <>
        <DashboardMobile />
        <DashboardDesktop />
      </>
    </div>
  );
}

export default Dashboard;
