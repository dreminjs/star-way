import { FC } from "react";

interface IProps {
    coins: number;
  }
  
  export const CoinsCount: FC<IProps> = ({ coins }) => {
    const formattedCoins = coins.toString().padStart(5, '0');
    return <p className="text-[35px] gradient-numbers font-bold text-center gradient-coins">{formattedCoins}</p>;
  };