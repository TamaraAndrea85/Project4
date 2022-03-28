const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const dbConnect = require("./config/db/connection");
const userRoutes = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middleware/error/errorHandler");
const postRoute = require("./routes/posts/postRoute");
const commentRoutes = require("./routes/comments/commentRoutes");
const emailMsgRoute = require("./routes/emailMsg/emailMsgRoute");
const categoryRoute = require("./routes/category/categoryRoute");

const app = express();
//DB
dbConnect();

//Middleware
app.use(express.json());
//cors
app.use(cors());

//Users route
app.use("/api/users", userRoutes);
//Post route
app.use("/api/posts", postRoute);
//comment routes
app.use("/api/comments", commentRoutes);
//email
app.use("/api/email", emailMsgRoute);
//category route
app.use("/api/category", categoryRoute);
//err handler
app.use(notFound);
app.use(errorHandler);

//server
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server is running ${PORT}`));

//
