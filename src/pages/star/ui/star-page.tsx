import { useState, useRef, useEffect } from "react";
import { StarButton, StarHeader, StarTitle } from "../../../features/star";
import { Navigation } from "../../../features/navigation";
import { usePostResult } from "../../../shared";
import { Header } from "../../../widgets/header";
import { useGetUserData } from "../../../shared/api/queries/user.queries";
import { CoinsCount } from "../../../features/coins";
import { AddedCoins } from "../../../features/coins/ui/added-coins";

export const StarPage = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [spinning, setSpinning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const [taps, setTaps] = useState<number>(0);
  const [coins, setCoins] = useState<number>(0);
  const [isSpinningPossible, setIsSpinningPossible] = useState(true);
  const [isWarningTitleVisible, setIsWarningTitleVisible] =
    useState<boolean>(false);
  const [wasSpinning, setWasSpinning] = useState(false);
  const [hasTaps, setHasTaps] = useState(false);
  const { postResult, postResultData, postResultLoading } = usePostResult();

  const { userDataLoading, userData } = useGetUserData();

  

  

  const handleClick = () => {
  
    if (!isSpinningPossible && !spinning && hasTaps) {
      setIsWarningTitleVisible(true);
    }
  };

  const handleMouseDown = () => {
    setWasSpinning(true);
    if (isSpinningPossible && hasTaps) {
      setSpinning(true);
      setElapsedTime(0);
      const start = Date.now();
      setStartTime(start);
      intervalRef.current = window.setInterval(() => {
        setElapsedTime(Date.now() - start);
      }, 1);
    }
  };

  const handleMouseUp = () => {
    setSpinning(false);
    if (
      startTime !== null &&
      intervalRef.current !== null &&
      imgRef.current &&
      hasTaps
    ) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      const endTime = Date.now();
      const totalElapsedTime = endTime - startTime;
      setElapsedTime(totalElapsedTime);
      if (totalElapsedTime > 1000) postResult(totalElapsedTime);
      setIsSpinningPossible(false);
    }
  };

  useEffect(() => {
    if (userData) {
      setTaps(userData.taps);
      setCoins(userData.coins);

      if (userData.taps > 0) setHasTaps(true);
      else setHasTaps(false);
    }
  }, [userDataLoading, userData]);

  useEffect(() => {
    if (postResultData) {
      setTaps((prev) => prev - 1);
      setCoins(postResultData.pollen_count);
      setIsSpinningPossible(false);
      const timer = setTimeout(() => {
        setIsSpinningPossible(true);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [postResultData, postResultLoading]);

  useEffect(() => {
    if (isWarningTitleVisible) {
      const timer = setTimeout(() => {
        setIsWarningTitleVisible(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isWarningTitleVisible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinningPossible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [spinning]);

  return (
    <section
      className="flex h-screen flex-col items-center justify-between relative"
    >
      <div className="w-full">
        <Header />
        <StarHeader countTaps={taps} seconds={elapsedTime} />
      </div>
      <div>
        <StarTitle
          hasTaps={hasTaps}       isWarningTitleVisible={isWarningTitleVisible}        
          isLoading={postResultLoading}
          isWin={postResultData?.win}
          isSpinning={spinning}
          isSpinningPossible={isSpinningPossible}
        />
        <AddedCoins wasSpinning={wasSpinning} coins={coins} />
        <StarButton
          handleClick={handleClick}
          isSpinningPossible={isSpinningPossible}
          spinning={spinning}
          imgRef={imgRef}
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
          hasTaps={hasTaps}
        />
        <CoinsCount coins={coins} />
      </div>
      <Navigation />
 
    </section>
  );
};
