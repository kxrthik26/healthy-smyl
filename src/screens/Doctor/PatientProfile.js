import ReturnButton from "../../components/buttons/ReturnButton";
import { Button, Input, Rate } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

import SettingButton from "../../components/buttons/SettingButton";

function PatientProfile() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Home"} />
        <div className="page-headline">
          <h1>Profile</h1>
        </div>

        <div className="profile-basic-info-wrapper">
          <img
            src={require("../../styles/resources/images/dummy_profile_img.png")}
            className="profile-picture"
          />
          <div>
            <p className="profile-name">Juliana Wandervort</p>
            <p className="profile-age">22</p>
            <p className="profile-blood-grp">A-</p>
          </div>
        </div>

        <div className="report-link">
          Latest Report
          <br />
          <span>as at 06 Feb 2023</span>
        </div>

        <div className="section-wrapper">{/* Add CDC4 Lvl Graph here */}</div>

        <div className="flex-row">
          <div className="info-block">
            <h1>
              170<span> cm</span>
            </h1>
          </div>
          <div className="info-block">
            <h1>
              90<span> kg</span>
            </h1>
          </div>
        </div>
        <div className="feedback-wrapper">
          Give Feedback
          <Input />
          <Button
            type="primary"
            size="small"
            style={{
              fontSize: "0.9rem",
              height: "auto",
              width: "4rem",
              padding: "0.1rem",
            }}
          >
            Send
          </Button>
        </div>
        <div className="section-wrapper">{/* Add BMI Graph here */}</div>
        <div className="section-wrapper">
          <div className="flex-row">
            <a className="support-redirect-btn blue-bg">
              <img className="emergency-icon" />
              View Nutrition Reports
            </a>
            <a className="support-redirect-btn blue-bg">
              <img className="help-icon" />
              View Workout Reports
            </a>
          </div>
        </div>
        <div className="view-reports">
          View Previous Reports
          <img className="arrow-head-right-icon" />
        </div>
      </div>
    </>
  );
}

export default PatientProfile;
