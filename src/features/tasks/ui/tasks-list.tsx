import { FC, useEffect } from "react";
import { ITask } from "../../../shared/model/types/tasks.interfaces";
import {  TasksItem } from "../../../entities/tasks";
import { useCheckSub } from "../../../shared/api/queries/prise.queries";
import { InviteFriendTaskItem } from "../../../entities/friends";

interface IProps {
  channels: ITask[];
  refetch: () => void
}

export const TasksList: FC<IProps> = ({ channels,refetch }) => {
  const {
    checkSub,
    checkSubSuccess
  } = useCheckSub();

  const handleCheckSub = (id: number) => {
    checkSub({ group_id: id });
  };

  useEffect(() => {
    refetch()
  },[checkSubSuccess, refetch])

  return (
    <ul className="h-[80svh] w-full mt-[50px] overflow-y-hidden">
      <InviteFriendTaskItem />
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
