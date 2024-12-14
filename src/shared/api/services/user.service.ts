import { IEnterResponse, UserData } from "../../model/types/user.interface";
import { instance } from "../api.instance";



export const userService = {
  axios: instance,

  findOneData: async function (): Promise<UserData> {
    return this.axios.get("/general/get_taps").then((res) => res.data);
  },

  checkEnter: async function (): Promise<IEnterResponse> {
    return this.axios.get("/general/enter").then((res) => res.data);
  },
};
