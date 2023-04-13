import DoctorTimeSlot from "../../components/banners/DoctorTimeSlot";
import ReturnButton from "../../components/buttons/ReturnButton";
import { Button, Radio, Input } from "antd";
import { useState } from "react";

function SetAppointmentDateTime() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Schedule Appointment"} />
        <div className="page-headline">
          <h1>Set Appointment Date & Time</h1>
        </div>

        <div className="section-wrapper">
          <h5>Available Slots</h5>
          <Radio.Group onChange={onChange} value={value}>
            <div className="article-cards-wrapper">
              <DoctorTimeSlot
                availableTimeSlot={"8:00 AM - 12.00 PM"}
                filledSlots={"3/5 slots filled"}
                value={1}
              />
              <DoctorTimeSlot
                availableTimeSlot={"8:00 AM - 12.00 PM"}
                filledSlots={"3/5 slots filled"}
                value={2}
              />
              <DoctorTimeSlot
                availableTimeSlot={"8:00 AM - 12.00 PM"}
                filledSlots={"3/5 slots filled"}
                value={3}
              />
            </div>
          </Radio.Group>
        </div>

        <div className="input-wrapper">
          <p>
            Leave a Note <span>(Optional)</span>
          </p>
          <Input allowClear />
        </div>

        <div className="btn-wrapper">
          <Button type="primary" size="medium">
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
}

export default SetAppointmentDateTime;
