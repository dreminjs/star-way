import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./container";
import FirstLoadingImg from "../../assets/loading-page-1.png";
import SecondLoadingImg from "../../assets/loading-page-2.png";

export const MainWrapper = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentImage, setCurrentImage] = useState(FirstLoadingImg);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setCurrentImage(SecondLoadingImg);
    }, 7000); // Переключить изображение через 1.5 секунды

    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 13000); // Скрыть картинку через 3 секунды

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(splashTimer);
    };
  }, []);

  return (
    <div className="w-full h-screen mx-auto bg-[url('/public/main-bg.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
      {showSplash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <img src={currentImage} alt="Splash" className="w-full h-full object-cover" />
        </div>
      )}
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
