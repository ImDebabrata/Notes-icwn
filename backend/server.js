const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./config/db");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to the Note app server");
});

app.listen(PORT, async () => {
  try {
    await connection;
    // console.log(connection);
    console.log("Connecting to DB successfully");
  } catch (err) {
    console.log(err);
    console.log("Error while connecting to DB");
  }
  console.log(`listening on port ${PORT}`);
});
