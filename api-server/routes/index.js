var express = require('express');
var router = express.Router({mergeParams: true});

const userRouter = require("./users");
const commuRouter = require("./community");

router.use("/users", userRouter);
router.use("/community", commuRouter);

module.exports = router;

