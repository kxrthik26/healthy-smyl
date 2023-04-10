import ReturnButton from "../../components/buttons/ReturnButton";
import SettingButton from "../../components/buttons/SettingButton";
import Modal from "antd/es/modal/Modal";
import { useState } from "react";

function Settings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Profile"} />
        <div className="page-headline">
          <h1>Settings</h1>
        </div>

        <div className="flex-col">
          <SettingButton
            settingLabel={"Language"}
            settingIcon={"language-icon"}
          />
          <SettingButton
            settingLabel={"Add Loved Ones Details"}
            settingIcon={"loved-one-icon"}
          />
          <SettingButton
            settingLabel={"Change Password"}
            settingIcon={"lock-icon"}
          />

          <SettingButton
            settingLabel={"Delete Account"}
            settingIcon={"delete-icon"}
            onClick={showModal}
          />
        </div>
      </div>
      <Modal
        title="Are you sure want to delete your account"
        open={isModalOpen}
        onOk={handleOk}
        okText="Delete"
        okType="danger"
        onCancel={handleCancel}
        centered
      >
        <p style={{ marginBlock: "1rem" }}>
          All your progress will be erased and will not be retrievable.
        </p>
      </Modal>
    </>
  );
}

export default Settings;
