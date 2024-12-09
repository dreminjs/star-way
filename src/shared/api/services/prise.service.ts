import { IPriseResult } from "../../model/types/prise.interface";
import { instance } from "../api.instance";

const data = Telegram.WebApp.initDataUnsafe;

console.log(data);

export const priseService = {
  axios: instance,

  async postResult(time: number): Promise<IPriseResult> {
    return (await this.axios.post("/general/check", { time })).data;
  },
};
