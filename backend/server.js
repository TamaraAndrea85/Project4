const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./config/db/connection");

dbConnect();

app.listen(PORT, console.log(`server is running on port ${PORT}`));
