import { instance } from "../api.instance";

export const userService = {
  axios: instance,

  findOneData: function () {
    return this.axios.get("/general/get_taps");
  },
};
