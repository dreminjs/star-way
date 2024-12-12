import { FC } from "react";
import Prise from "../../../assets/+9.png";
import Tg from "../../../assets/tg.png";

interface IProps {
  content: string;
}

export const TasksItem: FC<IProps> = ({ content }) => {
  return (
    <li className="flex justify-between items-center h-[50px] bg-[#25517e] p-[10px]">
      <img src={Tg} alt="" className="h-[50px]" />
      <p className="text-white">{content}</p>
      <img className="h-[50px]" src={Prise} alt="" />
    </li>
  );
};
