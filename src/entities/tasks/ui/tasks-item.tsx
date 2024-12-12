import { FC } from "react";

interface IProps {
  content: string;
}

export const TasksItem: FC<IProps> = ({ content }) => {
  return <li>{content}</li>;
};
