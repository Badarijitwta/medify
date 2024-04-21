import "./style.css";

export default function PatientCaringContainer() {
  return (
    <div className="pcc-main">
      <div className="pcc-wrapper">
        <div className="img-holder">
          <div className="pcc-consult">
            <div className="top-line">
              <img src="Phone.svg" alt="" id="phone-img" />
              <h4 id="top-line-heading">Free Consultation</h4>
            </div>
            <p id="pcc-consult-para">Consultation with the best</p>
          </div>
          <img id="imageOne" src="image-02-1.png.png" alt="" />
          <img id="imageTwo" src="image-01-1.png.png" alt="" />
        </div>
        <div className="text-holder">
          <h5 id="text-holder-heading">
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </h5>
          <h3 id="text-holder-main">
            Patient <span id="text-holder-highlight">Caring</span>
          </h3>
          <p id="text-holder-para">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <ul id="text-holder-ul">
            <li>
              <img
                src="Tickmark.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
              Stay Updated About Your Health
            </li>
            <li>
              <img
                src="Tickmark.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
              Check Your Results Online
            </li>
            <li>
              <img
                src="Tickmark.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
              Manage Your Appointments
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
