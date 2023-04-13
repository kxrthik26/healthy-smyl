import ReturnButton from "../../components/buttons/ReturnButton";
import { Button, Alert } from "antd";
import AppointmentCard from "../../components/cards/AppointmentCard";

function AppointmentConfirmed() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Schedule Appointment"} />
        <div className="page-headline">
          <h1>Appointment Confirmed</h1>
        </div>

        <Alert
          message="Appointment Confirmed"
          description="Your appointment details are as follows. Please join 10 minutes before scheduled time."
          type="success"
          showIcon
        />

        <AppointmentCard
          docName={"Dr. Katie Berry"}
          docSpecialization={"Councelor"}
          appointmentNo={"100"}
          appointmentDate={"22 Feb 2023"}
          appointmentTime={"10:05 AM"}
          appointmentLink={
            "https://zoom.us/j/91417387016?pwd=OTFJUldNZjNObFlWVVp0M1hzQnl5dz09#success"
          }
          specialNotes={"Share all reports before appointment"}
        />

        <div className="btn-wrapper">
          <Button type="primary" size="medium">
            Return to Homepage
          </Button>
        </div>
      </div>
    </>
  );
}

export default AppointmentConfirmed;
