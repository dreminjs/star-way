import { FC } from "react";
import { useGetUserData } from "../../../shared/api/queries/user.queries";

interface IProps {
  tasksCount: number;
}

export const UserInfo: FC<IProps> = ({ tasksCount }) => {

  const { userData } = useGetUserData()

  return (
    <div className="flex justify-between w-[70%] mx-auto">
      <div className="flex items-center gap-2 border-r border-[#086dd3] pr-5">
        <p className="gradient-text text-[30px] font-bold">тапов</p>
        <p className="gradient-numbers text-[30px] font-bold">{userData?.taps}</p>
      </div>
      <div className="flex items-center gap-2 pl-5">
        <p className="gradient-text text-[30px] font-bold">заданий</p>
        <p className="gradient-numbers text-[30px] font-bold">{tasksCount}</p>
      </div>
    </div>
  );
};
