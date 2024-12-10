import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps {
  children: ReactNode;
  className?: string;
  to: string
}

export const NavItem: FC<IProps> = ({ children, className, to }) => {
  return (
    <li
      className={` h-[60px] w-[155px] bg-no-repeat bg-contain ${className} cursor-pointer`}
    >
      <Link to={to}>{children}</Link>
    </li>
  );
};
