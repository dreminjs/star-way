import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}
export const Container: FC<IProps> = ({ children }) => {
  return <div className="max-w-[320px] mx-auto px-4">{children}</div>;
};
