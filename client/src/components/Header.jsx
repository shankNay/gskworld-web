import logo from "../assets/gsklogonobg.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src={logo}
        alt="GSK World"
        className="nav-logo"
        id="nav-logo"
      />
    </header>
  );
};

export default Header;
