import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function AppLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <Header />
      <main className="w-full flex-grow flex-col overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
