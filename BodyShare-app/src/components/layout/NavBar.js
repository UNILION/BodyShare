import styled from "styled-components";
import home from "../../assets/Img/nav1.png"
import home_selected from "../../assets/Img/nav2.png"
import analysis from "../../assets/Img/nav3.png"
import analysis_selected from "../../assets/Img/nav4.png"
import community from "../../assets/Img/nav5.png"
import community_selected from "../../assets/Img/nav6.png"
import mypage from "../../assets/Img/nav7.png"
import mypage_selected from "../../assets/Img/nav8.png"

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    position:relative;
    background-color: white;
    height: 60px;

    &:after {
    content:'';
    position:absolute;
    width:100%;
    height:5px;
    background:linear-gradient(to left,  #FF798E, #556FFF);
    top:-5px;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }
  
  
  @keyframes animatedgradient {
      0% {
          background-position: 0% 50%;
      }
      50% {
          background-position: 100% 50%;
      }
      100% {
          background-position: 0% 50%;
      }
    }
`

const Nav1 = styled.img`
    margin: auto;
    width: 30%;
`
const Nav2 = styled.img`
    margin: auto;
    width: 30%;

`
const Nav3 = styled.img`
    margin: auto;
    width: 30%;

`
const Nav4 = styled.img`
    margin: auto;
    width: 30%;
`

const NavBar = function() {
    return (
        <Container>
        <Nav1 src={home}/>
        <Nav2 src={analysis}/>
        <Nav3 src={community}/>
        <Nav4 src={mypage}/>
        </Container>
    )
};

export default NavBar; 