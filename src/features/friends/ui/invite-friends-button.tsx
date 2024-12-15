import React, { useState } from "react";

export const InviteFriendsButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  const tg = window.Telegram.WebApp.initDataUnsafe;

  const handleClick = () => {
    const link = `https://t.me/StarWayGameBot?start=sendRate-${tg.user?.id}`;

    navigator.clipboard
      .writeText(link)
      .then(() => {
        setIsCopied(true);
      })
      .catch((err) => {
        console.error("Ошибка копирования: ", err);
      });
  };

  return (
    <button
      onClick={handleClick}
      className="text-[32px] text-white font-bold mx-auto block bg-[#222a44] border-[#90b0c4] border-y-[2px] w-full py-2 rounded-lg mb-3"
    >
      {isCopied ? (
        <>
          <span>Пригласить друзей</span>
          <span className="gradient-text"> +</span>
        </>
      ) : (
        <span>Скопированно </span>
      )}
    </button>
  );
};
