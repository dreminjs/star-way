import { FC, RefObject,  useState } from "react";
import Star from "../../../../src/assets/star.png";
import spinningSound from "../../../../public/spinning-sound.mp3";

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

    setTimeout(() => setIsSpinningPossible(true), 150);
  };

  const onMouseDown = () => {
    if (isSpinningPossible) {
      handleMouseDown();
    }
  };

  return (
    <>
      <button
        className="block mx-auto"
        onMouseDown={onMouseDown}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
        onMouseUp={onMouseUp}
        onContextMenu={(e) => e.preventDefault()}
      >
        <img
          ref={imgRef}
          className={`w-[292px] spin ${spinning ? "active" : ""} ${
            reset ? "reset" : ""
          }`}
          src={Star}
          alt="Star"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
      </button>
    </>
  );
};
