import PlusNine from "../../../assets/+9.png";
import PlusFour from "../../../assets/+4.png";
import PlusThree from "../../../assets/+3.png";
import PlusTwo from "../../../assets/+2.png";
import PlusOne from "../../../assets/+1.png";

export const EveryDayAwards = () => {
  return (
    <div className="w-full bg-[#1e2541]">
      <ul className="flex justify-center items-center mx-auto">
        <li className="pl-0 pr-5">
          <img className="h-[45px] w-[45px] " src={PlusOne} alt="" />
        </li>
        <li className="pl-5 pr-5 border-l-2 border-opacity-50 border-[#5991bd]">
          <img className="h-[45px] w-[45px] " src={PlusTwo} alt="" />
        </li>
        <li className="pl-5 pr-5 border-l-2 border-opacity-50 border-[#5991bd]">
          <img className="h-[45px] w-[45px] " src={PlusThree} alt="" />
        </li>
        <li className="pl-5 pr-5 border-l-2 border-opacity-50 border-r-2 border-[#5991bd]">
          <img className="h-[45px] w-[45px] " src={PlusFour} alt="" />
        </li>
        <li className="pl-5">
          <img className="h-[45px] w-[45px] " src={PlusNine} alt="" />
        </li>
      </ul>
    </div>
  );
  
};

    
