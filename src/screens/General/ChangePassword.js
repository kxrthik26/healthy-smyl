import { Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import ReturnButton from "../../components/buttons/ReturnButton";
import GoogleButton from "../../components/buttons/GoogleButton";

function ChangePassword() {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Settings"} />
        <div className="page-headline">
          <h1>Change Password</h1>
        </div>

        <div className="input-wrapper">
          <p>Current Password</p>
          <Input.Password
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>

        <div className="input-wrapper">
          <p>New Password</p>
          <Input.Password
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>

        <div className="btn-wrapper">
          <Button type="primary" size="medium">
            Change Password
          </Button>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
