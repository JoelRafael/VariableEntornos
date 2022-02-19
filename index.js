"use strict";
const express = require("express"),
  app = express();
require("dotenv").config();
require("./connection");
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
});
