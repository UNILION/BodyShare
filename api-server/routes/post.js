var express = require('express');
var router = express.Router();

const post = require("../models/postModel");

// 해당 커뮤니티 게시물 목록 조회(커뮤니티 번호 기준 조회)
router.get("/community/:no", async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const list = await post.find(no);
    res.json(list);
  }catch(err){
    next(err);
  }
});

// 게시물 상세 조회
router.get("/:no", async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const result = await post.findByNo(no);
    res.json(result);
  }catch(err){
    next(err);
  }
});

// 게시물 등록
router.post("/postadd", async (req, res, next) => {
  try{
    const id = await post.create(req.body);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 게시물 수정
router.put("/postedit/:no", async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const count = await post.updatePost(no, req.body);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

// 게시물 삭제
router.delete("/postdel/:no", async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const count = await post.deletePost(no);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

module.exports = router;
