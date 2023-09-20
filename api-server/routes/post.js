var express = require('express');
var router = express.Router();

const post = require("../models/postModel");
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({ // 저장한공간 정보 : 하드디스크에 저장
      destination(req, file, done) { // 저장 위치
          done(null, 'imgaes/posts/'); // uploads라는 폴더 안에 저장
      },
      filename(req, file, done) { // 파일명을 어떤 이름으로 올릴지
          const postNo = req.body.postNo;
          const fieldname = file.fieldname;
          const ext = path.extname(file.originalname); // 파일의 확장자
          done(null, `${postNo}_c_${ext}`); // 게시물 번호 + content + 확장자 이름으로 저장
      }
  }),
  limits: { fileSize: 5 * 1024 * 1024 } // 5메가로 용량 제한
});

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
router.post("/postadd", upload.single("contentImg"), async (req, res, next) => {
  try{
    if(req.file){
      req.body.contentImageUrl = req.file.filename;
    }

    const id = await post.create(req.body);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 게시물 수정
router.put("/postedit/:no", upload.single("contentImg"), async (req, res, next) => {
  try{
    if(req.file){
      req.body.contentImageUrl = req.file.filename;
    }

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
