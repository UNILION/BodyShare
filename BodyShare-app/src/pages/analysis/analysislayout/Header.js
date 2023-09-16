import styled from "styled-components";
import logo from "../../../assets/Img/logo.png"

const Container = styled.div`
  position:relative;
  background-color: white;
  padding-top: 20px;
  margin-bottom: 5px;

  &:before {
    content:'';
    position:absolute;
    width:100%;
    height:5px;
    background:linear-gradient(to right,  #FF798E, #556FFF);
    bottom:-5px;
  }
`

const Logo = styled.img`
  background: white;
  width: 50%;
  display: grid;
  margin: 0 auto;
`

const Header = function () {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  )
};

export default Header; 