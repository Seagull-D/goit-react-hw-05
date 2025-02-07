import s from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { clsx } from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const Header = () => {
  return (
    <header className={s.container}>
      <h2 className={s.headerName}>Movies Router</h2>
      <nav>
        <ul className={s.headerNavLis}>
          <li>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
