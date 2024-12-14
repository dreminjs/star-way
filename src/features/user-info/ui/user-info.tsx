import { FC} from "react";
import { useGetUserData } from "../../../shared/api/queries/user.queries";

interface IProps {
  tasksCount: number;

}

export const UserInfo: FC<IProps> = ({ tasksCount }) => {

  const { userData } = useGetUserData();



  return (
    <div className="flex items-center justify-center max-w-[370px] mx-auto bg-[#222a44]  rounded-xl border-[#5991bd] border-y-2">
      <div className="flex justify-center items-center gap-2 ">
        <div className="flex gap-2">
          <p className="gradient-text text-[30px] font-bold">тапов </p>
          <p className="gradient-numbers text-[30px] font-bold"> {userData?.taps}</p>
        </div>
        <div className="h-[46px] w-[2px] bg-[#5991bd]"></div>
        <div className="flex items-center gap-2">
          <p className="gradient-text text-[30px] font-bold">заданий</p>
          <p className="gradient-numbers text-[30px] font-bold">{tasksCount}</p>
        </div>
      </div>
    </div>
  );
};
