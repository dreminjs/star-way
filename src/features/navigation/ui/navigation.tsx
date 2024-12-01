import { NavItem } from "../../../entities/navigation";

export const Navigation = () => {
  return (
    <nav className="mt-[80px] w-full">
      <ul className="flex justify-between items-center">
        <NavItem position={"left"} icon={"main"} />
        <NavItem position={"center"} icon={"orders"} />
        <NavItem position={"right"} icon={"friends"} />
      </ul>
    </nav>
  );
};
