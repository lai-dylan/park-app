const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/controller/userController");
const testRoutes = require("./src/controller/testController");
const app = express();
const port = process.env.PORT || 3000;

app
  .use(cors())
  .use(express.json())
  .use("/user", userRoutes)
  .use("/test", testRoutes);


app.get("/", (req, res) => {
  res.json({
    code: 200,
    message: "root",
    data: null
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
