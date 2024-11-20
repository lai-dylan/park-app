import {Menu, type MenuProps} from "antd";
import React, {useEffect, useState} from "react";
import {getMenu} from "@/api/user.ts";
import iconMap from "@/components/xMenu/iconList.tsx";

type MenuItem = Required<MenuProps>["items"][number];

interface MenuBackend {
  label: React.ReactNode,
  key: React.Key,
  icon?: string | null,
  children?: MenuBackend[],
}

const defaultSelectedKeys = ["/dashboard"];
const defaultOpenKeys = ["/users"];

const XMenu: React.FC = () => {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);

  const handleMenuBackend = (items: MenuBackend[]): MenuItem[] => {
    return items.map(({key, label, icon, children}) => ({
      key,
      label,
      icon: icon ? iconMap[icon] : null,
      children: children ? handleMenuBackend(children) : undefined,
    }));
  };

  const initMenu = async () => {
    const result = await getMenu();
    const transformedMenuItems = handleMenuBackend(result.data);
    setMenuData(transformedMenuItems);
  };

  useEffect(() => {
    initMenu();
  }, []);

  return <Menu
    theme="light"
    defaultSelectedKeys={defaultSelectedKeys}
    defaultOpenKeys={defaultOpenKeys}
    mode="inline"
    items={menuData}
  />;
};

export default XMenu;