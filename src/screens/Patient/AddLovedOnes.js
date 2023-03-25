import { Input, Checkbox, Button, TimePicker } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";

function AddLovedOnes() {
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
        <ReturnButton returnLocationLabel={"Profile"} />
        <div className="page-headline">
          <h1>Add Loved One's Details</h1>
        </div>

        <div className="input-wrapper">
          <p>First Name</p>
          <Input placeholder="eg: Janet" allowClear onChange={onChange} />
        </div>

        <div className="input-wrapper">
          <p>Last Name</p>
          <Input placeholder="eg: Payne" allowClear onChange={onChange} />
        </div>

        <div className="input-wrapper">
          <p>Email</p>
          <Input
            placeholder="eg: jpayne@gamil.com"
            allowClear
            onChange={onChange}
          />
        </div>

        <div className="input-wrapper">
          <p>Phone Number</p>
          <Input placeholder="+94 77 777 7777" allowClear onChange={onChange} />
        </div>

        <Checkbox>
          I consent to share my application data with the above mentioned
          individual.
        </Checkbox>

        <div className="btn-wrapper">
          <Button type="primary" size="medium">
            Confirm
          </Button>
          <Button type="link" size="medium">
            <span style={{ color: "#575757", marginRight: "0.37rem" }}>
              Clear
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddLovedOnes;
