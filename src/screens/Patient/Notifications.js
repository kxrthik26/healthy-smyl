import Notification from "../../components/banners/Notification";
import ReturnButton from "../../components/buttons/ReturnButton";

function Notifications() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Home"} />
        <div className="page-headline">
          <h1>Notifications</h1>
        </div>
        <div className="article-cards-wrapper">
          <div className="priority-label">
            High Priotity
            <img className="up-icon" />
          </div>
          <Notification
            notificationLabel={"Time to take your meds!"}
            notificationTime={"4m ago"}
            notificationIcon={"pill-icon"}
            notifyAdditionalNote={"Dosage available for 3 more days"}
          />
          <Notification
            notificationLabel={"Time to take your meds!"}
            notificationTime={"4m ago"}
            notificationIcon={"pill-icon"}
            notifyAdditionalNote={"Dosage available for 3 more days"}
          />
          <Notification
            notificationLabel={"Time to take your meds!"}
            notificationTime={"4m ago"}
            notificationIcon={"pill-icon"}
            notifyAdditionalNote={"Dosage available for 3 more days"}
          />
        </div>
        <div className="article-cards-wrapper">
          <div className="priority-label">
            Low Priotity
            <img className="down-icon" />
          </div>
          <Notification
            notificationLabel={"Time to take your meds!"}
            notificationTime={"4m ago"}
            notificationIcon={"pill-icon"}
            notifyAdditionalNote={"Dosage available for 3 more days"}
          />
          <Notification
            notificationLabel={"Time to take your meds!"}
            notificationTime={"4m ago"}
            notificationIcon={"pill-icon"}
            notifyAdditionalNote={"Dosage available for 3 more days"}
          />
          <Notification
            notificationLabel={"Time to take your meds!"}
            notificationTime={"4m ago"}
            notificationIcon={"pill-icon"}
            notifyAdditionalNote={"Dosage available for 3 more days"}
          />
        </div>
      </div>
    </>
  );
}

export default Notifications;
