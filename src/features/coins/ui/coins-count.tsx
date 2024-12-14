import { FC, useState, useEffect } from "react";

interface IProps {
  coins: number;
}

export const CoinsCount: FC<IProps> = ({ coins }) => {
  const [previousCoins, setPreviousCoins] = useState(coins);
  const [displayedCoins, setDisplayedCoins] = useState(coins);

  useEffect(() => {
    if (coins !== previousCoins) {
      const difference = coins - previousCoins;

      const increment = difference / 20; // Количество шагов для анимации
      let currentCoins = previousCoins;
      const interval = setInterval(() => {
        currentCoins += increment;
        if (
          (difference > 0 && currentCoins >= coins) ||
          (difference < 0 && currentCoins <= coins)
        ) {
          clearInterval(interval);
          setDisplayedCoins(coins);
        } else {
          setDisplayedCoins(Math.round(currentCoins));
        }
      }, 50); // Интервал в миллисекундах

      // Обновить предыдущую сумму после задержки
      const updateTimer = setTimeout(() => {
        setPreviousCoins(coins);
      }, 2000);

      return () => {
        clearInterval(interval);

        clearTimeout(updateTimer);
      };
    }
  }, [coins, previousCoins]);

  const formattedCoins = displayedCoins.toString().padStart(5, "0");

  return (
    <div className="relative mx-auto w-[200px] text-center">
      <p className="text-[35px] gradient-numbers font-bold gradient-coins">
        {formattedCoins}
      </p>
    </div>
  );
};
