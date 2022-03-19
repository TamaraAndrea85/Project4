const User = require("../../model/user/user");
//Register
const userRegisterCtrl = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      password: req?.body?.password,
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};
//Login
// app.post("/api/users/login", (req, res) => {
//   res.json({ user: "User Logged in" });
// });

// //fetch all users
// app.get("/api/users", (req, res) => {
//   res.json({ user: "Fetch all users" });
// });

module.exports = { userRegisterCtrl };
