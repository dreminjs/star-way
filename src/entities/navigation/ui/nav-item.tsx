import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

export const NavItem: FC<IProps> = ({ children, className }) => {
  
  return (
    <li
      className={` h-[50px] w-[135px] bg-no-repeat bg-contain ${className} cursor-pointer`}
    >
      {children}
    </li>
  );
};
