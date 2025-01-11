import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/AppLayout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import Contactus from "./pages/Contactus/contactus";
import AboutUs from "./pages/AboutUs/AboutUs";
import Franchise from "./pages/Franchise/Franchise";
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
