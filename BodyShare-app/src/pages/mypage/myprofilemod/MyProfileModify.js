import styled from "styled-components";
import backButton from "assets/Img/back.png";
import { useNavigate } from "react-router-dom";
import Button from "components/commons/Button";
import Image5 from "assets/Img/right.png";
import ProfileMod from "pages/mypage/myprofilemod/ProfileMod";
import CateMod from "pages/mypage/myprofilemod/CateMod";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from "recoil";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

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
  font-weight: 600;
`;

const MyProfileModify = function () {
  const navigate = useNavigate();

  const userNo = useRecoilValue(userSelector); // userNo를 Recoil 상태인 userSelector로부터 가져옴

  const [profileInfo, setProfileInfo] = useState();

  const loadUser = async function () {
    try {
      const response = await instance.get(`/users/user/${userNo}`);
      const userDataFromApi = response.data;
      setProfileInfo(userDataFromApi);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const hidePassword = (password) => {
    // 비밀번호 문자열의 첫 번째 문자를 제외한 나머지를 '*'로 대체
    return password.charAt(0) + '*'.repeat(password.length - 1);
  };

  return (
    <>
      {profileInfo && (
        <All>
          <Titleul>
            <Backbutton onClick={() => { navigate("/mypage") }}></Backbutton>
            <Title>나의 정보 수정</Title>
          </Titleul>
          <br />
          <ProfileMod 
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
            mt="10px"
            ml="170px"
          />
        </All>
      )}
    </>
  );
};

export default MyProfileModify;