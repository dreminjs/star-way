import { FC, RefObject, useState, TouchEvent, MouseEvent } from "react";
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

  // Функция для сброса состояния
  const handleReset = () => {
    setReset(true);
    setTimeout(() => setReset(false), 1000); // Сброс через 1 секунду (длительность анимации)
  };

  const onMouseUp = () => {
    handleMouseUp();
    handleReset(); // Сброс анимации
    setIsSpinningPossible(false);
    setTimeout(() => setIsSpinningPossible(true), 150); // Блокировка повторного запуска на 150 мс
  };

  const onMouseDown = () => {
    if (isSpinningPossible) {
      handleMouseDown();
      if (imgRef.current) {
        imgRef.current.classList.add("active");
      }
    }
  };

  const onTouchStart = () => {
    if (isSpinningPossible && imgRef.current) {
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
      setTimeout(() => setIsSpinningPossible(true), 150); // Разблокировка
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
      setTimeout(() => setIsSpinningPossible(true), 150); // Разблокировка
    }
  };



  return (
    <div className="mx-auto flex justify-center relative">
      <button
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp}
        onMouseUp={onMouseUp}
        onTouchMove={onTouchMove}
        onContextMenu={(e) => e.preventDefault()}
        className="bg-transparent absolute z-10 h-[10vw] w-[10vw] top-[calc(50%-20px)] left-[calc(50%-22.5px)]"
      ></button>
      <img
        ref={imgRef}
        className={`w-[70vw] min-w-[420px]:w-[50vw] spin ${spinning ? "active" : ""} ${
          reset ? "reset" : ""
        }`}
        src={Star}
        alt="Star"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
};