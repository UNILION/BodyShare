var express = require('express');
var router = express.Router();

const community = require("../models/commuModel");
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({ // 저장한공간 정보 : 하드디스크에 저장
      destination(req, file, done) { // 저장 위치
          done(null, 'imgaes/communitys/'); // uploads라는 폴더 안에 저장
      },
      filename(req, file, done) { // 파일명을 어떤 이름으로 올릴지
          const commuNo = req.body.communityNo;
          const fieldname = file.fieldname;
          const ext = path.extname(file.originalname); // 파일의 확장자
          if(fieldname == "profileImg"){
            done(null, `${commuNo}_p_${ext}`); // 커뮤니티 번호 + 프로필or배너 + 확장자 이름으로 저장
          }
          else if(fieldname == "bannerImg"){
            done(null, `${commuNo}_b_${ext}`); // 커뮤니티 번호 + 프로필or배너 + 확장자 이름으로 저장
          }
      }
  }),
  limits: { fileSize: 5 * 1024 * 1024 } // 5메가로 용량 제한
});

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
router.post("/commuadd", upload.fields([{name:"profileImg"}, {name:"bannerImg"}]), async (req, res, next) => {
  try{
    // 프로필 이미지와 배너 이미지 가져오기
    const profileImages = req.files["profileImg"];
    const bannerImages = req.files["bannerImg"];

    // 파일이 업로드되었을 때만 처리
    if (profileImages) {
      req.body.profileImageUrl = profileImages[0].filename;
    }

    if (bannerImages) {
      req.body.bannerImageUrl = bannerImages[0].filename;
    }
    const id = await community.create(req.body);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 커뮤니티 가입자 목록 조회
router.get("/commuusers/:no", async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const list = await community.findByNoUsers(no);
    res.json(list);
  }catch(err){
    next(err);
  }
});


module.exports = router;
