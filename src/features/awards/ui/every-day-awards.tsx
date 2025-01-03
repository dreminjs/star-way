import PlusFive from "../../../assets/+5.png";
import PlusFour from "../../../assets/+4.png";
import PlusThree from "../../../assets/+3.png";
import PlusTwo from "../../../assets/+2.png";
import PlusOne from "../../../assets/+1.png";
import { useCheckEnter } from "../../../shared";
import PlusFiveActive from "../../../assets/+5-active.png";
import PlusFourActive from "../../../assets/+4-active.png";
import PlusThreeActive from "../../../assets/+3-active.png";
import PlusTwoActive from "../../../assets/+2-active.png";
import PlusOneActive from "../../../assets/+1-active.png";

export const EveryDayAwards = () => {
  const { days } = useCheckEnter();

  return (
    <div className="w-full ">
      <div className="task-item-gradient border-[#90b0c4] border-y-[1px]">
        {days?.counter !== undefined && (
          <ul className="flex justify-center items-center mx-auto py-2">
            <li className="pl-0 w-[69px]  pr-5">
              <img
                className=""
                src={days.counter >= 0 ? PlusOneActive : PlusOne}
                alt=""
              />
            </li>
            <li className="pl-5 w-[90px] pr-5 border-l-2 border-opacity-50 border-[#5991bd]">
              <img
                className=""
                src={days.counter >= 1 ? PlusTwoActive : PlusTwo}
                alt=""
              />
            </li>
            <li className="pl-5 w-[90px]  pr-5 border-l-2 border-opacity-50 border-[#5991bd]">
              <img
                className=""
                src={days.counter >= 2 ? PlusThreeActive : PlusThree}
                alt=""
              />
            </li>
            <li className="pl-5 w-[90px]   pr-5 border-l-2 border-opacity-50 border-r-2 border-[#5991bd]">
              <img
                className=""
                src={days.counter >= 3 ? PlusFourActive : PlusFour}
                alt=""
              />
            </li>
            <li className="pl-5 w-[69px] ">
              <img
                className=""
                src={days.counter >= 4 ? PlusFiveActive : PlusFive}
                alt=""
              />
            </li>
          </ul>
        )}
      </div>

      <p className="text-[#7eb17e] text-center">ежедневные бонусы</p>
    </div>
  );
};
