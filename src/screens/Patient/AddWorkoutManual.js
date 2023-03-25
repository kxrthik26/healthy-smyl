import { Input, Select, Button, TimePicker, DatePicker } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";
import dayjs from "dayjs";
import React from "react";

function AddWorkoutManual() {
  const format = "HH:mm";
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Workout Tracker"} />
        <div className="page-headline">
          <h1>Add Exercise</h1>
        </div>

        <div className="input-wrapper">
          <p>Name</p>
          <Input
            placeholder="eg: Bicycle Crunches"
            allowClear
            onChange={onChange}
          />
        </div>

        <div className="input-wrapper">
          <p>Pace</p>
          <Select
            defaultValue="Medium"
            style={{
              width: "100%",
            }}
            onChange={handleChange}
            options={[
              {
                value: "Slow",
                label: "Slow",
              },
              {
                value: "Medium",
                label: "Medium",
              },
              {
                value: "Fast",
                label: "Fast",
              },
            ]}
          />
        </div>

        <div className="input-wrapper">
          <p>Set Duration</p>
          <TimePicker
            defaultValue={dayjs("12:08", format)}
            format={format}
            showNow={false}
            style={{ width: "100%" }}
          />
        </div>

        <div className="input-wrapper">
          <p>Set Date</p>
          <DatePicker onChange={onChangeDate} style={{ width: "100%" }} />
        </div>

        <div className="btn-wrapper">
          <Button type="primary" size="medium">
            Add Exercise
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

export default AddWorkoutManual;
