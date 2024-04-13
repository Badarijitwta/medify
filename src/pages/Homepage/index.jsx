import Card from "../../components/Card";
import HeroContentContainer from "../../components/HeroContentContainer";
import Navbar from "./../../components/Navbar/index";
import { TbDeviceHeartMonitor } from "react-icons/tb";

import "./style.css";
import Button from "./../../components/Button/index";
function HomePage() {
  const SpecializationCardData = [
    { icon: <TbDeviceHeartMonitor />, description: "MRI Resonance" },
  ];
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
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
        <div className="specialization-container">
          <h3 id="specialization-header">Find By Specialisation</h3>
          <div className="specialization-container-main">
            {SpecializationCardData.map((card, index) => {
              <Card
                key={index}
                icon={card.icon}
                description={card.description}
              />;
            })}
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
      </main>
    </div>
  );
}

export default HomePage;
