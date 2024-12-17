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
    <li className="w-full flex justify-center items-center h-[50px] bg-[#222a44] p-[25px] rounded-lg border-[#90b0c4] border-y-[3px] mb-2 ">
     <div className="flex gap-3 items-center">
      <Link className="flex basis-[90%] items-center gap-2" to={link}>
        <img src={Tg} alt="" className="h-[50px]" />
        <p className="text-white text-wrap break-words">{content}</p>
      </Link>
      <button className="basis-[25%]" onClick={() => onCheckSub(id)}>
        <img className="h-[45px]" src={Prise} alt="" />
      </button>
      </div>
    </li>
  );
};
