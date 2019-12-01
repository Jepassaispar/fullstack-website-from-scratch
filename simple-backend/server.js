require("dotenv").config();
require("./config/mongo");

const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json());

server.use(cors("*"));

server.get("/", (req, res) => {
  res.send("ok poto");
});

const cohorts = require("./routes/cohorts");
server.use(cohorts);

const students = require("./routes/students");
server.use(students);

server.listen(process.env.PORT, () =>
  console.log("simple-backend started @ http://localhost:" + process.env.PORT)
);
