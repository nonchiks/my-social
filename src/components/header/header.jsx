import "./header.css";
import logo from "../../assets/img/logo192.png";

function Header() {
  return (
    <header className="App-header">
      <a href="#" className="header-link">
        <img src={logo} className="header-logo" alt="logo" />
        <p className="header-text">Social</p>
      </a>
    </header>
  );
}

export default Header;
