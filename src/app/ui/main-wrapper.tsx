import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./container";
import Preview from "../../assets/loading-page-2.png";

export const MainWrapper = () => {
  const [isPreviwVisible, setIsPreviwVisible] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsPreviwVisible(false);
    }, 5000); // Скрыть картинку через 3 секунды

    return () => {
      clearTimeout(splashTimer);
    };
  }, []);

  const tg = Telegram.WebApp.platform

  console.log(tg)

  return (
    <div className="w-full h-screen mx-auto bg-[url('/public/main-bg.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
      {isPreviwVisible && (
        <div className="fixed h-screen inset-0 z-50 flex items-center justify-center bg-white">
          <img
            src={Preview}
            alt="Splash"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
