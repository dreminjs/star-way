import { useMutation } from "@tanstack/react-query";
import { priseService } from "../services/prise.service";
import { ICheckBody } from "../../model/types/prise.interface";

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

export const useCheckSub = () => {
  const {
    mutate: checkSub,
    isPending: checkSubLoading,
    error: checkSubError,
    data: checkSubData,
    isSuccess: checkSubSuccess
  } = useMutation({
    mutationFn: (payload: ICheckBody) => priseService.checkSub(payload),
  });

  return {
    checkSub,
    checkSubLoading,
    checkSubError,
    checkSubData,
    checkSubSuccess
  };
}