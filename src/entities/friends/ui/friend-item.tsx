import { FC } from "react";
import { IRef } from "../../../shared/model/types/refs.interface";

interface IProps extends IRef {
  idx: number;
}

export const FriendItem: FC<IProps> = ({ name, powder, idx }) => {
  return (
    <li className="flex justify-between items-center w-full px-[20px] task-item-gradient py-[10px] border-[#90b0c4] border-b-2 mb-2">
      <p className="gradient-text italic text-[25px]">{`${idx + 1}. ${name}`}</p>
      <p className="text-white text-[30px]">
        {powder}
      </p>
    </li>
  );
};
