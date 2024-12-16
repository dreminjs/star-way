import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./container";
import Preview from "../../assets/loading-page-2.png";
import QRCode from "react-qr-code";

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
      {Telegram.WebApp.platform === "pc" && (
        <div className="fixed h-screen flex items-center justify-center inset-0 z-50 bg-black">
          <QRCode value="https://t.me/StarWayGameBot" />31231
        </div>
      )}
      <h3>{Telegram.WebApp.platform}</h3>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
