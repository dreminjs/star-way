import { useState, useRef, useEffect } from "react";
import { StarButton, StarHeader, StarTitle } from "../../../features/star";
import { Navigation } from "../../../features/navigation";
import { usePostResult } from "../../../shared";
import { Header } from "../../../widgets/header";

export const StarPage = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [spinning, setSpinning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const [isInfoTextVisible, setIsInfoTextVisible] = useState(false);
 

  const handleShowInfoText = () => setIsInfoTextVisible(true);

  const handleHideInfoText = () => setIsInfoTextVisible(false);

  useEffect(() => {
    console.log(isInfoTextVisible);
  }, [isInfoTextVisible]);

  const { postResult, postResultData } = usePostResult();

  const handleMouseDown = () => {
    setSpinning(true);
    setElapsedTime(0);
    setStartTime(0);
    const start = Date.now();
    setStartTime(start);
    setElapsedTime(0);
    if (imgRef.current) {
      imgRef.current.style.animationPlayState = "running";
    }
    intervalRef.current = setInterval(() => {
      setElapsedTime(Date.now() - start);
    }, 1);
  };

  const handleMouseUp = () => {
    handleHideInfoText();
    setSpinning(false);
    if (imgRef.current) {
      imgRef.current.style.animationPlayState = "paused";
      imgRef.current.style.transform = "rotate(0deg)";
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (startTime !== null) {
      const endTime = Date.now();
      const totalElapsedTime = endTime - startTime;
      setElapsedTime(totalElapsedTime);
      if (totalElapsedTime > 1000) postResult(totalElapsedTime);
    }
  };

  return (
    <section
      className="flex h-svh flex-col items-center justify-between relative"
    >
      <div className="w-full">
        <Header onShowInfoText={handleShowInfoText} />
        <StarHeader countTaps={0} seconds={elapsedTime} />
      </div>
      <div>
        <StarTitle
          isInfoTextVisible={isInfoTextVisible}
          isWin={postResultData?.win}
          isSpinning={spinning}
        />
        <StarButton
          spinning={spinning}
          imgRef={imgRef}
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
        />
      </div>
      <Navigation />
    </section>
  );
};
