import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";

const HomeAvatar = ({ date, userName, points }) => {
  return (
    <div className="avatar-wrapper">
      <div className="avatar-text-wrapper">
        <p>{date}</p>
        <h5>👋 Hello</h5>
        <h3>{userName}</h3>
      </div>
      <div className="avatar-n-points-wrapper">
        <Badge dot>
          <Avatar shape="circle" icon={<UserOutlined />} />
        </Badge>
        <div className="points-display">
          {points}
          <p> points</p>
          <img className="gold-coin" alt="points-coin" />
        </div>
      </div>
    </div>
  );
};

export default HomeAvatar;
