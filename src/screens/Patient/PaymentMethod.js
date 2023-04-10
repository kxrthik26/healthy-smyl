import { Input, Select, Button, Radio, Checkbox } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";
import React from "react";
import PaymentMethodOption from "../../components/banners/PaymentMethodOption";
import { useState } from "react";

function PaymentMethod() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Schedule Appointment"} />
        <div className="page-headline">
          <h1>Payment Method</h1>
        </div>

        <Radio.Group onChange={onChange} value={value}>
          <div className="flex-col">
            <PaymentMethodOption
              paymentIcon={"visa-icon"}
              paymentMethod={"Visa"}
              value={1}
            />
            <PaymentMethodOption
              paymentIcon={"master-card-icon"}
              paymentMethod={"Mastercard"}
              value={2}
            />
            <PaymentMethodOption
              paymentIcon={"amex-icon"}
              paymentMethod={"American Express"}
              value={3}
            />
            <div className="payment-mthd-wrapper">
              <img className="gold-coin" />
              <div>
                <p>Points</p>
                <p className="note">
                  *Choose another payment methos to deduct the remaining values
                  after redeeming your points
                </p>
              </div>

              <Checkbox />
            </div>
          </div>
        </Radio.Group>

        <div className="btn-wrapper">
          <Button type="primary" size="medium">
            Pay Now
          </Button>
          <Button type="link" size="medium">
            <span style={{ color: "#575757", marginRight: "0.37rem" }}>
              Cancel
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default PaymentMethod;
