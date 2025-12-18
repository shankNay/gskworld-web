import "../styles/Footer.css";

/**
 * Footer
 * - Dark themed footer inspired by reference
 * - Top highlight panel with Year Founded & Location
 * - Main footer with info columns
 * - No navigation bar (already exists globally)
 */
const Footer = () => {
  return (
    <footer id="contact"  className="footer">
      {/* Top highlight panel */}
      <div className="footer-highlight">
        <div className="footer-highlight-item">
          <span className="footer-label">Year Founded</span>
          <span className="footer-value">2024</span>
        </div>

        <div className="footer-highlight-item">
          <span className="footer-label">Location</span>
          <span className="footer-value">Bengaluru</span>
        </div>
      </div>

      {/* Main footer content */}
      <div className="footer-content">
        <div className="footer-column">
          <h4>Get in touch</h4>
          <p>gsk.world.info@gmail.com</p>
          <p>gsk.world16@gmail.com</p>
          <p>+916362364859</p>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <a
            href="https://www.instagram.com/gskworld_?igsh=dmNmaWVoNzk5cDY4"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
        </div>

        <div className="footer-column">
          <h4>Address</h4>
          <p>
            GSK WORLD<br />
            No. 8, 2nd Floor, Brindavan Nagar,<br />
            Doddabele Main Road, Kengeri, <br />
            Bangalore, Karnataka <br />
            India
          </p>
           
        </div>

      </div>

      {/* Bottom note */}
      <div className="footer-bottom">
        {/* © {new Date().getFullYear()} Designed and Developed by Kake Technologies. */}
      </div>
    </footer>
  );
};

export default Footer;
