
import { RefObject, FC } from 'react';

import Star from "../../../../src/assets/star.png"

interface StarButtonProps {
    spinning: boolean;
    imgRef: RefObject<HTMLImageElement>;
    handleMouseDown: () => void;
    handleMouseUp: () => void;
}

export const StarButton: FC<StarButtonProps> = ({handleMouseDown, handleMouseUp, spinning, imgRef}) => {


    return (
        <button
        className="mx-auto block"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Останавливаем вращение, если курсор уходит с кнопки
    >
        <img
            ref={imgRef}
            className={`w-[450px] spin ${spinning ? 'active' : ''}`}
            src={Star}
            alt="Star"
        />
    </button>
    );
};