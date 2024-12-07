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

  useEffect(() => {
    const audio = new Audio(spinningSound);
    audioRef.current = audio;

    const handleAudioEnd = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current
          .play()
          .catch((err) => console.error("Error playing audio:", err));
      }
    };
    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("ended", handleAudioEnd);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Сброс к началу
      audioRef.current
        .play()
        .then(() => {
          console.log("Audio is playing");
        })
        .catch((err) => {
          console.error("Audio play error:", err);
        });
    }
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
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
    stopSound();
    setIsSpinningPossible(false);
    setTimeout(() => setIsSpinningPossible(true), 100);
  };

  const onMouseDown = () => {
    if (isSpinningPossible) {
      handleMouseDown();
      playSound();
    }
  };

  return (
    <button
      className="block mx-auto"
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown} // Убедитесь, что Touch-событие тоже вызывает playSound
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
