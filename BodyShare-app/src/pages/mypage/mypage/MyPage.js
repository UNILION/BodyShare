import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "components/commons/Button";
import Image5 from "assets/Img/right.png";
import Icon from "pages/mypage/mypage/Icon";
import InfoCard from "pages/mypage/mypage/InfoCard";
import React, { useState, useEffect } from "react";
import useCustomAxios from "components/commons/CustomAxios"
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from 'recoil';

const Banner = styled.img`
    height: 87px;
    width: 390px;
`;

const Title = styled.p`
    margin-top: 8px;
    margin-left: 5px;
    height: 45px;
    font-size: 23px;
    font-weight: 600;
`;

const Buttons = styled.ul`
  margin-top: 20px;
  margin-left: 170px;
`;

const MyPage = function () {
  const instance = useCustomAxios();
  const navigate = useNavigate();

  const userNo = useRecoilValue(userSelector);

  const [profileInfo, setProfileInfo] = useState();

  const loadUser = async function () {
    try {
      const response = await instance.get(`/users/user/${userNo}`);
      const userDataFromApi = response.data; // API 응답의 구조에 따라 수정
      setProfileInfo(userDataFromApi);
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      {profileInfo && (
        <>
          <Banner src={`http://localhost:33000/images/users/${profileInfo.bannerImageUrl}`} />
          <Title>마이페이지</Title>
          <Icon
            id={profileInfo.userId}
            url={profileInfo.profileImageUrl}
          />
          <InfoCard
            id={profileInfo.userId}
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
      )}
    </>
  );
};

export default MyPage;