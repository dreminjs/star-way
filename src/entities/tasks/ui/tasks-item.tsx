import { FC } from "react";
import Prise from "../../../assets/+5-task-award.png";
import Tg from "../../../assets/tg.png";
import { Link } from "react-router-dom";

interface IProps {
  content: string;
  link: string;
  onCheckSub: (id: number) => void;
  id: number;
}

export const TasksItem: FC<IProps> = ({ content, link, onCheckSub, id }) => {
  return (
    <li className="w-full flex justify-between items-center h-[50px] task-item-gradient p-[25px] rounded-lg border-[#90b0c4] border-y-[3px] mb-2 ">
      <Link className="flex basis-[90%] items-center gap-2" to={link}>
        <img src={Tg} alt="" className="h-[50px]" />
        <p className="text-white text-wrap break-words">{content}</p>
      </Link>
      <button className="basis-[52px] h-[45px]" onClick={() => onCheckSub(id)}>
        <img className="" src={Prise} alt="" />
      </button>
    </li>
  );
};
