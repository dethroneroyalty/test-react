const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const winston = require("winston");

const { setConfig } = require("./utils");
const setRoutes = require("./routes");
const setSession = require("./session");

module.exports = async function init() {
  const app = express();

  setConfig(app, require("config"));

  let logger = new winston.Logger({
    transports: [
      new winston.transports.Console({ level: process.env.LOGLEVEL || "info" })
    ]
  });
  app.set("logger", logger);

  app.use(morgan("dev"));
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  setSession(app);
  setRoutes(app);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  return app;
};
