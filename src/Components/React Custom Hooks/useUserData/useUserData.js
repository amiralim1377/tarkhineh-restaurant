import { useQuery } from "@tanstack/react-query";
import getUserId from "../../../Services/getUserId";
import fetchUserData from "../../../Services/fetchUserData";
import { useDispatch } from "react-redux";
import { setAuthenticated, logout } from "../../../Slice/authSlice/authSlice";

const useUserData = () => {
  const dispatch = useDispatch();

  const {
    data: userId,
    isLoading: isUserLoading,
    error: userError,
  } = useQuery({
    queryKey: ["userId"],
    queryFn: getUserId,
    onSuccess: (data) => {
      if (data) {
        dispatch(setAuthenticated(true));
      } else {
        dispatch(logout());
      }
    },
  });

  const {
    data: userData,
    isLoading: isUserDataLoading,
    error: userDataError,
  } = useQuery({
    queryKey: ["userData", userId],
    queryFn: () => fetchUserData(userId),
    enabled: !!userId,
  });

  const isLoggedIn = !!userId;

  return {
    userId,
    isUserLoading,
    userError,
    userData,
    isUserDataLoading,
    userDataError,
    isLoggedIn,
  };
};

export default useUserData;
