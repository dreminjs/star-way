import { FC, RefObject, useEffect, useRef, useState } from "react";
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
  const audio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {}, []);

  const handleReset = () => {
    setReset(true);
    setTimeout(() => setReset(false), 150);
  };

  const onMouseUp = () => {
    handleMouseUp();
    handleReset();
    setIsSpinningPossible(false);
    audio.current?.pause();
    setTimeout(() => setIsSpinningPossible(true), 150);
  };

  const onMouseDown = () => {
    const newAudio = new Audio(spinningSound);
    newAudio.loop = true;
    audio.current = newAudio;
    
    if (isSpinningPossible && audio) {
      handleMouseDown();
      audio.current?.load();
      audio.current?.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }
  };

  return (
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
  );
};
