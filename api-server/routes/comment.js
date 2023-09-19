var express = require('express');
var router = express.Router();

const comment = require("../models/commentModel");

// 해당 게시물 댓글 목록 조회(게시물 번호 기준 조회)
router.get("/post/:no", async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const list = await comment.find(no);
    res.json(list);
  }catch(err){
    next(err);
  }
});

// 댓글 등록
router.post("/commentadd", async (req, res, next) => {
  try{
    const id = await comment.create(req.body);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 댓글 수정
router.put("/commentedit/:no", async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const count = await comment.updateComment(no, req.body);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

// 댓글 삭제
router.delete("/commentdel/:no", async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const count = await comment.deleteComment(no);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

module.exports = router;
