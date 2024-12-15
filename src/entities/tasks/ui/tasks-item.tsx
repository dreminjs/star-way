import { FC } from "react";
import Prise from "../../../assets/+9-task-award.png";
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
    <li className="flex justify-between items-center h-[50px] bg-[#222a44] p-[30px] rounded-lg border-[#90b0c4] border-y-[3px] mb-2 ">
      <Link to={link}>
        <img src={Tg} alt="" className="h-[50px]" />
      </Link>
      <p className="text-white text-wrap break-words">{content}</p>
      <button onClick={() => onCheckSub(id)}>
        <img className="h-[45px] " src={Prise} alt="" />
      </button>
    </li>
  );
};
