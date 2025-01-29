import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Loading from "./Components/Loading/Loading";
import { Toaster } from "react-hot-toast";
import DashboardSelection from "./Components/DashboardSelection/DashboardSelection";
import DashboardProfile from "./pages/DashboardProfile/DashboardProfile";
import DashboardOrderTracking from "./pages/DashboardOrderTracking/DashboardOrderTracking";
import DashboardFavorites from "./pages/DashboardFavorites/DashboardFavorites";
import DashboardMyaddresses from "./pages/DashboardMyaddresses/DashboardMyaddresses";
import DashboardExit from "./pages/DashboardExit/DashboardExit";

// Lazy loading components
const AppLayout = lazy(() => import("./Components/AppLayout/AppLayout"));
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Contactus = lazy(() => import("./pages/Contactus/contactus"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Franchise = lazy(() => import("./pages/Franchise/Franchise"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
const Privacy = lazy(() => import("./pages/Privacy/Privacy"));
const Rules = lazy(() => import("./pages/Rules/Rules"));
const Menu = lazy(() => import("./pages/Menu/Menu"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const CompletionInformation = lazy(
  () => import("./pages/CompletionInformation/CompletionInformation"),
);
const Payment = lazy(() => import("./pages/Payment/Payment"));
const SuccessfulPayment = lazy(
  () => import("./pages/SuccessfulPayment/SuccessfulPayment"),
);
const BranchesPages = lazy(() => import("./pages/BranchesPages/BranchesPages"));

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "branches/:branchname",
        element: (
          <Suspense fallback={<Loading />}>
            <BranchesPages />
          </Suspense>
        ),
      },
      {
        path: "menu",
        element: (
          <Suspense fallback={<Loading />}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "completion-of-information",
        element: (
          <Suspense fallback={<Loading />}>
            <CompletionInformation />
          </Suspense>
        ),
      },
      {
        path: "payment",
        element: (
          <Suspense fallback={<Loading />}>
            <Payment />
          </Suspense>
        ),
      },
      {
        path: "successful-payment",
        element: (
          <Suspense fallback={<Loading />}>
            <SuccessfulPayment />
          </Suspense>
        ),
      },
      {
        path: "contact-us",
        element: (
          <Suspense fallback={<Loading />}>
            <Contactus />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={<Loading />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "franchise",
        element: (
          <Suspense fallback={<Loading />}>
            <Franchise />
          </Suspense>
        ),
      },
      {
        path: "FAQ",
        element: (
          <Suspense fallback={<Loading />}>
            <FAQ />
          </Suspense>
        ),
      },
      {
        path: "Rules",
        element: (
          <Suspense fallback={<Loading />}>
            <Rules />
          </Suspense>
        ),
      },
      {
        path: "Privacy",
        element: (
          <Suspense fallback={<Loading />}>
            <Privacy />
          </Suspense>
        ),
      },
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<Loading />}>
            <DashboardSelection />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: (
              <Suspense fallback={<Loading />}>
                <DashboardProfile />
              </Suspense>
            ),
          },
          {
            path: "ordertracking",
            element: (
              <Suspense fallback={<Loading />}>
                <DashboardOrderTracking />
              </Suspense>
            ),
          },
          {
            path: "favorites",
            element: (
              <Suspense fallback={<Loading />}>
                <DashboardFavorites />
              </Suspense>
            ),
          },
          {
            path: "myaddresses",
            element: (
              <Suspense fallback={<Loading />}>
                <DashboardMyaddresses />
              </Suspense>
            ),
          },
          {
            path: "exit",
            element: (
              <Suspense fallback={<Loading />}>
                <DashboardExit />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={true} gutter={8} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
