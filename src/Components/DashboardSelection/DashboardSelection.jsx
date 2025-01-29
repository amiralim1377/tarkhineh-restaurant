import DashboardDesktop from "../DashboardDesktop/DashboardDesktop";
import DashboardMobile from "../DashboardMobile/DashboardMobile";

function DashboardSelection() {
  return (
    <div>
      <DashboardMobile />
      <DashboardDesktop />
    </div>
  );
}

export default DashboardSelection;
