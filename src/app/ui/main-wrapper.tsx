import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header";

export const MainWrapper = () => {
  
  return (
    <div className="w-full h-screen mx-auto bg-[url('/public/main-bg.png')] bg-no-repeat bg-center bg-cover">
      <Header />
      <Outlet />
    </div>
  );
};
