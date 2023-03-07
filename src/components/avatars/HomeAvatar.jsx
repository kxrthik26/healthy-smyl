import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";

const HomeAvatar = ({ date, userName }) => {
  return (
    <div className="avatar-wrapper">
      <div className="avatar-text-wrapper">
        <p>{date}</p>
        <h5>👋 Hello</h5>
        <h3>{userName}</h3>
      </div>
      <Badge dot>
        <Avatar shape="circle" icon={<UserOutlined />} />
      </Badge>
    </div>
  );
};

export default HomeAvatar;
