import { FC } from "react";

interface IProps {
  boost: number;
}

export const BoostCoins: FC<IProps> = ({ boost }) => {
  return (
    <button className="mx-auto block text-[17px] italic">
      <span className="text-white font-sans">
        буст от друзей
        <span className="text-[#bb4b29]">{" "}{boost}</span>
      </span>
    </button>
  );
};
