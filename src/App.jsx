import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/AppLayout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import Contactus from "./pages/Contactus/contactus";
import AboutUs from "./pages/AboutUs/AboutUs";
import Franchise from "./pages/Franchise/Franchise";
import FAQ from "./pages/FAQ/FAQ";
import Privacy from "./pages/Privacy/Privacy";
import Rules from "./pages/Rules/Rules";
import EkbatanPage from "./pages/EkbatanPage/EkbatanPage";
import VanakPage from "./pages/VanakPage/VanakPage";
import AghadsiePage from "./pages/AghadsiePage/AghadsiePage";
import ChalousPage from "./pages/ChalousPage/ChalousPage";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import CompletionInformation from "./pages/CompletionInformation/CompletionInformation";
import Payment from "./pages/Payment/Payment";
import SuccessfulPayment from "./pages/SuccessfulPayment/SuccessfulPayment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "branches/ekbatan",
        element: <EkbatanPage />,
      },
      {
        path: "branches/chalous",
        element: <ChalousPage />,
      },

      {
        path: "branches/aghadsie",
        element: <AghadsiePage />,
      },
      {
        path: "branches/vanak",
        element: <VanakPage />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "completion-of-information",
        element: <CompletionInformation />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "successful-payment",
        element: <SuccessfulPayment />,
      },
      {
        path: "contact-us",
        element: <Contactus />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "franchise",
        element: <Franchise />,
      },
      {
        path: "FAQ",
        element: <FAQ />,
      },
      {
        path: "Rules",
        element: <Rules />,
      },
      {
        path: "Privacy",
        element: <Privacy />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
