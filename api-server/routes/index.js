var express = require('express');
var router = express.Router({mergeParams: true});

const userRouter = require("./users");
const commuRouter = require("./community");
const sportsRouter = require("./sports");
const foodRouter = require("./food");
const recordRouter = require("./record");
const postRouter = require("./post");
const commentRouter = require("./comment");

router.use("/users", userRouter);
router.use("/community", commuRouter);
router.use("/sports", sportsRouter);
router.use("/food", foodRouter);
router.use("/record", recordRouter);
router.use("/post", postRouter);
router.use("/comment", commentRouter);


module.exports = router;

