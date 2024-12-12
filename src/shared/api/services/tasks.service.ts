import { ITask } from "../../model/types/tasks.interfaces";
import { instance } from "../api.instance";

export const tasksService = {
  axios: instance,

  findMany: async function(): Promise<ITask> {
    return await this.axios.get("channels/get_channels").then((res) => res.data);
  },
};
