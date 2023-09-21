var express = require('express');
var router = express.Router();
const checkLogin = require("../middlewares/checkLogin");

const user = require("../models/userModel");
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({ // 저장한공간 정보 : 하드디스크에 저장
      destination(req, file, done) { // 저장 위치
          done(null, 'imgaes/users/'); // uploads라는 폴더 안에 저장
      },
      filename(req, file, done) { // 파일명을 어떤 이름으로 올릴지
          const userNo = req.body.userNo;
          const fieldname = file.fieldname;
          const ext = path.extname(file.originalname); // 파일의 확장자
          if(fieldname == "profileImg"){
            done(null, `${userNo}_p_${ext}`); // 유저 번호 + 프로필or배너 + 확장자 이름으로 저장
          }
          else if(fieldname == "bannerImg"){
            done(null, `${userNo}_b_${ext}`); // 유저 번호 + 프로필or배너 + 확장자 이름으로 저장
          }
      }
  }),
  limits: { fileSize: 5 * 1024 * 1024 } // 5메가로 용량 제한
});

// 회원 상세 조회
router.get("/user/:no", checkLogin, async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const result = await user.findByNo(no);
    res.json(result);
  }catch(err){
    next(err);
  }
});

// 회원 가입
router.post("/signup", upload.single("profileImg") ,async (req, res, next) => {
  try{
    if(req.file){
      req.body.profileImageUrl = req.file.filename;
    }
    
    const id = await user.create(req.body);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 회원 정보 수정
router.put("/useredit/:no", checkLogin, upload.fields([{name:"profileImg"}, {name:"bannerImg"}]), async (req, res, next) => {
  try{
    const no = Number(req.params.no);
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

    const count = await user.update(no, req.body);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

// 로그인
router.post("/signin", async (req, res, next) => {
  try{
    const result = await user.signin(req.body);

    if (result.length === 1) {
      // 로그인 성공 시, 유저 번호를 세션에 저장
      req.session.userNo = result[0].userNo; // 유저 번호를 가져와서 세션에 저장
      res.json({ login: true, userNo: req.session.userNo });
    }else {
      // 로그인 실패 시, 클라이언트에게 실패 응답 전송
      res.json({ login: false });
    }
  }catch(err){
    next(err);
  }
});

// 회원 관심사 등록
router.post("/interestadd", checkLogin, async (req, res, next) => {
  try{
    const id = await user.createInterest(req.body);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 회원 관심사 수정
router.put("/interestedit/:no", checkLogin, async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const count = await user.updateInterest(no, req.body);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

// 회원 관심사 조회
router.get("/interest/:no", checkLogin, async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const result = await user.findByNoInterest(no);
    res.json(result);
  }catch(err){
    next(err);
  }
});

// 회원 가입한 커뮤니티 조회( 회원 no 기반의 검색 조회)
router.get("/community/:no", checkLogin, async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const result = await user.findByNoUsersCommu(no);
    res.json(result);
  }catch(err){
    next(err);
  }
});

// 회원 가입한 커뮤니티 등록
router.post("/communityadd", checkLogin, async (req, res, next) => {
  try{
    const id = await user.createUsersCommu(req.body);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 회원 가입한 커뮤니티 탈퇴(삭제)
router.delete("/communitydel/:no", checkLogin, async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const count = await user.deleteUsersCommu(no);
    res.json({ count });
  }catch(err){
    next(err);
  }
});


module.exports = router;
