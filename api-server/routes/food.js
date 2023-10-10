var express = require('express');
var router = express.Router();

const food = require("../models/foodModel");

// 음식 목록 조회
router.get("/", async (req, res, next) => {
  try {
    const list = await food.find();
    res.json(list);
  } catch (err) {
    next(err);
  }
});

module.exports = router;