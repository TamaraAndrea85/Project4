const express = require("express");
const { createPostCtrl } = require("../../controllers/post/postCtrl");
const authMiddleware = require("../../middleware/auth/authMiddleware");

const postRoute = express.Router();

postRoute.post("/", authMiddleware, createPostCtrl);

module.exports = postRoute;
