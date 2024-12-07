import { useState, useEffect, FC } from "react";

interface IProps {
  isSpinning: boolean;
  isWin?: boolean;
  delay?: number;
  isInfoTextVisible: boolean;
}

export const StarTitle: FC<IProps> = ({
  isSpinning,
  isWin,
  delay = 100,
  isInfoTextVisible,
}) => {
  const [displayedText, setDisplayedText] = useState("крути меня");
  const [letterIndex, setLetterIndex] = useState(0);
  const [currentText, setCurrentText] = useState("крути меня");
  const [messageIndex, setMessageIndex] = useState(0);
  const [infoTextIndex, setInfoTextIndex] = useState(0);

  const winMessages = [
    "Я вернулась домой...Спасибо тебе огромное...",
    "Так рада, что снова дома.💫 Дарю тебе Premium подписку",
    "напиши Эвент Старку @EventStark секретное слово (секретное слово)",
  ];

  const infoMessage = [
    "За 1 секунду звезда пролетает 1 световой год.",
    "Координат - точка времени на которой находится дом звёздочки.",
    "Пыль - индикатор приближенности к дому.",
    "...",
  ];

  useEffect(() => {
    if (!isInfoTextVisible) {
      setInfoTextIndex(0);
    }
  }, [isInfoTextVisible]);

  useEffect(() => {
    if (isSpinning) {
      setCurrentText("держи меня , летим домой");
    } else if (isInfoTextVisible) {
      setCurrentText(infoMessage[0]);
      setInfoTextIndex(0);
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
  }, [isSpinning, isWin, isInfoTextVisible]);

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
    } else if (isInfoTextVisible && infoTextIndex < infoMessage.length - 1) {
      const nextInfoMessageTimeout = setTimeout(() => {
        setInfoTextIndex((prevIndex) => prevIndex + 1);
        setCurrentText(infoMessage[infoTextIndex + 1]);
        setDisplayedText("");
        setLetterIndex(0);
      }, 2000); // Задержка перед следующим сообщением
      return () => clearTimeout(nextInfoMessageTimeout);
    }
  }, [
    letterIndex,
    currentText,
    isWin,
    messageIndex,
    isInfoTextVisible,
    infoTextIndex,
  ]);

  return (
    <h3
      onCopy={(e) => e.preventDefault()}
      className="text-[#ebd0d0] text-center text-3xl max-w-[450px] h-[90px] mb-5 mx-auto italic "
    >
      {displayedText}
    </h3>
  );
};
