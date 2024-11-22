import React from "react";
import {Breadcrumb} from "antd";
import {UserOutlined, HomeOutlined} from "@ant-design/icons";
import useSystemStore from "@/store/systemStore.tsx";
import {MenuBackend} from "@/components/xMenu";
import {useLocation} from "react-router-dom";

const items = [
  {
    href: "",
    title: <HomeOutlined/>,
  },
  {
    href: "",
    title: (
      <>
        <UserOutlined/>
        <span>Application List</span>
      </>
    ),
  },
  {
    title: "Application",
  },
];

interface Item {
  href: React.Key;
  title: React.ReactNode;
}

const _buildItems = (menuList: MenuBackend[], result: Item[]) => {
  console.log(menuList);

  menuList.forEach((menu: MenuBackend) => {
    const hasChildren = menu.children !== undefined && menu.children !== null;

    result.push({
      href: menu.key,
      title: menu.label
    });

    if (hasChildren) {
      _buildItems(menu.children || [], result);
    }

  });
};

const buildItems = (menuList: MenuBackend[]): Item[] => {
  const result: Item[] = [];
  _buildItems(menuList, result);
  return result;
};

const XBreadcrumb: React.FC = () => {

  const {pathname} = useLocation();
  const prefix = "/" + pathname.split("/")[1];

  const menuList = useSystemStore((state) => state.menuList);
  const filteredList = menuList.filter((item: MenuBackend) => (item.key as string).startsWith(prefix));

  const items = buildItems(filteredList);


  return <Breadcrumb items={items as any} style={{margin: "16px 0"}}/>;
};

export default XBreadcrumb;