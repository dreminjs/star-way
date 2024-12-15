import { FC } from "react";
import { IRef } from "../../../shared/model/types/refs.interface";
import { FriendItem } from "../../../entities/friends";

interface IProps {
  refs?: IRef[];
}

export const FriendsList: FC<IProps> = ({ refs }) => {
  return (
    <ul className="h-] overflow-y-hidden w-full mt-5">
      {refs?.map((ref, idx) => (
        <FriendItem key={idx} name={ref.name} powder={ref.powder} idx={idx} />
      ))}
    </ul>
  );
};
