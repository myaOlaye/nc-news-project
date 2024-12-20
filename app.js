const express = require("express");
const apiRouter = require("./routes/api-router");
const {
  customErrorHandler,
  postgressErrorHandler,
  invalidUrlErrorHandler,
} = require("./controllers/error-controllers");

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.all("*", invalidUrlErrorHandler);

app.use(customErrorHandler);

app.use(postgressErrorHandler);

module.exports = app;
