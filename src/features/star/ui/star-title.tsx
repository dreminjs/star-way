import { useState, useEffect, FC } from "react";

interface IProps {
  isSpinning: boolean;
  isWin?: boolean;
  delay?: number;
}

export const StarTitle: FC<IProps> = ({ isSpinning, isWin, delay = 100 }) => {
  const [displayedText, setDisplayedText] = useState("крути меня");
  const [letterIndex, setLetterIndex] = useState(0);
  const [currentText, setCurrentText] = useState("крути меня");
  const [messageIndex, setMessageIndex] = useState(0);

  const winMessages = [
    "Я вернулась домой...Спасибо тебе огромное...",
    "Так рада, что снова дома.💫 Дарю тебе Premium подписку",
    "напиши Эвент Старку @EventStark секретное слово (секретное слово)",
  ];

  useEffect(() => {
    if (isSpinning) {
      setCurrentText("ищу путь домой");
    } else if (isWin !== undefined && !isWin) {
      setCurrentText("мимо,не попали");
    } else if (isWin) {
      setCurrentText(winMessages[0]);
      setMessageIndex(0);
    } else {
      setCurrentText("крути меня");
    }
    setDisplayedText("");
    setLetterIndex(0);
  }, [isSpinning, isWin]);

  useEffect(() => {
    if (letterIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText + currentText[letterIndex]);
        setLetterIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (isWin && messageIndex < winMessages.length - 1) {
      const nextMessageTimeout = setTimeout(() => {
        setMessageIndex((prevIndex) => prevIndex + 1);
        setCurrentText(winMessages[messageIndex + 1]);
        setDisplayedText("");
        setLetterIndex(0);
      }, 2000); // Задержка перед следующим сообщением
      return () => clearTimeout(nextMessageTimeout);
    }
  }, [letterIndex, currentText, isWin, messageIndex]);

  return (
    <h3 className="text-[#ebd0d0] text-center text-3xl w-[350px] mx-auto italic h-[150px]">
      {displayedText}
    </h3>
  );
};
