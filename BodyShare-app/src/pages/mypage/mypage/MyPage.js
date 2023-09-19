import styled from "styled-components";
import bannerPic from "assets/Img/banner.jpg";
import { useNavigate } from "react-router-dom";
import Button from "components/commons/Button";
import Image5 from "assets/Img/right.png";
import Icon from "pages/mypage/mypage/Icon";
import InfoCard from "pages/mypage/mypage/InfoCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/api';

const Banner = styled.img`
    height: 87px;
    width: 390px;
`;

const Title = styled.p`
    margin-top: 8px;
    margin-left: 5px;
    height: 45px;
    font-size: 23px;
`;

const Buttons = styled.ul`
  margin-top: 20px;
  margin-left: 170px;
`;

const MyPage = function () {
  const navigate = useNavigate();

  const [profileInfo, setProfileInfo] = useState({
    id: "아이디",
    nickname: "닉네임",
    height: "165",
    weight: "50"
  });

  useEffect(() => {
    const apiUrl = "/users/user/:no"; // 유저 번호에 맞게 엔드포인트 수정

    axios
      .get(apiUrl)
      .then((response) => {
        const userDataFromApi = response.data; // API 응답의 구조에 따라 수정
        setProfileInfo(userDataFromApi);
      })
      .catch((error) => {
        console.error("API 요청 중 오류 발생:", error);
      });
  }, []);


  return (
    <>
      <Banner src={bannerPic} />
      <Title>마이페이지</Title>
      <Icon
        id={profileInfo.id}
      />
      <InfoCard
        id={profileInfo.id}
        nickname={profileInfo.nickname}
        height={profileInfo.height}
        weight={profileInfo.weight}
      />
      <Buttons>
        <Button
          name="프로필 수정"
          img={Image5}
          onClick={() => navigate("/mypage/modify")}
          mb="5px"
        />
        <Button
          name="로그아웃"
          img={Image5}
          onClick={() => navigate("/mypage/logout")}
        />
      </Buttons>
    </>
  );
};

export default MyPage;