import HomeAvatar from "../../components/avatars/HomeAvatar";
import QuoteBanner from "../../components/banners/QuoteBanner";
import SettingButton from "../../components/buttons/SettingButton";
import TrackerButton from "../../components/buttons/TrackerButton";
import ArticleCard from "../../components/cards/ArticleCard";
import DummyImg from "../../styles/resources/images/dummy_food_img.png";

function Home() {
  return (
    <>
      <div className="contents">
        <HomeAvatar date={"28 Jan 2023"} userName={"Dr. Paul"} />
        <div className="section-wrapper">
          <SettingButton
            settingLabel={"Upcoming Appointments"}
            settingIcon={"appointments-icon"}
          />
          <SettingButton
            settingLabel={"Schedule Availability"}
            settingIcon={"calendar-icon"}
          />
          <SettingButton
            settingLabel={"View Patients"}
            settingIcon={"patient-icon"}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
