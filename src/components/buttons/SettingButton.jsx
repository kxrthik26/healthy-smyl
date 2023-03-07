const SettingButton = ({ settingLabel, settingIcon }) => {
  return (
    <div className="setting-btn">
      <img className={settingIcon} />
      {settingLabel}
    </div>
  );
};

export default SettingButton;
