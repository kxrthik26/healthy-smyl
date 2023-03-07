import { Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import ReturnButton from "../../components/buttons/ReturnButton";
import GoogleButton from "../../components/buttons/GoogleButton";
import SettingButton from "../../components/buttons/SettingButton";

function Settings() {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Profile"} />
        <div className="page-headline">
          <h1>Settings</h1>
        </div>

        <div className="flex-col">
          <SettingButton settingLabel={"Language"} settingIcon={"leaf-icon"} />
          <SettingButton
            settingLabel={"Add Loved Ones Details"}
            settingIcon={"loved-one-icon"}
          />
          <SettingButton
            settingLabel={"Change Password"}
            settingIcon={"lock-icon"}
          />
          <SettingButton
            settingLabel={"Delete Account"}
            settingIcon={"delete-icon"}
          />
        </div>
      </div>
    </>
  );
}

export default Settings;
