import ReturnButton from "../../components/buttons/ReturnButton";
import { Rate } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

import SettingButton from "../../components/buttons/SettingButton";

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

function Profile() {
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
            <a>Edit Profile</a>
          </div>
        </div>

        <div className="water-consumption-widget">
          <div className="consumption-amt-wrapper">
            <div className="consumption-amt">
              <img className="glass-cup-icon" />
              <h1>6</h1>
            </div>
            <div className="consumption-updater-wrapper">
              <div className="consumption-updater">
                <img className="decrease-icon" />
              </div>
              <div className="consumption-updater">
                <img className="increase-icon" />
              </div>
            </div>
          </div>
          <p>Today's Water Consumption</p>
        </div>

        <div className="mood-rating-wrapper">
          How are you feeling today?
          <Rate
            defaultValue={5}
            character={({ index }) => customIcons[index + 1]}
          />
        </div>

        <div className="flex-row">
          <div className="info-block">
            <img className="ruler-icon" />
            <h1>
              170<span> cm</span>
            </h1>
          </div>
          <div className="info-block">
            <img className="scale-icon" />
            <h1>
              90<span> kg</span>
            </h1>
          </div>
        </div>

        <div className="flex-col">
          <SettingButton
            settingLabel={"Share Health Report"}
            settingIcon={"share-icon"}
          />
          <SettingButton
            settingLabel={"See Previous Reports"}
            settingIcon={"clipboard-icon"}
          />
          <SettingButton settingLabel={"Settings"} settingIcon={"gear-icon"} />
        </div>
      </div>
    </>
  );
}

export default Profile;
