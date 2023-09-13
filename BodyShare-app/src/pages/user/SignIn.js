import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.image`
  width: 180px;
  height: 180px;
`;

const Intro = styled.div`

`;

const BP = styled.p`
  font-size: 25px;
`;

const SP = styled.p`
  font-size: 14px;
`;

const Inputdiv = styled.div`
  width: 360px;
  height: 146.47px;
`;

const Input = styled.input`
  width: 360px;
  height: 60.75px;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0 0 0 1px #878787;
  opacity: 0.3;
  color: black;
  font-size: 16px;

`;

const Login = styled.button`

`;

const SignIn = function () {
  const login = function(){};

  return (
    <>
      <Logo></Logo>

      <Intro>
        <BP>안녕하세요.</BP>
        <BP><b>BODY SHARE</b> 입니다.</BP>
        <SP>회원 서비스 이용을 위해 로그인 해주세요.</SP>
      </Intro>

      <Inputdiv>
        <Input type="text" placeholder="아이디"/>
        <br></br>
        <br></br>
        <Input type="password" placeholder="비밀번호"/>
      </Inputdiv>

      <br></br>
      <Link to="/signup">회원 가입</Link>
      <br></br>

      <Login onClick={login}>로그인</Login>

    </>
  );
};

export default SignIn;