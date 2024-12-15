import PlusNine from "../../../assets/+9.png";
import PlusFour from "../../../assets/+4.png";
import PlusThree from "../../../assets/+3.png";
import PlusTwo from "../../../assets/+2.png";
import PlusOne from "../../../assets/+1.png";
import { useCheckEnter } from "../../../shared";
import PlusNineActive from "../../../assets/+9-active.png";
import PlusFourActive from "../../../assets/+4-active.png";
import PlusThreeActive from "../../../assets/+3-active.png";
import PlusTwoActive from "../../../assets/+2-active.png";
import PlusOneActive from "../../../assets/+1-active.png";

export const EveryDayAwards = () => {
  const { days } = useCheckEnter();

  return (
    <div className="w-full ">
      <div className="bg-[#1e2541] border-[#90b0c4] border-b-[1px]">
        {" "}
        {days?.counter && days.counter >= 0 && (
          <ul className="flex justify-center items-center mx-auto py-2">
            {" "}
            <li className="pl-0 pr-5">
              {" "}
              <img
                className="h-[45px] w-[45px]"
                src={days?.counter >= 1 ? PlusOneActive : PlusOne}
                alt=""
              />{" "}
            </li>{" "}
            <li className="pl-5 pr-5 border-l-2 border-opacity-50 border-[#5991bd]">
              {" "}
              <img
                className="h-[45px] w-[45px]"
                src={days?.counter >= 2 ? PlusTwoActive : PlusTwo}
                alt=""
              />{" "}
            </li>{" "}
            <li className="pl-5 pr-5 border-l-2 border-opacity-50 border-[#5991bd]">
              {" "}
              <img
                className="h-[45px] w-[45px]"
                src={days?.counter >= 3 ? PlusThreeActive : PlusThree}
                alt=""
              />{" "}
            </li>{" "}
            <li className="pl-5 pr-5 border-l-2 border-opacity-50 border-r-2 border-[#5991bd]">
              {" "}
              <img
                className="h-[45px] w-[45px]"
                src={days?.counter >= 4 ? PlusFourActive : PlusFour}
                alt=""
              />{" "}
            </li>{" "}
            <li className="pl-5">
              {" "}
              <img
                className="h-[45px] w-[45px]"
                src={days?.counter >= 5 ? PlusNineActive : PlusNine}
                alt=""
              />{" "}
            </li>{" "}
          </ul>
        )}
      </div>
      <p className="text-[#7eb17e] text-center">ежедневные бонусы</p>
    </div>
  );
};
