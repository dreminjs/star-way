import { NavItem } from "../../../entities/navigation";
import Main from "../../../assets/main.png";
import MainActive from "../../../assets/main-active.png";
import Orders from"../../../assets/orders.png"; ;
import OrdersActive from "../../../assets/orders-active.png";
import Friends from "../../../assets/friends.png";
import FriendsActive from "../../../assets/friend-active.png";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const pathname = useLocation().pathname;

  return (
    <nav className="w-full">
      <ul className="flex justify-between items-center bg-cover">
        <NavItem className="flex justify-center items-center pr-10 bg-[url('/public/left-nav-item.png')]">
          {pathname === "/" ? (
            <img className="w-[40px] h-[40px]" src={MainActive} alt="Main" />
          ) : (
            <img className="w-[40px] h-[40px]" src={Main} alt="Main" />
          )}
        </NavItem>
        <NavItem className="flex justify-center items-center bg-[url('/public/center-nav-item.png')]">
          {pathname === "/tasks" ? (
            <img className="w-[45px]" src={OrdersActive} alt="Main" />
          ) : (
            <img className="w-[45px]" src={Orders} alt="Main" />
          )}
        </NavItem>
        <NavItem className="flex pr-8 justify-center items-center w-[135px] bg-[url('/public/left-nav-item.png')] transform rotate-180">
          {pathname === "/friends" ? (
            <img className="w-[35px] h-[35px]" src={FriendsActive} alt="Main" />
          ) : (
            <img className="w-[35px] h-[35px]" src={Friends} alt="Main" />
          )}
        </NavItem>
      </ul>
    </nav>
  );
};
