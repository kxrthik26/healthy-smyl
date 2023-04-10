import { Input, Select, Button, TimePicker } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";

function CardDetails() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Schedule Appointment"} />
        <div className="page-headline">
          <h1>Card Details</h1>
        </div>

        <div className="input-wrapper">
          <p>Name on Card</p>
          <Input placeholder="eg: J WANDERVORT" allowClear />
        </div>

        <div className="input-wrapper">
          <p>Card Number</p>
          <Input placeholder="XXXX XXXX XXXX XXXX" allowClear />
        </div>

        <div className="input-wrapper">
          <p>Expiry Date</p>
          <Input placeholder="MM/YY" allowClear />
        </div>

        <div className="input-wrapper">
          <p>CVV</p>
          <Input placeholder="XXX" allowClear />
        </div>

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

export default CardDetails;
