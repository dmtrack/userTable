require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const sequelize = require("./src/db");
const models = require("./src/models/models");
const cors = require("cors");
const userRouter = require("./src/routes/user.routes");
const errorHandler = require("./src/middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use("/api", userRouter);

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`server started at port:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
