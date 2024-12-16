import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../model/constants";
import { tasksService } from "../services/tasks.service";

export const useGetTasks = () => {
  const { data, isPending: tasksLoading, refetch: refetchTasks } = useQuery({
    queryKey: [QUERY_KEYS.tasks],
    queryFn: async () => await tasksService.findMany(),
  });

  return {
    tasks: data?.channels,
    tasksLoading,
    refetchTasks
  };
};
