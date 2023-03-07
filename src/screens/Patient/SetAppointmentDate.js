import React from "react";
import { useState } from "react";
import { Input, Button, DatePicker, Space, Radio } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";

function SetAppointmentDate() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Select Hospital"} />
        <div className="page-headline">
          <h1>Set Date</h1>
        </div>

        <div className="section-wrapper">
          <h5 style={{ color: "#2B2B2B" }}>New Delmond's Hospital</h5>
          <div className="flex-row availability">
            <div>
              <span className="available dot" />
              Available
            </div>
            <div>
              <span className="unavailable dot" />
              Unavailable
            </div>
          </div>
        </div>

        <div className="input-wrapper">
          <p>Pick Date</p>
          <DatePicker onChange={onChange} style={{ width: "100%" }} />
        </div>

        <div className="input-wrapper">
          <p>Pick Time</p>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>8:00AM - 12:00PM</Radio>
            <Radio value={2}>15:00 - 17:00</Radio>
          </Radio.Group>
        </div>

        <div className="input-wrapper">
          <p>
            Leave a Note <span>(Optional)</span>
          </p>
          <Input placeholder="eg: I'll be 5 mins late" allowClear />
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

export default SetAppointmentDate;
