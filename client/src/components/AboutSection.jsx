import { useEffect, useRef, useState } from "react";
import aboutImage from "../assets/gsk_about_us.png";
import "../styles/AboutSection.css";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
    id="about"
      ref={sectionRef}
      className={`about-section ${visible ? "about-visible" : ""}`}
    >
      <div className="about-inner">
        <div className="about-content">
          <h2 className="about-heading">About Us</h2>

          <p className="about-text">
            <strong>Who We Are</strong>
            <br /><br />
            At GSK WORLD, we are a trusted staffing agency specializing in
            providing high-quality staffing solutions to meet the unique hiring
            needs of our clients. Whether you need temporary staff for
            fluctuating demands or permanent employees for long-term growth, we
            are your partner of choice.
            <br /><br />
            We pride ourselves on our rigorous screening process and our ability
            to deliver personnel who are professional, reliable, and ready to
            contribute to your success.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="About GSK World" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
