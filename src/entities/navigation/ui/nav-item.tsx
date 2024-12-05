import { FC, ReactNode } from "react";

interface IProps {
  position: string;
  children: ReactNode;
  className?: string;
}

export const NavItem: FC<IProps> = ({ position, children, className }) => {
  console.log(position);

  return (
    <li
      className={`bg-[url('/public/center-nav-item.png')] h-[50px] w-[135px] bg-no-repeat bg-contain ${className} cursor-pointer`}
    >
      {children}
    </li>
  );
};