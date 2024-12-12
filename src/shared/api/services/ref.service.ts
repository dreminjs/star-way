import { instance } from "../api.instance";




export const refService = {
    axios: instance,



    async findMany(): Promise<unknown> {
        return await this.axios.get("refs/get_refs").then((res) => res.data);
    },
}