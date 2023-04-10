import { Button } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";
import SettingButton from "../../components/buttons/SettingButton";

function Language() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Settings"} />
        <div className="page-headline">
          <h1>Change Language</h1>
        </div>

        <div className="flex-col">
          <SettingButton settingLabel={"English"} />
          <SettingButton settingLabel={"සිංහල"} />
          <SettingButton settingLabel={"தமிழ்"} />
        </div>

        <div className="btn-wrapper">
          <Button type="primary">Confirm</Button>
          <Button type="link">Clear</Button>
        </div>
      </div>
    </>
  );
}

export default Language;
