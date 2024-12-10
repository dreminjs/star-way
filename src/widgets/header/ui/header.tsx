import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="mb-[10px]">
      <h3 className="header__title-gradient text-center text-[40px] cursor-pointer font-bold">
        <Link to="/info">Star Way</Link>
      </h3>
    </header>
  );
};
