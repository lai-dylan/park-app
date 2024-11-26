const express = require("express");
const {
  adminMenuList,
  userMenuList,
  managerMenuList
} = require("../data/user");

const userRoutes = express.Router();

userRoutes.post("/login", (req, res) => {

  const {username, password} = req.body;

  const adminResult = {
    code: 200,
    message: "登录成功",
    data: {
      username: "Admin",
      token: "mocktoken123456admin",
      // btnAuth: ["add", "edit", "delete"]
    }
  };

  const managerResult = {
    code: 200,
    message: "登录成功",
    data: {
      username: "manager",
      token: "mocktoken123456manager",
      // btnAuth: ["add", "edit"]
    }
  };

  const userResult = {
    code: 200,
    message: "登录成功",
    data: {
      username: "user",
      token: "mocktoken123456user",
      // btnAuth: ["add"]
    }
  };

  const errorResult = {
    code: 401,
    message: "用户名或密码有误",
    data: null
  };

  res.status(200);

  if (username === "admin" && password === "admin") {
    res.json(adminResult);
  }
  if (username === "manager" && password === "manager") {
    res.json(managerResult);
  }
  if (username === "user" && password === "user") {
    res.json(userResult);
    return;
  }
  res.json(errorResult);
});

userRoutes.get("/menus", (req, res) => {

  const token = "mocktoken123456admin"; // 假设这是从请求中获取的 token
  let result;

  const menuMap = {
    "mocktoken123456admin": adminMenuList,
    "mocktoken123456user": userMenuList,
    "mocktoken123456manager": managerMenuList,
  };

  const menuData = menuMap[token] || [];

  result = {
    code: 200,
    message: menuData.length ? "success" : "failed",
    data: menuData,
  };

  res.status(200).json(result);
});

module.exports = userRoutes;