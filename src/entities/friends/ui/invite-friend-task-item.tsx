import Prise from "../../../assets/+9-task-award.png";
import Tg from "../../../assets/tg.png";
export const InviteFriendTaskItem = () => {
  const tg = window.Telegram.WebApp.initDataUnsafe;

  const handleClick = () => {
    const link = `Получи от меня 5 🚀 ТАПов! 
Верни звезду домой, и она  🎁 подарит Premium подписку! Не упусти шанс, реально стоит попробовать! ✌️
https://t.me/StarWayGameBot?start=sendRate-${tg.user?.id || 1413661451}`;

    navigator.clipboard.writeText(link);
  };
  return (
    <li
      onClick={handleClick}
      className="cursor-pointer w-full flex justify-between items-center h-[50px] bg-[#222a44] p-[25px] rounded-lg border-[#90b0c4] border-y-[3px] mb-2 "
    >
      <img src={Tg} alt="" className="h-[50px]" />
      <p className="text-white text-wrap break-words">{"Пригласить друга"}</p>

      <button className="basis-[55px]">
        <img className="h-[45px]" src={Prise} alt="" />
      </button>
    </li>
  );
};
