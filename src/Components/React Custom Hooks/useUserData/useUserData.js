import { useQuery } from "@tanstack/react-query";
import getUserId from "../../../Services/getUserId";
import fetchUserData from "../../../Services/fetchUserData";

const useUserData = () => {
  const {
    data: userId,
    isLoading: isUserLoading,
    error: userError,
  } = useQuery({
    queryKey: ["userId"],
    queryFn: getUserId,
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

  return {
    userId,
    isUserLoading,
    userError,
    userData,
    isUserDataLoading,
    userDataError,
  };
};

export default useUserData;
