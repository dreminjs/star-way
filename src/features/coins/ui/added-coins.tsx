import Coins10 from "../../../assets/coins-10.png";
import Coins20 from "../../../assets/coins-20.png";
import Coins30 from "../../../assets/coins-30.png";
import Coins50 from "../../../assets/coins-50.png";
import Coins100 from "../../../assets/coins-100.png";
import { FC, useEffect, useState } from "react";

interface IProps {
  coins: number;
}

export const AddedCoins: FC<IProps> = ({ coins }) => {
  const [previousCoins, setPreviousCoins] = useState<number>(0);
  const [differenceCoins, setDifferenceCoins] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  useEffect(() => {
    if (isFirstRender) {
      setPreviousCoins(coins);
      setIsFirstRender(false);
    } else if (coins !== previousCoins) {
      const difference = coins - previousCoins;
      console.log(difference)
      setDifferenceCoins(difference);
      setPreviousCoins(coins);

      setIsVisible(true);
    }
  }, [coins, previousCoins, isFirstRender]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearInterval(timer);
  }, [isVisible]);

  const getCoinImage = () => {
    if (differenceCoins === 10) return Coins10;
    else if (differenceCoins === 20) return Coins20;
    else if (differenceCoins === 30) return Coins30;
    else if (differenceCoins === 50) return Coins50;
    else if (differenceCoins === 100) {
      return Coins100;
    }
  };

  return (
    <div className="mx-auto w-[45px] h-[45px]">
      {isVisible && differenceCoins <= 100 && (
        <img
          src={getCoinImage()}
          alt={`+${differenceCoins}`}
          className="h-[45px] w-[45px]"
        />
      )}
    </div>
  );
};
