import {Menu, type MenuProps} from "antd";
import React, {useEffect, useState} from "react";
import {getMenu} from "@/api/user.ts";
import iconMap from "@/components/xMenu/iconList.tsx";
import {useNavigate} from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

export interface MenuBackend {
  label: React.ReactNode,
  key: React.Key,
  icon?: string | null,
  children?: MenuBackend[],
}

const defaultSelectedKeys = ["/dashboard"];
const defaultOpenKeys = ["/users"];

const XMenu: React.FC = () => {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  const handleMenuBackend = (items: MenuBackend[]): MenuItem[] => {
    return items.map(({key, label, icon, children}) => ({
      key,
      label,
      icon: icon ? iconMap[icon] : null,
      children: children ? handleMenuBackend(children) : undefined,
    }));
  };

  const initMenu = async () => {
    // console.log(" await getMenu()");
    const result = await getMenu();
    const transformedMenuItems = handleMenuBackend(result.data);
    setMenuData(transformedMenuItems);
  };

  useEffect(() => {
    initMenu();
  }, []);

  return <Menu
    theme="light"
    onClick={onClick}
    defaultSelectedKeys={defaultSelectedKeys}
    defaultOpenKeys={defaultOpenKeys}
    mode="inline"
    items={menuData}
  />;
};

export default XMenu;