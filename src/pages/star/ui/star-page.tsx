import { useState, useRef } from "react";
import { StarButton, StarTitle } from "../../../features/star";

export const StarPage = () => {
  const [spinning, setSpinning] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseDown = () => {
    setSpinning(true);
    if (imgRef.current) {
      imgRef.current.style.animationPlayState = "running";
    }
  };

  const handleMouseUp = () => {
    setSpinning(false);
    if (imgRef.current) {
        imgRef.current.style.animationPlayState = 'paused';
        imgRef.current.style.transform = 'rotate(0deg)'; // Сброс анимации
    }
  };

  return (
    <div className="flex flex-col items-center">
      <StarTitle isSpinning={spinning} />
      <StarButton
        spinning={spinning}
        imgRef={imgRef}
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
      />
    </div>
  );
};
