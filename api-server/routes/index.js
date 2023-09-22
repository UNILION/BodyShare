var express = require('express');
var router = express.Router({mergeParams: true});

const userRouter = require("./users");
const commuRouter = require("./community");
const sportsRouter = require("./sports");
const foodRouter = require("./food");
const recordRouter = require("./record");
const postRouter = require("./post");
const commentRouter = require("./comment");
const checkLogin = require("../middlewares/checkLogin");

router.use("/users", userRouter);
router.use("/community", checkLogin, commuRouter);
router.use("/sports", sportsRouter);
router.use("/food", checkLogin, foodRouter);
router.use("/record", checkLogin, recordRouter);
router.use("/post", checkLogin, postRouter);
router.use("/comment", checkLogin, commentRouter);

module.exports = router;