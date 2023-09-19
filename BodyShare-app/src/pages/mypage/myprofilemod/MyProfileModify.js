import styled from "styled-components";
import backButton from "assets/Img/back.png";
import { useNavigate } from "react-router-dom";
import Button from "components/commons/Button";
import Image5 from "assets/Img/right.png";
import ProfileMod from "pages/mypage/myprofilemod/ProfileMod";
import CateMod from "pages/mypage/myprofilemod/CateMod";
import React, { useState } from "react";

const All = styled.div`
  margin-left: 7px;
  margin-right: 3px;
  margin-top: 19px;
`;

const Titleul = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  float: left;
`;

const Backbutton = styled.button`
  width: 20px;
  height: 20px;
  background-image: url(${backButton});
  background-size: cover;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const Title = styled.p`
  margin-left: 5px;
  font-size: 23px;
  font-style: bold;
`;

const MyProfileModify = function () {
  const navigate = useNavigate();

  const profileInfo = {
    id: "아이디",
    password:"********",
    nickname: "닉네임",
    height: "167",
    weight: "50"
  };

  return (
    <>
      <All>
        <Titleul>
          <Backbutton onClick={() => { navigate("/mypage") }}></Backbutton>
          <Title>나의 정보 수정</Title>
        </Titleul>
        <br />
        <ProfileMod 
          id={profileInfo.id}
          password={profileInfo.password}
          nickname={profileInfo.nickname}
          height={profileInfo.height}
          weight={profileInfo.weight}
        />
        <CateMod />
        <Button
          name="수정완료"
          img={Image5}
          onClick={() => navigate("/mypage")}
          mt="15px"
          ml="170px"
        />
      </All>
    </>
  );
};

export default MyProfileModify;