import { Radio } from "antd";

const PaymentMethodOption = ({ paymentIcon, paymentMethod, value }) => {
  return (
    <div className="payment-mthd-wrapper">
      <img className={paymentIcon} alt={paymentIcon} />
      <p>{paymentMethod}</p>
      <Radio value={value} />
    </div>
  );
};

export default PaymentMethodOption;
