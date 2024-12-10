import { FC, useState, useEffect } from "react";

interface IProps {
  coins: number;
}

export const CoinsCount: FC<IProps> = ({ coins }) => {
  const [previousCoins, setPreviousCoins] = useState(coins);
  const [addedCoins, setAddedCoins] = useState(0);
  const [showAddedCoins, setShowAddedCoins] = useState(false);

  useEffect(() => {
    if (coins !== previousCoins) {
      const difference = coins - previousCoins;
      setAddedCoins(difference);
      setShowAddedCoins(true);

      const timer = setTimeout(() => {
        setShowAddedCoins(false);
      }, 3000); // Показывать добавленные монеты 2 секунды

      // Обновить предыдущую сумму после задержки
      const updateTimer = setTimeout(() => {
        setPreviousCoins(coins);
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearTimeout(updateTimer);
      };
    }
  }, [coins, previousCoins]);

  const formattedCoins = coins.toString().padStart(5, "0");
  const formattedAddedCoins = addedCoins > 0 ? `+${addedCoins}` : "";

  return (
    <div className="relative text-center">
      {" "}
      <p className="text-[35px] gradient-numbers font-bold gradient-coins">
        {" "}
        {formattedCoins}{" "}
      </p>{" "}
      {showAddedCoins && (
        <p className="absolute top-3 right-[80px] text-[20px] text-yellow-500 font-bold animate-fade-out">
          {" "}
          {formattedAddedCoins}{" "}
        </p>
      )}{" "}
    </div>
  );
};
