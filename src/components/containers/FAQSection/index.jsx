import "./style.css";

export default function FAQSection() {
  return (
    <div className="faq-main">
      <h5 id="faq-main-heading">Get Your Answer</h5>
      <h3 id="faq-main-subheading">Frequently Asked Questions</h3>
      <div className="faq-wrapper">
        <div className="faq-image-holder">
          <div id="faq-happy-patients">
            <img
              src="faq-happy-face.png"
              alt="Happy Face"
              width={"44px"}
              height={"44px"}
            />
            <div id="faq-happy-patients-text">
              <h4>84+</h4>
              <p>Happy-Patients</p>
            </div>
          </div>
          <img src="faqimage.png" alt="Happy Patient" />
          <div id="faq-rounded">
            <img
              src="faq-cherry.png"
              alt="Cherry in Hand"
              width={"80px"}
              height={"40px"}
            />
          </div>
        </div>
        <div className="faq-questions-holder">
          <ul id="question-list">
            <li>
              <span className="question-text">
                Why choose our medical for your family?
              </span>{" "}
              <span id="plus-sign">+</span>
            </li>
            <li>
              <span className="question-text">
                Why we are different from others?
              </span>
              <span id="plus-sign">+</span>
            </li>
            <li>
              <span className="question-text">
                Trusted & experience senior care & love
              </span>
              <span id="plus-sign">+</span>
            </li>
            <li>
              <span className="question-text">
                How to get appointment for emergency cases?
              </span>
              <span id="plus-sign">+</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
