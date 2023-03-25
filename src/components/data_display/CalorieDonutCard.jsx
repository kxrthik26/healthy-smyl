import { Progress } from "antd";

const CalorieDonutCard = ({ nutritionType, statValue, sub, sup }) => {
  return (
    <div className="cal-donut-card">
      <Progress type="circle" percent={75} format={() => ""} />
      <div cal-info-wrapper>
        <h1>
          {statValue} <span className="sub">{sub}</span>
          <span className="sup">{sup}</span>
        </h1>
        <p>{nutritionType}</p>
      </div>
    </div>
  );
};

export default CalorieDonutCard;
