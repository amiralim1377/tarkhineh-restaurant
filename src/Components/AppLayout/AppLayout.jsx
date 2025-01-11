import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function AppLayout() {
  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-between">
      <Header />
      <main className="w-full flex-grow flex-col items-center justify-between">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
