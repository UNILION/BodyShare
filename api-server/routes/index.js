var express = require('express');
var router = express.Router({mergeParams: true});

const userRouter = require("./users");
const commuRouter = require("./community");
const sportsRouter = require("./sports");
const foodRouter = require("./food");

router.use("/users", userRouter);
router.use("/community", commuRouter);
router.use("/sports", sportsRouter);
router.use("/food", foodRouter);


module.exports = router;

