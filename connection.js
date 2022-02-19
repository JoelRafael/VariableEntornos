const mongoose = require("mongoose"),
  { mongodb } = require("./config"),
  connection = mongoose
    .connect(
      `mongodb+srv://${mongodb.user}:${mongodb.password}@${mongodb.host}/${mongodb.database}`
    )
    .then(() => {
      console.log("Conexion exitosa");
    })
    .catch((err) => {
      console.log(`Ha ocurrido un error: ${err}`);
    });
module.exports = connection;
