import logo from "../assets/gsklogonobg.png";
import "../styles/Header.css";

/**
 * Navbar is rendered immediately so GSAP has a real target.
 * Logo starts hidden and is revealed after the loader animation.
 */
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
