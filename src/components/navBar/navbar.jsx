import "./navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="App-navBar">
      <div>
        <NavLink to="/profile" className="navBar-link">
          Profile
        </NavLink>
        <NavLink to="/dialogs" className="navBar-link">
          Dialogs
        </NavLink>
        <NavLink to="/users" className="navBar-link">
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
