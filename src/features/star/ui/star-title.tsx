import { useState, useEffect, FC } from "react";

interface IProps {
  isSpinning: boolean;
}

export const StarTitle: FC<IProps> = ({ isSpinning }) => {
  const text = "крути меня";
  const spinningText = "ищу путь домой...";

  const delay = 150;
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [currentText, setCurrentText] = useState(text);

  useEffect(() => {
    setCurrentText(isSpinning ? spinningText : text);
    setDisplayedText("");
    setLetterIndex(0);
  }, [isSpinning]);

  useEffect(() => {
    if (letterIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText + currentText[letterIndex]);
        setLetterIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, currentText]);

  return (
    <h3 className="text-[#ebd0d0] text-center text-3xl w-[150px] mx-auto italic h-[100px]">
      {displayedText}
    </h3>
  );
};
