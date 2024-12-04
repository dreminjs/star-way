import { FC, ReactNode } from "react";

interface IProps {
  position: string;
  children: ReactNode
}

export const NavItem: FC<IProps> = ({ position, children }) => {

  return (
    <li
      className={`bg-[url('/src/assets/${position}-nav-item.png')] h-[50px] w-[200px] bg-no-repeat bg-contain`}
    >
      {children}
    </li>
  );
};
