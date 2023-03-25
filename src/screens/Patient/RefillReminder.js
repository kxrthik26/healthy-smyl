import { Input, Select, Button, TimePicker } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";

function RefillReminder() {
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
          <h1>Set Medication Refill Reminder</h1>
        </div>

        <div className="input-wrapper">
          <p>Label</p>
          <Input
            placeholder="eg: Refill afternoon meds"
            allowClear
            onChange={onChange}
          />
        </div>

        <div className="input-wrapper">
          <p>No. of doses per day</p>
          <Select
            placeholder={"No of Tablets"}
            style={{
              width: "100%",
            }}
            onChange={handleChange}
            options={[
              {
                value: "1",
                label: "1",
              },
              {
                value: "2",
                label: "2",
              },
              {
                value: "3",
                label: "3",
              },
              {
                value: "4",
                label: "4",
              },
              {
                value: "5",
                label: "5",
              },
            ]}
          />
          <Select
            placeholder={"No of times a day"}
            style={{
              width: "100%",
            }}
            onChange={handleChange}
            options={[
              {
                value: "1",
                label: "1",
              },
              {
                value: "2",
                label: "2",
              },
              {
                value: "3",
                label: "3",
              },
            ]}
          />
        </div>

        <div className="input-wrapper">
          <p>No. of tablets purchased</p>
          <Input placeholder="56" allowClear onChange={onChange} />
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

export default RefillReminder;
