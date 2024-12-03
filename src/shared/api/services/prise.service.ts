import { IPriseResult } from "../../model/types/prise.interface";
import { instance } from "../api.instance";

const data = Telegram.WebApp.initDataUnsafe;

export const priseService = {
  axios: instance,

  async postResult(time: number) :Promise<IPriseResult> {
  

    return (await this.axios.post("/general/check", {time}, {headers: { user_id: data.user?.id }})).data
  },
};
