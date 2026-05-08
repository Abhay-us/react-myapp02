import "./Feedback.css";
import feedbackIcon from "../../assets/features-tabs-icon-01.svg";
import feedbackIcon2 from "../../assets/features-tabs-icon-02.svg";
import feedbackIcon3 from "../../assets/features-tabs-icon-03.svg";
import feedbackIcon4 from "../../assets/features-tabs-icon-04.svg";
import feebacktabImg from "../../assets/features-tabs-image.png";

const feedback = () => {
  return (
    <>
      <section>
        <div className="section-3">
          <h2>Built exclusively for you</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum — semper quis lectus
            nulla at volutpat diam ut venenatis.
          </p>
        </div>
        <div className="d-flex-row feature-tab">
          <div className=" feature-icon">
            <img src={feedbackIcon} />
            <h3>Internal Feedback</h3>
          </div>
          <div className=" feature-icon">
            <img src={feedbackIcon2} />
            <h3>Internal Feedback</h3>
          </div>
          <div className=" feature-icon">
            <img src={feedbackIcon3} />
            <h3>Internal Feedback</h3>
          </div>
          <div className=" feature-icon">
            <img src={feedbackIcon4} />
            <h3>Internal Feedback</h3>
          </div>
        </div>
        <div className="feature-tab-joinimg">
          <img src={feebacktabImg} alt="dd" />
        </div>
      </section>
    </>
  );
};
export default feedback;
