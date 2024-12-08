import { useState, useRef } from "react";
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

  const { postResult, postResultData } = usePostResult();

  const handleMouseDown = () => {
    setSpinning(true);
    setElapsedTime(0);
    const start = Date.now();
    setStartTime(start);
    intervalRef.current = window.setInterval(() => {
      setElapsedTime(Date.now() - start);
    }, 1);
  };

  const handleMouseUp = () => {
    setSpinning(false);
  
    if (startTime !== null && intervalRef.current !== null && imgRef.current) {
      handleHideInfoText();
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      const endTime = Date.now();
      const totalElapsedTime = endTime - startTime;
      setElapsedTime(totalElapsedTime);
      if (totalElapsedTime > 1000) postResult(totalElapsedTime);
    }
  };

  return (
    <section className="flex h-svh flex-col items-center justify-between relative">
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
