import { useMutation } from "@tanstack/react-query";
import { priseService } from "../services/prise.service";

export const usePostResult = () => {
  const {
    mutate: postResult,
    isPending: postResultLoading,
    error: postResultError,
    data: postResultData,
    isSuccess: postResultSuccess
  } = useMutation({
    mutationFn: (time: number) => priseService.postResult(time),
  });

  return {
    postResult,
    postResultLoading,
    postResultError,
    postResultData,
    postResultSuccess
  }
};
