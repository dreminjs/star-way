import { FC } from "react";
import { formatTime } from "../../../shared";



interface IProps {
  countTaps: number;
  seconds: number;
}

export const StarHeader: FC<IProps> = ({ countTaps, seconds }) => {
  return (
    <header className=" w-full px-5">
      <div className="flex justify-between items-center">
        <p className="text-white text-[30px] font-bold">
          Тапы <span className="gradient-numbers text-[35px]">{countTaps > 0 ? countTaps : 0}</span>
        </p>
        <p className="text-[35px] gradient-numbers font-bold">
          {formatTime(seconds)}
        </p>
      </div>
    </header>
  );
};
