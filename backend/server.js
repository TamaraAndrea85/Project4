const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./config/db/connection");
const userRoutes = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middleware/error/errorHandler");
const postRoute = require("./routes/posts/postRoute");

const app = express();
//DB
dbConnect();

//Middleware
app.use(express.json());

//Users route
app.use("/api/users", userRoutes);
//Post route
app.use("/api/posts", postRoute);
//err handler
app.use(notFound);
app.use(errorHandler);

//server
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server is running ${PORT}`));

//
