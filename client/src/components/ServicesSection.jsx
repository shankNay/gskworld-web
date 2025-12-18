import { useEffect, useRef, useState } from "react";
import serviceImage1 from "../assets/gsk_service_1.png";
import serviceImage2 from "../assets/gsk_service_2.png";
import serviceImage3 from "../assets/gsk_service_3.png";
import serviceImage4 from "../assets/gsk_service_4.png";
import "../styles/ServicesSection.css";


const ServicesSection = () => {
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
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
    id="services"
      ref={sectionRef}
      className={`services-section ${visible ? "services-visible" : ""}`}
    >
      <h2 className="services-heading">Our Services</h2>

      <p className="services-subtext">
        At GSK WORLD, we provide comprehensive staffing solutions tailored to your
        unique workforce needs.
      </p>

      <div className="services-grid">
        <div className="service-card service-card--interactive">
          <div
            className="service-card-image"
            style={{ backgroundImage: `url(${serviceImage1})` }}
          >
            <div className="service-card-overlay" />
            <h3 className="service-card-title">Permanent Placement</h3>
          </div>
          <div className="service-card-content">
            <p>
              We assist in finding and hiring the right full-time staff to ensure
              your long-term success.
            </p>
          </div>
        </div>
        <div className="service-card service-card--interactive">
          <div
            className="service-card-image"
            style={{ backgroundImage: `url(${serviceImage2})` }}
          >
            <div className="service-card-overlay" />
            <h3 className="service-card-title">Temporary Staffing</h3>
          </div>
          <div className="service-card-content">
            <p>
              We supply qualified temporary employees to help you manage
              fluctuating workforce demands efficiently.
            </p>
          </div>
        </div>
        <div className="service-card service-card--interactive">
          <div
            className="service-card-image"
            style={{ backgroundImage: `url(${serviceImage3})` }}
          >
            <div className="service-card-overlay" />
            <h3 className="service-card-title">Contract Staffing</h3>
          </div>
          <div className="service-card-content">
            <p>
              We offer flexible contract-based solutions ideal for project-specific
              or seasonal requirements.
            </p>
          </div>
        </div>

        <div className="service-card service-card--interactive">
          <div
            className="service-card-image"
            style={{ backgroundImage: `url(${serviceImage4})` }}
          >
            <div className="service-card-overlay" />
            <h3 className="service-card-title">
              Recruitment Process Outsourcing
            </h3>
          </div>
          <div className="service-card-content">
            <p>
              Let us handle the details—we manage the complete recruitment
              process, saving you time and resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
