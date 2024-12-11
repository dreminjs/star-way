import { FC, useState, useEffect } from "react";

interface IProps {
  coins: number;
}

export const CoinsCount: FC<IProps> = ({ coins }) => {
  const [previousCoins, setPreviousCoins] = useState(coins);
  const [displayedCoins, setDisplayedCoins] = useState(coins);
  const [addedCoins, setAddedCoins] = useState(0);
  const [showAddedCoins, setShowAddedCoins] = useState(false);

  useEffect(() => {
    
    if (coins !== previousCoins) {
      const difference = coins - previousCoins;
      setAddedCoins(difference);
      setShowAddedCoins(true);

      const increment = difference / 20; // Количество шагов для анимации
      let currentCoins = previousCoins;
      const interval = setInterval(() => {
        currentCoins += increment;
        if ((difference > 0 && currentCoins >= coins) || (difference < 0 && currentCoins <= coins)) {
          clearInterval(interval);
          setDisplayedCoins(coins);
        } else {
          setDisplayedCoins(Math.round(currentCoins));
        }
      }, 50); // Интервал в миллисекундах

      const timer = setTimeout(() => {
        setShowAddedCoins(false);
      }, 2000); // Показывать добавленные монеты 2 секунды

      // Обновить предыдущую сумму после задержки
      const updateTimer = setTimeout(() => {
        setPreviousCoins(coins);
      }, 2000);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
        clearTimeout(updateTimer);
      };
    }
  }, [coins, previousCoins]);

  const formattedCoins = displayedCoins.toString().padStart(5, "0");
  const formattedAddedCoins = addedCoins > 0 ? `+${addedCoins}` : "";

  return (
    <div className="relative mx-auto w-[200px] text-center">
      <p className="text-[35px] gradient-numbers font-bold gradient-coins">
        {formattedCoins}
      </p>
      {showAddedCoins && addedCoins < 120 && (
        <p className="absolute top-0 lefy-[0px] text-[20px] text-yellow-500 font-bold animate-fade-out">
          {formattedAddedCoins}
        </p>
      )}
    </div>
  );
};
