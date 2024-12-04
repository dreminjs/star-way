import { NavItem } from "../../../entities/navigation";
import Main from "../../../assets/main.png";
import MainActive from "../../../assets/main-active.png";
import Orders from "../../../assets/orders.png";
import OrdersActive from "../../../assets/orders-active.png";
import Friends from "../../../assets/friends.png";
import FriendsActive from "../../../assets/friend-active.png";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const pathname = useLocation().pathname;

  return (
    <nav className="mt-[80px] w-full">
      <ul className="flex justify-between items-center">
        <NavItem className="flex justify-center items-center pr-5" position={"left"}>
          {pathname === "/" ? (
            <img className="w-[45px] h-[45px]" src={MainActive} alt="Main" />
          ) : (
            <img className="w-[45px] h-[45px]" src={Main} alt="Main" />
          )}
        </NavItem>
        <NavItem className="flex justify-center items-center" position={"center"}>
          {pathname === "/tasks" ? (
            <img className="w-[60px]" src={OrdersActive} alt="Main" />
          ) : (
            <img className="w-[60px]" src={Orders} alt="Main" />
          )}
        </NavItem>
        <NavItem className="flex justify-center items-center pl-2" position={"right"}>
          {pathname === "/friends" ? (
            <img className="w-[45px] h-[45px]" src={FriendsActive} alt="Main" />
          ) : (
            <img className="w-[45px] h-[45px]" src={Friends} alt="Main" />
          )}
        </NavItem>
      </ul>
    </nav>
  );
};
