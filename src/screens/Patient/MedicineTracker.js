import ReturnButton from "../../components/buttons/ReturnButton";
import Notification from "../../components/banners/Notification";
import TrackerDaySlider from "../../components/banners/TrackerDaySlider";

function MedicineTracker() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Home"} />
        <div className="page-headline">
          <h1>Medicine Tracker</h1>
        </div>
        <TrackerDaySlider trackingDay={"Today"} />
        <div className="flex-row">
          <div className="workout-card">
            <h1>
              2<span> of 4</span>
            </h1>
            <p>Doses Consumed</p>
          </div>
          <div className="workout-card">
            <h1>
              2<span> days</span>
            </h1>
            <p>Till Next Refill</p>
          </div>
        </div>
        <a className="link-btn">See all Reminders</a>
        <div className="section-wrapper">
          <h4>Today's Reminders</h4>
          <Notification
            notificationLabel={"Time to take your meds!"}
            notificationTime={"4m ago"}
            notificationIcon={"pill-icon"}
            notifyAdditionalNote={"Dosage available for 3 more days"}
          />
        </div>
        <div className="section-wrapper">
          <h4>Upcoming Reminders</h4>
          <Notification
            notificationLabel={"Time to take your meds!"}
            notificationTime={"4m ago"}
            notifyAdditionalNote={"Dosage available for 3 more days"}
          />
        </div>
        <div className="flex-row">
          <a className="support-redirect-btn blue-bg">
            <img className="w-pill-icon" />
            Add New Dose
          </a>
          <a className="support-redirect-btn blue-bg">
            <img className="meds-alarm-icon" />
            Add New Dose Refill
          </a>
        </div>
      </div>
    </>
  );
}

export default MedicineTracker;
