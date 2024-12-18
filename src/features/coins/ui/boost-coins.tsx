import { FC } from "react";

interface IProps {
  boost: number;
  onTakeBoost: () => void;
}

export const BoostCoins: FC<IProps> = ({ boost, onTakeBoost }) => {
  return (
    <button onClick={boost >= 1 ? onTakeBoost : () => {}} className="mx-auto block text-[17px] italic">
      <span className="text-white font-sans">
        буст от друзей
        <span className="text-[#bb4b29]">{" "}{Math.round(boost)}</span>
      </span>
    </button>
  );
};
