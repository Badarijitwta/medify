import "./style.css";
import SwiperSlider from "../../Swiper";
function MedicalSpecialistContainer() {
  return (
    <div className="medical-spcl-container">
      <h3>Our Medical Specialist</h3>
      <div className="medical-spcl-main">
        <SwiperSlider />
      </div>
      <div className="medical-spcl-pagination"></div>
    </div>
  );
}

export default MedicalSpecialistContainer;
