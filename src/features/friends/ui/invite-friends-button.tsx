export const InviteFriendsButton = () => {
  const tg = window.Telegram.WebApp.initDataUnsafe;

  const handleClick = () => {
    const link = `https://t.me/StarWayGameBot?start=sendRate-${
      tg.user?.id || 1413661451
    }`;

    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(link)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="text-[32px] text-white font-bold mx-auto block bg-[#222a44] border-[#90b0c4] border-y-[2px] w-full py-2 rounded-lg mb-3"
    >
      <>
        <span>Пригласить друзей</span>
        <span className="gradient-text"> +</span>
      </>
    </button>
  );
};
