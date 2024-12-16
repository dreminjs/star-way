import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/user.service";

export const useGetUserData = () => {
  const { data: userData, isPending: userDataLoading, isSuccess: userDataSuccess, refetch, isFetched: userDataFetched } = useQuery({
    queryKey: ["general", "user"],
    queryFn: async () => await userService.findOneData(),
    enabled: true
  });

  return {
    userData,
    userDataLoading,
    userDataSuccess,
    refetch,
    userDataFetched
  };
};

export const useCheckEnter = () => {
  const { data: days, isPending: daysIsLoading } = useQuery({
    queryKey: ["general", "check"],
    queryFn: async () => await userService.checkEnter(),
  });

  return {
    days,
    daysIsLoading,
  };
};
