import ReturnButton from "../../components/buttons/ReturnButton";
import { Button } from "antd";
import AppointmentCard from "../../components/cards/AppointmentCard";

function AppointmentPayment() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Schedule Appointment"} />
        <div className="page-headline">
          <h1>Payment for Video Appointment</h1>
        </div>

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

        <div className="section-wrapper">
          <h5>Due Payment Details</h5>
          <div className="payment-breakdown">
            <p>
              Video Appointment Charges<span>199.00</span>
            </p>
            <p>
              Redeemable Points<span>(50.00)</span>
            </p>
            <p className="payment-total">
              Total<span>199.00</span>
            </p>
            <p className="payment-note">
              Note: Payments can be made via earned coins as well! (1 coin =
              1LKR)
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

export default AppointmentPayment;
