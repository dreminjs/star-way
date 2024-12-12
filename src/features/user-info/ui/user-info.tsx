import { FC } from "react";

interface IProps {
  tasksCount: number;
}

export const UserInfo: FC<IProps> = ({ tasksCount }) => {
  return (
    <div>
      <div>
        <span className="text-gradient">тапов</span>
        <span></span>
      </div>
      <div>
        <span className="text-gradient">заданий</span>
        <span>{tasksCount}</span>
      </div>
    </div>
  );
};
