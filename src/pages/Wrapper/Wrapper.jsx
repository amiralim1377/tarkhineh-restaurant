import { useEffect, useState } from "react";
import supabase from "../../Services/supabase";
import { Navigate } from "react-router-dom";
import LoginLogoutModal from "../../Components/LoginLogoutModal/LoginLogoutModal";
import { motion, AnimatePresence } from "framer-motion";

function Wrapper({ children }) {
  const [isAuthentication, setIsAuthentication] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsAuthentication(!!session);
      setLoading(false);
    };
    getSession();
  }, []);

  if (loading) {
    return <div className="spinner">Loading...</div>; // افزودن انیمیشن بارگذاری
  } else {
    if (isAuthentication) {
      return (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      );
    }
  }
  return <LoginLogoutModal />;
}

export default Wrapper;
