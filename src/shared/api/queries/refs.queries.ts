import { useMutation, useQuery } from "@tanstack/react-query";
import { refService } from "../services/ref.service";

export const useGetRefs = () => {
  const { data: refsData, isPending: refsDataLoading, refetch: refsDataRefetch } = useQuery({
    queryKey: ["refs"],
    queryFn: async () => await refService.findMany(),
  });

  return {
    refsData,
    refsDataLoading,
    refsDataRefetch
  };
};

export const useBoostRefs = () => {
  const {
    data: boostData,
    isPending: boostDataLoading,
    isSuccess: boostDataSuccess,
    mutate: boost
  } = useMutation({
    mutationFn: () => refService.getBoost(),
  });

  return {
    boostData,
    boostDataLoading,
    boostDataSuccess,
    boost
  }
};
