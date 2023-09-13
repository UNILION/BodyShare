import { Link } from "react-router-dom";

const SignIn = function () {
  const login = function(){};
  
  return (
    <>
      <image></image>

      <div>
        <p>안녕하세요.</p>
        <p>BODY SHARE 입니다.</p>
        <p>회원 서비스 이용을 위해 로그인 해주세요.</p>
      </div>

      <div>
        <input type="text" placeholder="아이디"/>
        <input type="password" placeholder="비밀번호"/>
      </div>

      <Link to="/signup">회원 가입</Link>

      <botton onClick={login}>로그인</botton>

    </>
  );
};

export default SignIn;