import { Input, DatePicker, Checkbox, Button } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";
import React from "react";

function CompleteProfile() {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

  const onChange = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Return"} />
        <div className="page-headline">
          <h1>Complete your Profile</h1>
          <p>We’re more than happy to help you enhance your lifestyle.</p>
        </div>

        <div className="input-wrapper">
          <p>Blood Group</p>
          <Input placeholder="eg: O+" allowClear onChange={onChange} />
        </div>

        <div className="input-wrapper">
          <p>
            Height <span>(cm)</span>
          </p>
          <Input placeholder="eg: 175" allowClear onChange={onChange} />
        </div>

        <div className="input-wrapper">
          <p>
            Weight <span>(kg)</span>
          </p>
          <Input placeholder="eg: 120" allowClear onChange={onChange} />
        </div>

        <div className="input-wrapper">
          <p>
            CD4 Count <span>(at Diagnosis)</span>
          </p>
          <Input placeholder="eg: 120" allowClear onChange={onChange} />
        </div>

        <div className="input-wrapper">
          <p>
            Start Date of ART <span>(Antiretrovial Therapy)</span>
          </p>
          <DatePicker format={dateFormatList} />
        </div>

        <div className="input-wrapper">
          <p>CD4 Count (Most Recent Reading)</p>
          <Input placeholder="" allowClear onChange={onChange} />
        </div>

        <div className="btn-wrapper">
          <Button type="primary" size="medium">
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}

export default CompleteProfile;
