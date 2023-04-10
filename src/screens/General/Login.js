import { Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import ReturnButton from "../../components/buttons/ReturnButton";
import GoogleButton from "../../components/buttons/GoogleButton";

function Introduction() {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Return"} />
        <div className="page-headline">
          <h1>Welcome Back!</h1>
          <p>We’re glad you came back</p>
        </div>

        <div className="input-wrapper">
          <p>Email</p>
          <Input placeholder="Enter Email" allowClear onChange={onChange} />
        </div>

        <div className="input-wrapper">
          <p>Password</p>
          <Input.Password
            placeholder="Enter Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>

        <div className="btn-wrapper">
          <Button type="primary" size="medium">
            Login
          </Button>
          <GoogleButton buttonLabel={"Continue with Google"} />
          <Button type="link" size="medium">
            <span style={{ color: "#575757", marginRight: "0.37rem" }}>
              Not a member?
            </span>
            Signup
          </Button>
        </div>
      </div>
    </>
  );
}

export default Introduction;
