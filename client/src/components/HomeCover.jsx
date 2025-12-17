import coverImage from "../assets/gsk_home_cover.png";
import "../styles/HomeCover.css";

/**
 * HomeCover
 * - Hero cover section for homepage
 * - Uses background image with text overlay
 * - Equal margins on all sides
 * - Rounded corners for premium look
 */
const HomeCover = () => {
  return (
    <section id="home" className="home-cover-wrapper">
      <div
        className="home-cover"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <h1 className="home-cover-title">
          Connecting Right Talent
        </h1>
      </div>
    </section>
  );
};

export default HomeCover;
