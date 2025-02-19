import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { setAuthenticated } from "../../Slice/authSlice/authSlice";
import Dashboard from "../../pages/Dashboard/Dashboard";
import DashboardLoginForm from "../DashboardLoginForm.jsx/DashboardLoginForm";
import supabase from "../../Services/supabase";

function AuthWrapper() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Validate the token and set authentication status
      supabase.auth.getSession().then(({ data }) => {
        if (data.session) {
          dispatch(setAuthenticated(true));
        } else {
          localStorage.removeItem("authToken");
          dispatch(setAuthenticated(false));
        }
      });
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <DashboardLoginForm />
            )
          }
        />
        <Route
          path="/dashboard/*"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default AuthWrapper; // تغییر نام خروجی
