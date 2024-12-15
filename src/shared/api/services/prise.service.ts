import { ICheckBody, ICheckSubResponse, IPriseResult } from "../../model/types/prise.interface";
import { instance } from "../api.instance";

const data = Telegram.WebApp.initDataUnsafe;

console.log(data);

export const priseService = {
  axios: instance,

  async postResult(time: number): Promise<IPriseResult> {
    return (await this.axios.post("/general/check", { time })).data;
  },


  async checkSub(payload: ICheckBody): Promise<ICheckSubResponse> {
    return (await this.axios.post("/channels/check", payload).then((res) => res.data));
  },
};
