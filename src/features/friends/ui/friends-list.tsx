import { FC } from "react";
import { IRef } from "../../../shared/model/types/refs.interface";
import { FriendItem } from "../../../entities/friends";

interface IProps {
  refs?: IRef[];
}

export const FriendsList: FC<IProps> = ({ refs }) => {
  return (
    <ul className="h-[80svh] overflow-y-auto w-full mt-5">
      {refs?.sort((a,b) => b.powder - a.powder).map((ref, idx) => (
        <FriendItem key={idx} name={ref.name} powder={ref.powder} idx={idx} />
      ))}
    </ul>
  );
};
