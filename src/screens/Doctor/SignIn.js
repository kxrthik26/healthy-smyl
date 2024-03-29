import { Input, DatePicker, Checkbox, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import ReturnButton from "../../components/buttons/ReturnButton";
import React from "react";
import GoogleButton from "../../components/buttons/GoogleButton";

function DoctorSignIn() {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

  const onChange = (e) => {
    console.log(e);
  };

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Return"} />
        <div className="page-headline">
          <h1>Join HealthySmyl!</h1>
          <p>
            We’re happy that you’re choosing to assist your patients lead a
            healthy lifestyle.
          </p>
        </div>

        <GoogleButton buttonLabel={"Continue with Google"} />

        <div className="input-wrapper">
          <p>First Name</p>
          <Input placeholder="eg: Selshia" allowClear onChange={onChange} />
        </div>

        <div className="input-wrapper">
          <p>Last Name</p>
          <Input placeholder="eg: Sbamuni" allowClear onChange={onChange} />
        </div>

        <div className="input-wrapper">
          <p>Practice Type</p>
          <Input placeholder="eg: Doctor" allowClear onChange={onChange} />
        </div>

        <div className="input-wrapper">
          <p>Medical Association Registration No.</p>
          <Input placeholder="eg: 20937g" allowClear onChange={onChange} />
        </div>

        <div className="input-wrapper">
          <p>Email</p>
          <Input
            placeholder="example@email.com"
            allowClear
            onChange={onChange}
          />
        </div>

        <div className="input-wrapper">
          <p>Phone Number</p>
          <Input placeholder="+94 77 777 7777" allowClear onChange={onChange} />
        </div>

        <div className="input-wrapper">
          <p>Create Password</p>
          <Input.Password
            placeholder="Create a Strong Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>

        <div className="input-wrapper">
          <p>Confirm Password</p>
          <Input.Password
            placeholder="Confirm Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>

        <Checkbox>
          I agree to the{" "}
          <a href="#" target="_blank" style={{ color: "#0153FF" }}>
            Terms & Services
          </a>
        </Checkbox>

        <div className="btn-wrapper">
          <Button type="primary" size="medium">
            Create Account
          </Button>
          <Button type="link" size="medium">
            <span style={{ color: "#575757", marginRight: "0.37rem" }}>
              Already a member?
            </span>
            Login
          </Button>
        </div>
      </div>
    </>
  );
}

export default DoctorSignIn;
