import { FC } from "react";

interface IProps {
  countTaps: number;
  seconds: number;
}

export const StarHeader: FC<IProps> = ({ countTaps, seconds }) => {
  return (
    <header className="mb-[35px] flex justify-between items-center w-full">
      <p className="text-white text-[30px]">
        Тапы <span className="gradient-numbers text-[30px]">{countTaps}</span>
      </p>
      <p className="text-[30px] gradient-numbers">0:0{seconds}</p>
    </header>
  );
};
