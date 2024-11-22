import {RouteObject} from "react-router-dom";
import {routeMap} from "@/router/routerMap.tsx";

interface Menu {
  icon: string;
  key: string;
  label: string;
  children?: Menu[] | undefined;
}

export const generateRoutes = (menu: Menu[]): RouteObject[] => {
  return menu.map((route: Menu) => {
    return {
      path: route.key,
      element: routeMap[route.key],
      children: route.children ? generateRoutes(route.children) : undefined
    };
  });
};


