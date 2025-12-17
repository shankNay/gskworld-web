import "../styles/BottomNav.css";

const BottomNav = ({ visible }) => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`bottom-nav ${visible ? "show" : ""}`}>
      <button onClick={() => scrollTo("home")}>Home</button>
      <button onClick={() => scrollTo("about")}>About</button>
      <button onClick={() => scrollTo("services")}>Services</button>
      <button onClick={() => scrollTo("approach")}>Approach</button>
      <button onClick={() => scrollTo("contact")}>Contact Us</button>
    </div>
  );
};

export default BottomNav;
