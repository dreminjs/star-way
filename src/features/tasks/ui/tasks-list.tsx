import { FC } from "react";
import { ITask } from "../../../shared/model/types/tasks.interfaces";
import { TasksItem } from "../../../entities/tasks";
import { useCheckSub } from "../../../shared/api/queries/prise.queries";

interface IProps {
  channels: ITask[];
}

export const TasksList: FC<IProps> = ({ channels }) => {
  const {
    checkSub,
    checkSubLoading,
    checkSubError,
    checkSubData,
    checkSubSuccess,
  } = useCheckSub();

  const handleCheckSub = (id: number) => {
    checkSub({ group_id: id });
  };

  return (
    <ul className="h-[80svh] w-full mt-[50px] overflow-y-hidden">
      {channels.map((channel, idx) => (
        <TasksItem
          id={channel.id}
          onCheckSub={handleCheckSub}
          link={channel.link}
          key={idx}
          content={channel.name}
        />
      ))}
    </ul>
  );
};
