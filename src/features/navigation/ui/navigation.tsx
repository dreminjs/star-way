import { NavItem } from "../../../entities/navigation";
import { Link, useLocation } from "react-router-dom";
import Gaiki from "../../../assets/gaiki.png";
import VersionBeta from "../../../assets/version-beta.png"; 
import Orders from "../../../assets/orders-nav-item.png";
import OrdersActive from "../../../assets/orders-active-nav-item .png";
import Main from "../../../assets/star-nav-item.png";
import MainActive from "../../../assets/star-nav-item-active.png";
import Friends from "../../../assets/friends-nav-item.png";
import FriendsActive from "../../../assets/friends-nav-item-active.png";


export const Navigation = () => {
  const pathname = useLocation().pathname;

  return (
    <nav className="w-full mb-[45px]">
      <ul className="flex justify-between items-center bg-cover mb-5">
        <NavItem to="/" className="flex justify-center items-center pr-10">
          {pathname === "/" ? (
            <img className="w-[140px] h-[50px]" src={MainActive} alt="Main" />
          ) : (
            <img className="w-[140px] h-[50px]" src={Main} alt="Main" />
          )}
        </NavItem>
        <NavItem to="/tasks" className="flex justify-center items-center">
          {pathname === "/tasks" ? (
            <img className="w-[140px] h-[50px]" src={OrdersActive} alt="Main" />
          ) : (
            <img className="w-[140px] h-[50px]" src={Orders} alt="Main" />
          )}
        </NavItem>
        <NavItem to="/friends" className="flex pr-8 justify-center items-center w-[135px] transform rotate-180">
          {pathname === "/friends" ? (
            <img className="w-[140px] h-[50px] transform rotate-180" src={FriendsActive} alt="Main" />
          ) : (
            <img className="w-[140px] h-[50px] transform rotate-180" src={Friends} alt="Main" />
          )}
        </NavItem>
      </ul>
        <Link className="flex mx-auto justify-center items-center gap-2" to="https://t.me/EventStark">
            <img className="h-[30px]" src={Gaiki} alt="" />
            <img className="h-[30px]" src={VersionBeta} alt="" />
        </Link>
    </nav>
  );
};
