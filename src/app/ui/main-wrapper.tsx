import { Outlet } from "react-router-dom";
import { Container } from "./container";

export const MainWrapper = () => {

  console.log(window.Telegram.WebApp.viewportHeight)


  return (
    <div className={`w-full h-[100vh] mx-auto bg-[url('/public/main-bg.png')] bg-no-repeat bg-center bg-cover overflow-hidden`}>
      
      <Container>
    
        <Outlet />
      </Container>
    </div>
  );
};
