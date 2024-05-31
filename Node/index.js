const express = require("express");
const AuthHandler = require("./Auth/AuthHandler");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());
dotenv.config();
app.use("/auth", AuthHandler);

app.listen(5000, () => {
  console.log("Server is running in port 5000");
});
