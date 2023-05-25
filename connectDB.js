const mongoose = require("mongoose");

require("dotenv").config();

const uri = 'mongodb+srv://andersontrindade00:86Ulckotf43qjcXf@cluster0.q2pknul.mongodb.net/';
const client = mongoose
  .connect(uri)
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => console.log(err));

module.exports = client;
