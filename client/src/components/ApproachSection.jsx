import "../styles/ApproachSection.css";

/**
 * ApproachSection
 * - Two-column layout
 * - Large heading on the left
 * - Supporting description on the right
 * - Content-focused, styling kept minimal
 */
const ApproachSection = () => {
  return (
    <section id="approach" className="approach-section">
      <div className="approach-inner">
        <h2 className="approach-heading">Our Approach & Advantage</h2>
        <p className="approach-text">
          At GSK WORLD, we prioritize partnership, working closely with you to
          deliver tailored staffing solutions rather than one-size-fits-all
          placements. Our experienced recruiters use rigorous screening to ensure
          every candidate fits both your required skills and company culture.
          Whether you need flexible staffing or dedicated support, our goal is to
          reduce turnover and drive your long-term success.
        </p>
      </div>
    </section>
  );
};

export default ApproachSection;
