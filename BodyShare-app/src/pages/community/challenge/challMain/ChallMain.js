import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Card from "components/commons/Card";
import Image1 from "assets/Img/Climing1.jpg";
import Image2 from "assets/Img/Climing2.jpg";
import Image3 from "assets/Img/Climing3.jpg";
import Image4 from "assets/Img/Climing4.jpg";
import { useState } from "react";
import Search from "assets/Img/buttonsearch.png"
import Plus from "assets/Img/buttonplus.png"

const Top = styled.ul`
display: grid;
grid-template-columns: 2fr 1fr;
margin: 20px 0 15px 0;
`

const Title = styled.p`
margin-top: 18px;
margin-left: 5px;
font-size: 20px;
font-weight: bold;
`

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
  max-height: 500px; /* 스크롤 가능한 최대 높이 설정 */
  overflow-y: auto;
`;

const Img = styled.img`
  display: grid;
  align-items: end;
  margin-left: auto;
  width: 50px;
  height: 50px;
  cursor: pointer;
`

const ChallMain = function () {
  const navigate = useNavigate();

  return (
    <>
      <Top>
        <Title>챌린지</Title>
      <Img src={Search} onClick={() => navigate("/community/challenge/challSearch")} />
      </Top>
      
      <Group>
        <Card
          img={Image1}
          title="클라이밍 좋아하는 모임"
          contents="클라이밍 좋아하는 사람들 모두 모두 모여라"
          tagtitle="클라이밍"
          footer="956명의 회원이 가입함"
          onClick={() => navigate("/community/challenge/challIn/1")}
        />
        <Card
          img={Image2}
          title="대전 클라이밍"
          contents="대전에서 클라이밍 하실 분?"
          tagtitle="클라이밍"
          footer="543명의 회원이 가입함"
          onClick={() => navigate("/community/commuIn/1")}
        />

        <Card
          img={Image3}
          title="수도권 클라이밍 모임"
          contents="수도권 사람들만 오세요:)"
          tagtitle="클라이밍"
          footer="321명의 회원이 가입함"
          onClick={() => navigate("/community/commuIn/1")}
        />
        <Card
          img={Image4}
          title="클라이밍 초보들만"
          contents="클라이밍에 재미를 붙이셨네요 :)"
          tagtitle="클라이밍"
          footer="123명의 회원이 가입함"
          onClick={() => navigate("/community/commuIn/1")}
        />
      </Group>
      <Img src={Plus} onClick={() => navigate("/community/challenge/challAdd")} />
    </>
  );
};

export default ChallMain;
