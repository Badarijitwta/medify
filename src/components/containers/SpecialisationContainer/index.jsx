import "./style.css";
import {
  TbDeviceHeartMonitor,
  TbHeartbeat,
  TbMedicalCross,
  TbStethoscope,
  TbTestPipe,
} from "react-icons/tb";
import { FaRegHospital, FaXRay } from "react-icons/fa";
import { GrTestDesktop } from "react-icons/gr";
import Card from "../../Card";
import Button from "../../Button";

function SpecialisationContainer() {
  const SpecializationCardData = [
    { icon: <FaRegHospital />, description: "Dentistry" },
    { icon: <TbStethoscope />, description: "Primary Care" },
    { icon: <TbHeartbeat />, description: "Cardiology" },
    { icon: <TbDeviceHeartMonitor />, description: "MRI Resonance" },
    { icon: <TbTestPipe />, description: "Blood Test" },
    { icon: <TbMedicalCross />, description: "Psychologist" },
    { icon: <GrTestDesktop />, description: "Laboratory" },
    { icon: <FaXRay />, description: "X-Ray" },
  ];
  return (
    <div className="specialization-container">
      <h3 id="specialization-header">Find By Specialisation</h3>
      <div className="specialization-container-main">
        {SpecializationCardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            description={card.description}
            descriptionStyle={{
              color: "rgba(171, 182, 199, 1)",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "27px",
            }}
          />
        ))}
      </div>
      <Button
        text={"View All"}
        style={{
          width: "147px",
          height: "50px",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}

export default SpecialisationContainer;
