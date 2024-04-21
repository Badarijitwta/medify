// import BlogsAndNews from "../../components/containers/BlogsAndNews";
// import FAQSection from "../../components/containers/FAQSection";
// import HeroContentContainer from "../../components/containers/HeroContentContainer";
// import MedicalSpecialistContainer from "../../components/containers/MedicalSpecialistContainer";
// import OurFamilies from "../../components/containers/OurFamilies";
// import PatientCaringContainer from "../../components/containers/PatientCaringContainer";
// import SpecialisationContainer from "../../components/containers/SpecialisationContainer";

import CustomNavbar from "../../components/containers/CustomNavbar";
import "./style.css";

function HomePage() {
  return (
    <div>
      <header>
        <CustomNavbar />
      </header>
      {/* <main>
        <HeroContentContainer />
        <div className="coupon-container">
          <div className="coupon-container-main">
            <ul>
              <li>
                <img src="image 1.svg" alt="Coupon One" />
              </li>
              <li>
                <img src="image 2.svg" alt="Coupon Two" />
              </li>
              <li>
                <img src="image 3.svg" alt="Coupon Three" />
              </li>
            </ul>
            <div className="coupon-pagination">
              <h5>Apply Pagination</h5>
            </div>
          </div>
        </div>
        <SpecialisationContainer />
        <MedicalSpecialistContainer />
        <PatientCaringContainer />
        <BlogsAndNews />
        <OurFamilies />
        <FAQSection />
      </main> */}
    </div>
  );
}

export default HomePage;
