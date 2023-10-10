const checkLogin = function (req, res, next) {
  console.log(req.session.userNo);
  if (req.session.userNo) {
    next();
  } else {
    // 로그인 필요함을 나타내는 응답
    res.status(401).json({ message: '로그인이 필요합니다.' });
  }
};

module.exports = checkLogin;