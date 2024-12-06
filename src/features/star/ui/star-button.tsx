import { FC, RefObject } from "react";
import Star from "../../../../src/assets/star.png"; // Убедитесь, что путь к изображению правильный

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
  return (
    <button
      className=""
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onMouseUp={handleMouseUp}
   
      onContextMenu={(e) => e.preventDefault()}
      onTouchMove={(e) => e.preventDefault()}
    >
      <img
        ref={imgRef}
        className={`w-[262px] spin ${spinning ? "active" : ""}`}
        src={Star}
        alt="Star"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </button>
  );
};