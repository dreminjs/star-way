import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header";

export const MainWrapper = () => {
  return (
    <div className="w-full h-screen mx-auto bg-[url('/src/assets/фон.png')] bg-no-repeat bg-center bg-cover">
      <Header />
      <Outlet />
    </div>
  );
};
