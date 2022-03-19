const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const dotenv = require("dotenv");
dotenv.config();
//db
const dbConnect = require("./config/db/connection");
const { userRegisterCtrl } = require("./controllers/users/usersCtrl");
dbConnect();

//middleware
app.use(express.json());
const logger = (req, res, next) => {
  next();
};

//Register
app.post("/api/users/register", userRegisterCtrl);
//Login
app.post("/api/users/login", (req, res) => {
  res.json({ user: "User Logged in" });
});

//fetch all users
app.get("/api/users", (req, res) => {
  res.json({ user: "Fetch all users" });
});

app.listen(PORT, console.log(`server is running on port ${PORT}`));
