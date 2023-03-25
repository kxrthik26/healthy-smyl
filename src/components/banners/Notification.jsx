import { Checkbox } from "antd";

const Notification = ({
  notificationLabel,
  notificationTime,
  notificationIcon,
  notifyAdditionalNote,
}) => {
  return (
    <div className="notification-wrapper">
      <div className="notify-left">
        <img className={notificationIcon} />
        <div className="notify-content">
          <p className="notify-label">{notificationLabel}</p>
          <p className="notify-note">{notifyAdditionalNote}</p>
          <p className="notify-time">{notificationTime}</p>
        </div>
      </div>
      <Checkbox></Checkbox>
    </div>
  );
};

export default Notification;
