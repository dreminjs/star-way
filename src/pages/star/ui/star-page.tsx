import { useState, useRef } from "react";
import { StarButton, StarHeader, StarTitle } from "../../../features/star";
import { Navigation } from "../../../features/navigation";
import { usePostResult } from "../../../shared";

export const StarPage = () => {
  const [spinning, setSpinning] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const { postResult, postResultData } =
    usePostResult();

  const handleMouseDown = () => {
    setSpinning(true);
    setElapsedTime(0);
    setStartTime(0)
    const start = Date.now();
    setStartTime(start);
    setElapsedTime(0);
    if (imgRef.current) {
      imgRef.current.style.animationPlayState = "running";
    }
    intervalRef.current = setInterval(() => {
      setElapsedTime(Date.now() - start);
    }, 1); // Обновляем каждую миллисекунду
  };

  const handleMouseUp = () => {
    setSpinning(false);
    if (imgRef.current) {
      imgRef.current.style.animationPlayState = "paused";
      imgRef.current.style.transform = "rotate(0deg)"; // Сброс анимации
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (startTime !== null) {
      const endTime = Date.now();
      const totalElapsedTime = endTime - startTime;
      setElapsedTime(totalElapsedTime);
      postResult(totalElapsedTime);
    }
  };

  return (
    <section className="flex flex-col items-center">
      <StarHeader countTaps={0} seconds={elapsedTime} />
      <StarTitle isWin={postResultData?.win} isSpinning={spinning}  />
      <StarButton
        spinning={spinning}
        imgRef={imgRef}
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
      />
      <Navigation />
    </section>
  );
};
