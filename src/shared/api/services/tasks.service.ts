import { ITask } from "../../model/types/tasks.interfaces";
import { instance } from "../api.instance";

interface IFindManyResponse { 
  channels: ITask[]
}

export const tasksService = {
  axios: instance,

  findMany: async function(): Promise<IFindManyResponse> {
    return await this.axios.get("channels/get_channels").then((res) => res.data);
  },
};
