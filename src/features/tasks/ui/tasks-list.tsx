import { FC } from "react";
import { ITask } from "../../../shared/model/types/tasks.interfaces";
import { TasksItem } from "../../../entities/tasks";



interface IProps {
  channels: ITask[];
}

export const TasksList: FC<IProps> = ({ channels }) => {
  return <ul className="h-[80svh] w-full mt-[50px] overflow-y-hidden">
    {
      channels.map((channel,idx) => (
        <TasksItem key={idx} content={channel.name} />
      ))
    }
  </ul>;
};
