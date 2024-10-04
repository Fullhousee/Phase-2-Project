import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/joke"
        className="nav-link"
      >
        Joke
      </NavLink>
      <NavLink
        to="/jokelist"
        className="nav-link"
      >
        Joke List
      </NavLink>
    </nav>
    );
};

export default NavBar;
