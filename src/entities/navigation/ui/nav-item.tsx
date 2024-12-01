import { FC } from "react";
import { useLocation } from "react-router-dom";

interface IProps {
  position: string;
  icon: string;
}

export const NavItem: FC<IProps> = ({ position, icon }) => {
  const pathname = useLocation().pathname;

  return (
    <li
      className={`bg-[url('/src/assets/${position}-nav-item.png')] h-[50px] w-[200px] bg-no-repeat bg-contain`}
    >
      <img
        src={`/src/assets/${icon}${
          icon === "/" || pathname.includes(icon) ? "-active" : ""
        }.png`}
        alt="nav item"
        className="h-[55px] w-[55px] mx-auto"
      />
    </li>
  );
};
