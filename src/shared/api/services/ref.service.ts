import { IBoostRefsResponse, IGetRefsResponse } from "../../model/types/refs.interface";
import { instance } from "../api.instance";




export const refService = {
    axios: instance,



    async findMany(): Promise<IGetRefsResponse> {
        return await this.axios.get("refs/get_refs").then((res) => res.data);
    },

    async getBoost(): Promise<IBoostRefsResponse> {
        return await this.axios.post("refs/claim").then((res) => res.data);
    },
}