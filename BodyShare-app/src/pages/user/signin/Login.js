import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Inputdiv = styled.div`
  grid-row: 3;
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
  grid-row: 4;
  width: 355px;
  color: black;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  margin: 0 auto;
  text-decoration: underline;
`;

const Logindiv = styled.div`
  grid-row: 5;
  width: 390px;
  height: 60px;
  margin: 0 auto;
  text-align: center;
`;

const LoginButton = styled.button`
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

const Login = function () {
  const navigate = useNavigate();

  return (
    <>
      <Inputdiv>
        <Input type="text" placeholder="아이디" />
        <br></br>
        <br></br>
        <Input type="password" placeholder="비밀번호" />
      </Inputdiv>

      <StyledLink to="/signup">회원 가입</StyledLink>

      <Logindiv>
        <LoginButton onClick={() => navigate("/home")}>로그인</LoginButton>
      </Logindiv>
    </>
  );
};

export default Login;