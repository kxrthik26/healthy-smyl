import { Input } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";
import DoctorCard from "../../components/cards/DoctorCard";
import AppointmentCard from "../../components/cards/AppointmentCard";

function SelectDoctor() {
  return (
    <div className="contents">
      <ReturnButton returnLocationLabel={"Medicine Tracker"} />
      <div className="page-headline">
        <h1>Schedule Video Appointment</h1>
      </div>
      <div className="flex-col">
        <h4>Scheduled Appointments</h4>
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
      </div>
      <div className="flex-col">
        <h4>Schedule an Appointment</h4>
        <Input placeholder="Search for Doctors" />
        <div className="article-cards-wrapper">
          <DoctorCard
            doctorName={"Dr. Paul Verhoven"}
            doctorSpecialization={"Councelor"}
            doctorCharge={"LKR 1990.00"}
          />
          <DoctorCard
            doctorName={"Dr. Katie Berry"}
            doctorSpecialization={"Infectious Disease Specialist"}
            doctorCharge={"Free"}
          />
        </div>
      </div>
    </div>
  );
}

export default SelectDoctor;
