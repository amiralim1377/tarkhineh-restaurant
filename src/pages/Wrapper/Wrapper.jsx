import { useEffect, useState } from "react";
import supabase from "../../Services/supabase";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setAuthenticated, logout } from "../../Slice/authSlice/authSlice";
import { setUserDetails, resetUser } from "../../Slice/userSlice/userSlice";
import Loading from "../../Components/Loading/Loading";

function Wrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        const token = session.access_token;
        localStorage.setItem("authToken", token);
        dispatch(setAuthenticated(true));

        const userDetails = {
          name: session.user.user_metadata.first_name,
          familyName: session.user.user_metadata.last_name,
          email: session.user.email,
          phoneNumber: session.user.user_metadata.phone,
          userName: session.user.user_metadata.username,
        };

        dispatch(setUserDetails(userDetails));
      } else {
        localStorage.removeItem("authToken");
        dispatch(logout());
        dispatch(resetUser());
      }
      setLoading(false);
    };
    getSession();
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default Wrapper;
