import ReturnButton from "../../components/buttons/ReturnButton";
import { Button } from "antd";

function ConfirmAppointment() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Schedule Appointment"} />
        <div className="page-headline">
          <h1>Confirm Video Appointment</h1>
        </div>
        <div className="appointment-confirmation-card">
          <div className="appointment-title">
            <div className="title-content">
              <h5>Dr. Paul Verhoeven</h5>
              <p>Councelor</p>
            </div>
            <div className="appointment-ticket">04</div>
          </div>
          <div className="meet-info-widget">
            <img className="calendar-icon" />
            22 Feb 2023
          </div>
          <div className="meet-info-widget">
            <img className="clock-icon" />
            10.05 AM
          </div>
          <div className="meet-info-widget">
            <img className="video-icon" />
            <a href="https://zoom.us/j/91417387016?pwd=OTFJUldNZjNObFlWVVp0M1hzQnl5dz09#success">
              Join Video Call
            </a>
          </div>
          <div className="spl-notes-wrapper">
            <p className="spl-note-title">Special Notes</p>
            <p className="spl-note-content">
              Share all reports before the appointment
            </p>
          </div>
        </div>

        <div className="btn-wrapper">
          <Button type="primary" size="medium">
            Confirm
          </Button>
          <Button type="link" size="medium">
            Cancel Appointment
          </Button>
        </div>
      </div>
    </>
  );
}

export default ConfirmAppointment;
