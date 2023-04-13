import { Radio } from "antd";

const DoctorTimeSlot = ({ availableTimeSlot, filledSlots, value }) => {
  return (
    <div className="notification-wrapper">
      <div className="slots-info-wrapper">
        <p>{availableTimeSlot}</p>
        <p>{filledSlots}</p>
      </div>
      <Radio value={value} />
    </div>
  );
};

export default DoctorTimeSlot;
