import { Input, Checkbox, Button, Modal } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";
import React from "react";
import { useState } from "react";

function MemberSignIn() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const { TextArea } = Input;

  const [modal, contextHolder] = Modal.useModal();
  const countDown = () => {
    let secondsToGo = 5;
    const instance = modal.success({
      title: "Your Request has been Shared!",
      content: `The related party will contact you if your request has been accepted.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: `The related party will contact you if your request has been accepted.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Financial Aid"} />
        <div className="page-headline">
          <h1>Request Aid</h1>
        </div>

        <div className="input-wrapper">
          <p>Explain your situation</p>
          <TextArea
            rows={4}
            maxLength={6}
            placeholder="Hint: Mention why you are requesting for a financial aid. You can mention talk about your health condition, inabilities and financial situation."
          />
        </div>

        <Checkbox onChange={onChange}>
          I give permission to any necessary personal information of mine.
        </Checkbox>

        <div className="btn-wrapper">
          <Button type="primary" size="medium" onClick={countDown}>
            Send Request
          </Button>
          {contextHolder}
        </div>
      </div>
    </>
  );
}

export default MemberSignIn;
