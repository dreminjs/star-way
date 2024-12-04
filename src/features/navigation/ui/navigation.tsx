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
        <NavItem position={"left"}>
          {pathname === "/" ? (
            <img src={MainActive} alt="Main" />
          ) : (
            <img src={Main} alt="Main" />
          )}
        </NavItem>
        <NavItem position={"center"}>
          {pathname === "/tasks" ? (
            <img src={OrdersActive} alt="Main" />
          ) : (
            <img src={Orders} alt="Main" />
          )}
        </NavItem>
        <NavItem position={"right"}>
          {pathname === "/friends" ? (
            <img src={FriendsActive} alt="Main" />
          ) : (
            <img src={Friends} alt="Main" />
          )}
        </NavItem>
      </ul>
    </nav>
  );
};
