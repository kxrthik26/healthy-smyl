import React from "react";
import { Button } from "antd";

function ConfirmImage() {
  return (
    <>
      <div className="full-view-container">
        <img
          className="meal-img-confirm"
          src={require("../../styles/resources/images/dummy_food_img.png")}
        />

        <div className="contents">
          <div className="btn-wrapper">
            <Button type="primary" size="medium">
              Proceed
            </Button>
            <Button type="link" size="medium">
              Retake
            </Button>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmImage;
