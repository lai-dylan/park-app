import {createBrowserRouter, RouteObject} from "react-router-dom";
import React from "react";
import RequireAuth from "@/utils/RequireAuth.tsx";
import Demo from "@/page/demo";

const Home = React.lazy(() => import("../page/home"));
const Login = React.lazy(() => import("../page/login"));
const NotFound = React.lazy(() => import("../page/404"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RequireAuth to={"/login"}><Home/></RequireAuth>,
  },
  {
    path: "/login",
    element: <RequireAuth requireLogin={false}><Login/></RequireAuth>
  },
  {
    path: "/demo",
    element: <Demo/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
];

export const router = createBrowserRouter(routes);
