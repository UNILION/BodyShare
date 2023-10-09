var express = require('express');
var router = express.Router();
const checkLogin = require("../middlewares/checkLogin");

const user = require("../models/userModel");
const multer = require("multer");
const path = require('path'); // 추가됨

const upload = multer({
  storage: multer.diskStorage({ // 저장한공간 정보 : 하드디스크에 저장
      destination(req, file, done) { // 저장 위치
          done(null, 'public/images/users/'); // 폴더 안에 저장
      },
      filename(req, file, done) { // 파일명을 어떤 이름으로 올릴지
          const fieldname = file.fieldname;
          const ext = path.extname(file.originalname); // 파일의 확장자
          if(fieldname == "profileImg"){
            done(null, `${path.basename(file.originalname, ext)}_${Date.now()}_p_${ext}`); // 파일 이름 + 날짜 + 프로필or배너 + 확장자 이름으로 저장
          }
          else if(fieldname == "bannerImg"){
            done(null, `${path.basename(file.originalname, ext)}_${Date.now()}_b_${ext}`); // 파일 이름 + 날짜 + 프로필or배너 + 확장자 이름으로 저장
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
    const userInfo = {
      nickname: req.body.nickname,
      password: req.body.password,
      height: req.body.height,
      weight: req.body.weight
    };
    
    // 프로필 이미지와 배너 이미지 가져오기
    const profileImages = req.files?.profileImg;
    const bannerImages = req.files?.bannerImg;

    // 파일이 업로드되었을 때만 처리
    if (profileImages) {
      userInfo.profileImageUrl = profileImages[0].filename;
    }

    if (bannerImages) {
      userInfo.bannerImageUrl = bannerImages[0].filename;
    }

    console.log(req.body);

    const count = await user.update(no, userInfo);
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
      console.log(req.session.userNo);
      res.json({ login: true, userNo: req.session.userNo });
    }else {
      // 로그인 실패 시, 클라이언트에게 실패 응답 전송
      res.json({ login: false });
    }
  }catch(err){
    next(err);
  }
});

//로그 아웃
router.get('/logout', checkLogin, (req, res, next) => {
  // 세션 삭제
  req.session.destroy((err) => {
    if (err) {
      console.error('세션 삭제 실패:', err);
      return res.status(500).json({ success: false, message: '세션 삭제 실패' });
    }
    res.status(200).json({ success: true, message: '로그아웃 성공' });
  });
});

// 회원 관심사 등록
router.post("/interestadd", async (req, res, next) => {
  try{
    const id = await user.createInterest(req.body);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 회원 관심사 삭제
router.delete("/interestdel/:no", checkLogin, async (req, res, next) => {
  try{
    const no = Number(req.params.no);
    const count = await user.deleteInterest(no, req.body);
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
router.post("/communityadd/:commuNo/:userNo", checkLogin, async (req, res, next) => {
  try{
    const userNo = Number(req.params.userNo);
    const commuNo = Number(req.params.commuNo);
    const id = await user.createUsersCommu(userNo,commuNo);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 회원 가입한 커뮤니티 탈퇴(삭제)
router.delete("/communitydel/:commuNo/:userNo", checkLogin, async (req, res, next) => {
  try{
    const commuNo = Number(req.params.commuNo);
    const userNo = Number(req.params.userNo);
    const count = await user.deleteUsersCommu(commuNo, userNo);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

// 아이디 중복 확인
router.post("/checkid", async (req, res, next) => {
  try{
    const result = await user.checkId(req.body);

    // 중복 존재
    if (result.length === 1) {
      res.json({ check: true});
    }else {
      // 중복 없음
      res.json({ check: false });
    }
  }catch(err){
    next(err);
  }
});

// 닉네임 중복 확인
router.post("/checknic", async (req, res, next) => {
  try{
    const result = await user.checkNic(req.body);

    // 중복 존재
    if (result.length === 1) {
      res.json({ check: true});
    }else {
      // 중복 없음
      res.json({ check: false });
    }
  }catch(err){
    next(err);
  }
});

// 세션 확인
router.get("/checksession", async (req, res, next) => {
  if(req.session.userNo){
    res.json({check: true})
  } else {
    res.json({check: false})
  }
});

module.exports = router;
