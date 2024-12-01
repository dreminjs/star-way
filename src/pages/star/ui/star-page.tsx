import { useState, useRef, useEffect } from "react";
import { StarButton, StarHeader, StarTitle } from "../../../features/star";
import { Navigation } from "../../../features/navigation";

export const StarPage = () => {
  const [spinning, setSpinning] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [seconds, setSeconds] = useState(0);

  const handleMouseDown = () => {
    setSpinning(true);
    if (imgRef.current) {
      imgRef.current.style.animationPlayState = "running";
    }
  };

  const handleMouseUp = () => {
    setSpinning(false);
    if (imgRef.current) {
      imgRef.current.style.animationPlayState = "paused";
      imgRef.current.style.transform = "rotate(0deg)"; // Сброс анимации
    }
  };


  useEffect(() => {
    let interval: number | null = null;
    if (spinning) {
      interval = window.setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!spinning && seconds !== 0) {
      if (interval) {
        clearInterval(interval);
      }
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [spinning, seconds]);

  return (
    <section className="flex flex-col items-center">
      <StarHeader countTaps={0} seconds={seconds} />
      <StarTitle isSpinning={spinning} />
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
