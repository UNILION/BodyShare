import styled from "styled-components";
import loginlogo from "assets/Img/loginlogo.png"
import Intro from "pages/user/signin/Intro";
import Login from "pages/user/signin/Login";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  width: 390px;
  height: 696px;
`;

const Logo = styled.img`
  grid-row: 1;
  width: 180px;
  height: 180px;
  margin: 15px auto auto auto;
`;

const SignIn = function () {

  return (
    <Container>
      <Logo src={loginlogo}></Logo>

      <Intro />

      <Login />

    </Container>
  );
};

export default SignIn;