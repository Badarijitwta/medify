import "./style.css";

const OurFamiliesCard = ({ icon, numbers, text }) => {
  return (
    <div className="family-card-main">
      <img src={icon} alt="Icon" id="family-card-main-icon" />
      <h4 id="family-card-main-numbers">{numbers}</h4>
      <h5 id="family-card-main-text">{text}</h5>
    </div>
  );
};

export default function OurFamilies() {
  return (
    <div className="our-families-main">
      <div className="our-families-wrapper">
        <div className="our-families-text">
          <h5 id="our-families-text-heading">
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </h5>
          <h3 id="our-families-text-subheading">Our Families</h3>
          <p id="our-families-text-para">
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>
        <div className="our-families-card">
          <div className="our-families-card-left">
            <OurFamiliesCard
              icon={"families-card1.png"}
              numbers={"5000+"}
              text={"Happy Patients"}
            />

            <OurFamiliesCard
              icon={"families-card2.png"}
              numbers={"1000+"}
              text={"Laboratories"}
            />
          </div>
          <div className="our-families-card-right">
            <OurFamiliesCard
              icon={"families-card3.png"}
              numbers={"200+"}
              text={"Hospitals"}
            />

            <OurFamiliesCard
              icon={"families-card4.png"}
              numbers={"700+"}
              text={"Expert Doctors"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
