// server.js
const express = require("express");
const app = express();
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(
        ["https://", req.get("Host"), req.url].join(""),
      );
    }
    next();
  };
};
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());
