const express = require("express");
const {testData} = require("../data/test");

const testRoutes = express.Router();

testRoutes.get("/test", (req, res) => {
  res.status(200).json(testData);
});

module.exports = testRoutes;