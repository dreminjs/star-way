import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import { StarButton, StarHeader, StarTitle } from "../../../features/star";
import { Navigation } from "../../../features/navigation";
import { usePostResult } from "../../../shared";
import { Header } from "../../../widgets/header";
import { useGetUserData } from "../../../shared/api/queries/user.queries";
import { CoinsCount } from "../../../features/coins";
import Hamster from "../../../assets/hamster.png";

export const StarPage = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [spinning, setSpinning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const [taps, setTaps] = useState<number>(0);
  const [coins, setCoins] = useState<number>(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hamsterIsVisible, setHamsterIsVisible] = useState(false);
  const [isSpinningPossible, setIsSpinningPossible] = useState(false);


  const { postResult, postResultData, postResultLoading } = usePostResult();

  const { userDataLoading, userData } = useGetUserData();

  const handleClickPc = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    if (target.id !== "star-button") {
      setHamsterIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleClickMobile = (e: TouchEvent<HTMLButtonElement>) => {
    const touch = e.changedTouches[0];
    const target = touch.target as HTMLElement;
    if (target.id !== "star-button") {
      setHamsterIsVisible(true);
      setPosition({ x: touch.clientX, y: touch.clientY });
    }
  };

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
    }
  }, [userDataLoading, userData]);

  useEffect(() => {
    if (postResultData) {
      setTaps((prev) => prev - 1);
      setCoins(postResultData.pollen_count);
    }
  }, [postResultData, postResultLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHamsterIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [hamsterIsVisible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinningPossible(true);
    }, 5000);
    return () => clearTimeout(timer);
  })

  return (
    <section
      className="flex h-svh flex-col items-center justify-between relative"
      onClick={handleClickPc}
      onTouchStart={handleClickMobile}
    >
      <div className="w-full">
        <Header />
        <StarHeader countTaps={taps} seconds={elapsedTime} />
      </div>
      <div>
        <StarTitle
          isHamsterVisible={hamsterIsVisible}
          isLoading={postResultLoading}
          isWin={postResultData?.win}
          isSpinning={spinning}
          isSpinningPossible={isSpinningPossible}
        />
        <StarButton
          isSpinningPossible={isSpinningPossible}
          spinning={spinning}
          imgRef={imgRef}
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
        />
        <CoinsCount coins={coins} />
      </div>
      <Navigation />
      {hamsterIsVisible && (
        <img
          style={{ left: position.x, top: position.y }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[50px]"
          src={Hamster}
          alt="hamster"
        />
      )}
    </section>
  );
};
