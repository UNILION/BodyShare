var express = require('express');
var router = express.Router();

const user = require("../models/userModel");

// 회원 상세 조회
router.get("/:no", async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const result = await user.findByNo(no);
    res.json(result);
  }catch(err){
    next(err);
  }
});

// 회원 가입
router.post("/signup", async (req, res, next) => {
  try{
    const id = await user.create(req.body);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 회원 정보 수정
router.put("/:no", async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const count = await user.update(no, req.body);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

// 로그인
router.post("/signin", async (req, res, next) => {
  try{
    const ok = await user.signin(req.body);
    res.json({ ok });
  }catch(err){
    next(err);
  }
});

module.exports = router;
