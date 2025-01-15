import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/AppLayout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import Contactus from "./pages/Contactus/contactus";
import AboutUs from "./pages/AboutUs/AboutUs";
import Franchise from "./pages/Franchise/Franchise";
import FAQ from "./pages/FAQ/FAQ";
import Privacy from "./pages/Privacy/Privacy";
import Rules from "./pages/Rules/Rules";

import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import CompletionInformation from "./pages/CompletionInformation/CompletionInformation";
import Payment from "./pages/Payment/Payment";
import SuccessfulPayment from "./pages/SuccessfulPayment/SuccessfulPayment";
import { Provider } from "react-redux";
import store from "../store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BranchesPages from "./pages/BranchesPages/BranchesPages";

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
        path: "branches/:branchname",
        element: <BranchesPages />,
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

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
