const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./config/db/connection");
const userRoutes = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middleware/error/errorHandler");
const postRoute = require("./routes/posts/postRoute");

dbConnect();

//middleware
app.use(express.json());

//user route
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoute);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`server is running on port ${PORT}`));
