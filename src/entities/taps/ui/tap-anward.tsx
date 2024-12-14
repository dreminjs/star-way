import { FC } from "react";

interface IProps {
  countTaps: number;
}

export const TapAnward: FC<IProps> = ({ countTaps }) => {
  return (
    <div className="flex flex-col justify-center h-[80px] w-[80px] items-center  bg-[#222a44] text-white text-[20px] font-bold rounded-full ">
      <div className="p-0 m-0 text-[20px] text-blue-400">тап</div>
      <div className="text-[25px] gradient-numbers">+{countTaps}</div>
    </div>
  );
};
