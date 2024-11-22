import Mock from "mockjs";
import {managerMenuList, menuList, userMenuList} from "@/mock/data.ts";

/**
 * 登录接口
 */
Mock.mock("https://www.demo.com/login", "post", (options: any) => {
  const {username, password} = JSON.parse(options.body);

  if (username === "admin" && password === "admin") {
    return {
      code: 200,
      message: "登录成功",
      data: {
        username: "赵铁柱",
        token: "mocktoken123456admin",
        // btnAuth: ["add", "edit", "delete"]
      }
    };
  } else if (username === "manager" && password === "manager") {
    return {
      code: 200,
      message: "登录成功",
      data: {
        username: "manager",
        token: "mocktoken123456manager",
        // btnAuth: ["add", "edit"]
      }
    };
  } else if (username == "user" && password === "user") {
    return {
      code: 200,
      message: "登录成功",
      data: {
        username: "user",
        token: "mocktoken123456user",
        // btnAuth: ["add"]
      }
    };
  } else {
    return {
      code: 401,
      message: "用户名或密码有误",
      data: null
    };
  }
});

/**
 * 菜单接口
 */
Mock.mock("https://www.demo.com/menu", "get", () => {
  const token = "mocktoken123456admin";

  if (token == "mocktoken123456admin") {
    return {
      code: 200,
      message: "请求成功",
      data: menuList
    };
  } else if (token == "mocktoken123456user") {
    return {
      code: 200,
      message: "请求成功",
      data: userMenuList
    };
  } else if (token == "mocktoken123456manager") {
    return {
      code: 200,
      message: "请求成功",
      data: managerMenuList
    };
  } else {
    return {
      code: 200,
      message: "失败",
      data: []
    };
  }
});