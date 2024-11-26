import React from "react";
import {Breadcrumb} from "antd";
import useSystemStore from "@/store/systemStore.tsx";
import {MenuBackend} from "@/components/xMenu";
import {useLocation} from "react-router-dom";
import {buildPathArray} from "@/utils/stringHelper.ts";

interface Item {
  href: React.Key;
  title: React.ReactNode;
}

const _buildItems = (menuList: MenuBackend[], result: Item[]) => {
  menuList.forEach((menu: MenuBackend) => {
    result.push({
      href: menu.key,
      title: menu.label
    });

    if (menu.children) {
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
  const pathArr = buildPathArray(pathname);

  const filteredList = useSystemStore((state) => state.menuList)
    .filter((item: MenuBackend) => (item.key as string).startsWith(pathArr[0]));
  const items = buildItems(filteredList).filter(item => pathArr.includes(item.href as string));

  return <Breadcrumb items={items as any} style={{margin: "16px 0"}}/>;
};

export default XBreadcrumb;