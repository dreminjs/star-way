import { Outlet } from "react-router-dom";
import { Container } from "./container";

export const MainWrapper = () => {

  

  return (
    <div className={`w-full h-[${window.Telegram.WebApp.viewportHeight}] mx-auto bg-[url('/public/main-bg.png')] bg-no-repeat bg-center bg-cover`}>
      
      <Container>
    
        <Outlet />
      </Container>
    </div>
  );
};
