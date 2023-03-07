import { Input, DatePicker, message, Button, Upload } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";
import React from "react";

function EditProfile() {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Profile"} />
        <div className="page-headline">
          <h1>Edit Profile</h1>
        </div>

        <div className="upload-profile-pic">
          <img className="" />
          <Upload {...props}>
            <Button type="link" size="medium">
              Change Picture
            </Button>
          </Upload>
        </div>

        <div className="input-wrapper">
          <p>First Name</p>
          <Input placeholder="eg: Selshia" allowClear />
        </div>

        <div className="input-wrapper">
          <p>Last Name</p>
          <Input placeholder="eg: Sbamuni" allowClear />
        </div>

        <div className="input-wrapper">
          <p>Date of Birth</p>
          <DatePicker format={dateFormatList} />
        </div>

        <div className="input-wrapper">
          <p>Email</p>
          <Input placeholder="example@email.com" allowClear />
        </div>

        <div className="input-wrapper">
          <p>Phone Number</p>
          <Input placeholder="+94 77 777 7777" allowClear />
        </div>

        <div className="input-wrapper">
          <p>Blood Group</p>
          <Input placeholder="eg: O+" allowClear />
        </div>

        <div className="input-wrapper">
          <p>
            Height <span>(cm)</span>
          </p>
          <Input placeholder="eg: 175" allowClear />
        </div>

        <div className="input-wrapper">
          <p>
            Weight <span>(kg)</span>
          </p>
          <Input placeholder="eg: 120" allowClear />
        </div>

        <div className="input-wrapper">
          <p>
            CD4 Count <span>(Most Recent Reading)</span>
          </p>
          <Input placeholder="eg: 120" allowClear />
        </div>

        <div className="input-wrapper">
          <p>Date of Last C4 Count Reading</p>
          <DatePicker format={dateFormatList} />
        </div>

        <div className="btn-wrapper">
          <Button type="primary" size="medium">
            Save Changes
          </Button>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
