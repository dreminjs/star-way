import { useState, useEffect, FC } from "react";

interface IProps {
  isSpinning: boolean;
  isWin?: boolean;
  delay?: number;
  isLoading: boolean;
  isHamsterVisible: boolean;
  isSpinningPossible: boolean;
  isWarningTitleVisible: boolean;
  hasTaps: boolean;
}

export const StarTitle: FC<IProps> = ({
  isSpinning,
  isWin,
  delay = 100,
  isLoading,
  isHamsterVisible,
  isSpinningPossible,
  isWarningTitleVisible,
  hasTaps,
}) => {
  const [displayedText, setDisplayedText] = useState("крути меня");
  const [letterIndex, setLetterIndex] = useState(0);
  const [currentText, setCurrentText] = useState("крути меня");
  const [messageIndex, setMessageIndex] = useState(0);

  const winMessages = [
    "Я вернулась домой...Спасибо тебе огромное...",
    "Так рада, что снова дома.💫 Дарю тебе Premium подписку",
    "Напиши мне @iStarsBaby",
  ];

  useEffect(() => {
    if (isSpinningPossible && hasTaps && !isSpinning) {
      setCurrentText("крути меня");
    } else if (isSpinning) {
      setCurrentText("держи меня , летим домой");
    } else if (isWarningTitleVisible) {
      setCurrentText("я устала, подожди немного");
    } else if (isWin !== undefined && !isWin) {
      setCurrentText("мимо,не попали");
    } else if (isHamsterVisible) {
      setCurrentText("404");
    } else if (isWin) {
      setCurrentText(winMessages[0]);
      setMessageIndex(0);
    } else if (isLoading) {
      setCurrentText("ищу путь домой");
    } else if (!hasTaps) {
      console.log({ hasTaps });
      setCurrentText("Тапы закончились");
    }
    setDisplayedText("");
    setLetterIndex(0);
  }, [isSpinning, isWin, isWarningTitleVisible, isHamsterVisible, hasTaps]);

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
    <h3
      onCopy={(e) => e.preventDefault()}
      className="text-[#ebd0d0] text-center text-3xl max-w-[450px] h-[65px] mb-5 mx-auto italic "
    >
      {displayedText}
    </h3>
  );
};
