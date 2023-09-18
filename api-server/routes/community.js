var express = require('express');
var router = express.Router();

const community = require("../models/commuModel");

// 커뮤니티 목록 조회
router.get("/", async (req, res, next) => {
  try{
    const list = await community.find();
    res.json(list);
  }catch(err){
    next(err);
  }
});

// 커뮤니티 상세 조회
router.get("/:no", async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const result = await community.findByNo(no);
    res.json(result);
  }catch(err){
    next(err);
  }
});

// 커뮤니티 생성
router.post("/commuadd", async (req, res, next) => {
  try{
    const id = await community.create(req.body);
    res.json({ id });
  }catch(err){
    next(err);
  }
});



module.exports = router;
