import { FC, RefObject, useState, TouchEvent, MouseEvent } from "react";
import Star from "../../../../src/assets/star.png";
interface StarButtonProps {
  spinning: boolean;
  imgRef: RefObject<HTMLImageElement>;
  handleMouseDown: () => void;
  handleMouseUp: () => void;
  isSpinningPossible: boolean;
  handleClick: () => void;
  hasTaps: boolean
}
export const StarButton: FC<StarButtonProps> = ({
  handleMouseDown,
  handleMouseUp,
  spinning,
  imgRef,
  isSpinningPossible,
  handleClick,
  hasTaps
}) => {
  const [reset, setReset] = useState(false);
  const [buttonLocked, setButtonLocked] = useState(false);

  // Функция для сброса состояния
  const handleReset = () => {
    setReset(true);
    setTimeout(() => setReset(false), 5000); // Сброс через 1 секунду (длительность анимации)
  };

  const lockButton = () => {
    setButtonLocked(true);
    setTimeout(() => setButtonLocked(false), 5000); // Заблокировать на 5 секунд
  };

  const onMouseUp = () => {
    if (!buttonLocked) {
      handleMouseUp();
      handleReset(); // Сброс анимации
      lockButton(); // Заблокировать кнопку
    }
  };

  const onMouseDown = () => {
    if (isSpinningPossible && !buttonLocked && hasTaps) {
      handleMouseDown();
      if (imgRef.current) {
        imgRef.current.classList.add("active");
      }
    }
  };

  const onTouchStart = () => {
    if (isSpinningPossible && !buttonLocked && imgRef.current && hasTaps) {
      handleMouseDown();
      imgRef.current.classList.add("active");
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
      onMouseUp(); // Остановка вращения
    }
  };

  const onMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    const button = target.getBoundingClientRect();

    if (
      e.clientX < button.left ||
      e.clientX > button.right ||
      e.clientY < button.top ||
      e.clientY > button.bottom
    ) {
      onMouseUp(); // Остановка вращения
    }
  };


  return (
    <div className="mx-auto flex justify-center relative" id="star-button">
      <button
        onClick={handleClick}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp}
        onMouseUp={onMouseUp}
        onTouchMove={onTouchMove}
        onContextMenu={(e) => e.preventDefault()}
        className="bg-transparent absolute z-10 h-[20vw] w-[20vw] top-[calc(50%-24px)] left-[calc(50%-25.5px)]"
        id="star-button"
      ></button>
      <img
        id="star-button"
        ref={imgRef}
        className={`w-[80vw] min-w-[420px]:w-[50vw] spin ${
          spinning ? "active" : ""
        } ${reset ? "reset" : ""}`}
        src={Star}
        alt="Star"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
};
