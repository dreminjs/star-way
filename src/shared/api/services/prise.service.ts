import { IPriseResult } from "../../model/types/prise.interface";
import { instance } from "../api.instance";

export const priseService = {
  axios: instance,

  async postResult(time: number) :Promise<IPriseResult> {
    const data = Telegram.WebApp.initDataUnsafe;

    return (await this.axios.post("/general/check", {time,} ,{ headers : { user_id: data.user?.id }, })).data
  },
};
