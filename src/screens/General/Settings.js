import ReturnButton from "../../components/buttons/ReturnButton";
import SettingButton from "../../components/buttons/SettingButton";

function Settings() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Profile"} />
        <div className="page-headline">
          <h1>Settings</h1>
        </div>

        <div className="flex-col">
          <SettingButton
            settingLabel={"Language"}
            settingIcon={"language-icon"}
          />
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
