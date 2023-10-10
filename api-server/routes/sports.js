var express = require('express');
var router = express.Router();

const sports = require("../models/sportsModel");

// 운동 목록 조회
router.get("/", async (req, res, next) => {
  try {
    const list = await sports.find();
    res.json(list);
  } catch (err) {
    next(err);
  }
});

module.exports = router;