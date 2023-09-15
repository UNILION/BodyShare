import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import loginlogo from "../../assets/Img/loginlogo.png"

const Container = styled.div`
  width: 390px;
  height: 696px;
`;

const Logo = styled.img`
  display: block;
  width: 180px;
  height: 180px;
  margin: 15px auto;
`;

const Intro = styled.div`
  display: block;
  width: 390px;
  text-align: center;
  margin-bottom: 25px;
`;

const BP = styled.p`
  font-size: 25px;
  margin: 0 auto;
`;

const B = styled.b`
  font-weight: bold;
`;

const SP = styled.p`
  font-size: 14px;
  margin-top: 25px;
`;

const Inputdiv = styled.div`
  width: 360px;
  height: 146.47px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 340px;
  height: 60.75px;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 16px;
  padding-left: 15px;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 355px;
  color: black;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  margin: 0 auto;
  text-decoration: underline;
`;

const Logindiv = styled.div`
  width: 390px;
  height: 60px;
  margin: 0 auto;
  text-align: center;
`;

const Login = styled.button`
  background-color: #556fff;
  width: 355px;
  height: 60px;
  border-radius: 15px;
  color: white;
  font-size: 20px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  
  &:hover {
    cursor: pointer;
  }
`;

const SignIn = function () {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src={loginlogo}></Logo>

      <Intro>
        <BP>안녕하세요.</BP>
        <BP><B>BODY SHARE</B> 입니다.</BP>
        <SP>회원 서비스 이용을 위해 로그인 해주세요.</SP>
      </Intro>

      <Inputdiv>
        <Input type="text" placeholder="아이디"/>
        <br></br>
        <br></br>
        <Input type="password" placeholder="비밀번호"/>
      </Inputdiv>

      <br></br>
      <StyledLink to="/signup">회원 가입</StyledLink>
      <br></br>
      <br></br>
      <Logindiv>
        <Login onClick={() => navigate("/home")}>로그인</Login>
      </Logindiv>
    </Container>
  );
};

export default SignIn;