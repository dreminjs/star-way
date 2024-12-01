import { useState, useEffect } from "react";

export const StarTitle = () => {
  const text = "крути меня";



  const delay = 150;
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    if (letterIndex < text.length) {
     const timeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[letterIndex]);
        setLetterIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [letterIndex]);

  return <h3 className="text-[#ebd0d0] text-center text-3xl w-[100px] mx-auto">{displayedText}</h3>;
};
