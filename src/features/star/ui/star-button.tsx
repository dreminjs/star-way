import { FC, RefObject, useState, MouseEvent, TouchEvent } from "react";
import Star from "../../../../src/assets/star.png";

interface StarButtonProps {
  spinning: boolean;
  imgRef: RefObject<HTMLImageElement>;
  handleMouseDown: () => void;
  handleMouseUp: () => void;
}

export const StarButton: FC<StarButtonProps> = ({
  handleMouseDown,
  handleMouseUp,
  spinning,
  imgRef,
}) => {
  const [reset, setReset] = useState(false);
  const [isSpinningPossible, setIsSpinningPossible] = useState(true);
  const handleReset = () => {
    setReset(true);
    setTimeout(() => setReset(false), 150);
  };
  const onMouseUp = () => {
    handleMouseUp();
    handleReset();
    setIsSpinningPossible(false);
    if (imgRef.current) {
      imgRef.current.style.animation =
        "spin 0.8s linear infinite, decelerate 1s ease-out";
      setTimeout(() => {
        imgRef.current!.style.animation = "none";
      }, 1000);
    }
    setTimeout(() => setIsSpinningPossible(true), 150);
  };
  const onMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    if (isSpinningPossible) {
      handleMouseDown();
      if (imgRef.current) {
        imgRef.current.style.animation = "spin 0.8s linear infinite";
      }
    }
  };
  const onTouchStart = (e: TouchEvent<HTMLButtonElement>) => {
    console.log(e);
    if (isSpinningPossible) {
      handleMouseDown();
      if (imgRef.current) {
        imgRef.current.style.animation = "spin 0.8s linear infinite";
      }
    }
  };
  const onTouchMove = (e: TouchEvent<HTMLButtonElement>) => {
    const touch = e.changedTouches[0];
    const target = e.target as HTMLElement;
    const button = target.getBoundingClientRect();
    if (
      touch.clientX < button.left ||
      touch.clientX > button.right ||
      touch.clientY < button.top ||
      touch.clientY > button.bottom
    ) {
      onMouseUp();
    }
  };
  return (
    <>
      {" "}
      <div className="mx-auto flex justify-center relative">
        {" "}
        <button
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onMouseUp}
          onMouseUp={onMouseUp}
          onTouchMove={onTouchMove}
          onContextMenu={(e) => e.preventDefault()}
          className="bg-transparent absolute z-10 h-[45px] w-[45px] top-[calc(50%-20px)] left-[calc(50%-22.5px)]"
        ></button>{" "}
        <img
          ref={imgRef}
          className={`w-[292px] spin ${spinning ? "active" : ""} ${
            reset ? "reset" : ""
          }`}
          src={Star}
          alt="Star"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />{" "}
      </div>{" "}
    </>
  );
};
