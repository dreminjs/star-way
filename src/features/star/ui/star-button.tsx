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

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(spinningSound);
    return () => {
      // Очистка: остановить звук, если компонент размонтируется
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playSound = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.currentTime = 0; // Сброс звука
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Audio play error:", err));
    }
  };

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
    setTimeout(() => setIsSpinningPossible(true), 5000);
  };

  const onMouseDown = () => {
    playSound();
    if (isSpinningPossible) {
      handleMouseDown();
    }
  };

  return (
    <button
      className="block mx-auto"
      onMouseDown={onMouseDown}
      onTouchStart={handleMouseDown}
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
