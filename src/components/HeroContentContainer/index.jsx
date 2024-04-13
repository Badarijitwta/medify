import Button from "../Button";
import "./style.css";

function HeroContentContainer() {
  return (
    <>
      <main className="hero-content-main">
        <div className="text-button-wrapper">
          <div className="text-container">
            <h4>
              Skip the travel! Find Online <br />
              <span className="highlighter">
                Medical <span id="center-text">Centers</span>
              </span>
            </h4>
            <article id="bottom-script">
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </article>
          </div>
          <Button
            text={"Find Centers"}
            style={{
              width: "177px",
              height: "48px",
              padding: "12px 36px 12px 36px",
              gap: "10px",
              borderRadius: "8px",
              opacity: "0px",
              display: "flex",
              justifyContent: "center",
              color: "white",
              fontSize: "1rem",
            }}
          />
        </div>
        <div className="image-container">
          <img src="hero_image.svg" alt="Doctors" />
        </div>
      </main>
      <main className="searchbox-card-main">
        <div className="search-container"></div>
        <div className="card-container"></div>
      </main>
    </>
  );
}

export default HeroContentContainer;
