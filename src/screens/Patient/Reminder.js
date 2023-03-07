import { Input, Select, Button, TimePicker } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";

function Reminder() {
  dayjs.extend(customParseFormat);
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Medicine Tracker"} />
        <div className="page-headline">
          <h1>Set Reminder</h1>
        </div>

        <div className="input-wrapper">
          <p>Label</p>
          <Input
            placeholder="eg: Time for afternoon meds"
            allowClear
            onChange={onChange}
          />
        </div>

        <div className="input-wrapper">
          <p>Repeat</p>
          <Select
            defaultValue="Everyday"
            style={{
              width: "100%",
            }}
            onChange={handleChange}
            options={[
              {
                value: "Everyday",
                label: "Everyday",
              },
              {
                value: "Everyday other day",
                label: "Everyday other day",
              },
              {
                value: "Every week",
                label: "Every week",
              },
            ]}
          />
        </div>

        <div className="input-wrapper">
          <p>Set Time</p>
          <TimePicker
            onChange={onChange}
            defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
            style={{
              width: "100%",
            }}
          />
        </div>

        <div className="btn-wrapper">
          <Button type="primary" size="medium">
            Set Reminder
          </Button>
          <Button type="link" size="medium">
            <span style={{ color: "#575757", marginRight: "0.37rem" }}>
              Reset Fields
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Reminder;
