require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// config JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// solve cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// upload directory
app.use("/uploads", express.static(path.join(_dirname, "/uploads")));

// DB config
require("./config/db.js");

// routes
const router = require("./routes/Router")
app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
})