const SettingButton = ({ settingLabel, settingIcon, onClick }) => {
  return (
    <div className="setting-btn" onClick={onClick}>
      <img className={settingIcon} />
      {settingLabel}
    </div>
  );
};

export default SettingButton;
