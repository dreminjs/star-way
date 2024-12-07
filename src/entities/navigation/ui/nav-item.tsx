import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

export const NavItem: FC<IProps> = ({ children, className }) => {
  return (
    <li
      className={` h-[60px] w-[155px] bg-no-repeat bg-contain ${className} cursor-pointer`}
    >
      {children}
    </li>
  );
};
