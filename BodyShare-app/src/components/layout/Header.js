import styled from "styled-components";
import logo from "../../assets/Img/logo.png"
import React, { useState } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "recoil/themeRecoil";

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

const Dark = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`

const Header = function () {
  const dark = useRecoilValue(isDarkAtom)
  const [checkDark, setCheckDark] = useState(dark);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDark = (checked) => {
    setDarkAtom((prev) => !prev);
    setCheckDark(checked)
  }
  return (
    <Container>
      <Logo src={logo} />
      <Dark>
      <DarkModeSwitch
        checked={checkDark}
        onChange={toggleDark}
        size={50}
        sunColor='red'
        moonColor='royalblue'
        />
        </Dark>
    </Container>
  )
};

export default Header; 