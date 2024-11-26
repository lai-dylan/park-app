import React from "react";
import {DownOutlined, LogoutOutlined, UserOutlined} from "@ant-design/icons";
import {Dropdown, MenuProps, message, Space} from "antd";
import useUserStore from "@/store/userStore.tsx";


const items: MenuProps["items"] = [
  {
    key: "profile",
    label: (
      <a target="_blank">
        个人中心
      </a>
    ),
    icon: <UserOutlined/>,
  },
  {
    key: "logout",
    danger: true,
    label: "退出",
    icon: <LogoutOutlined/>,
  },
];

const onClick = ({key}: any) => {
  if (key === "logout") {
    message.success("退出成功", 1).then(() => {
      localStorage.clear();
      location.reload();
    });
  }

  if (key === "profile") {
    console.log("profile");
  }
};

const XHeader: React.FC = () => {
  const username = useUserStore(state => state.userInfo.username);

  return <div style={{paddingRight: "20px", textAlign: "right"}}>
    <Dropdown menu={{items, onClick}}>
      <a onClick={(e) => {
        e.preventDefault();
        console.log(e.target);
      }}>
        <Space>
          {username}
          <DownOutlined/>
        </Space>
      </a>
    </Dropdown>
  </div>;
};

export default XHeader;