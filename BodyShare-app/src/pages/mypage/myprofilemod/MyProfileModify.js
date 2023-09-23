import styled from "styled-components";
import backButton from "assets/Img/back.png";
import { useNavigate } from "react-router-dom";
import Button from "components/commons/Button";
import Image5 from "assets/Img/right.png";
import CateMod from "pages/mypage/myprofilemod/CateMod";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from "recoil";
import Banner from "./Banner";
import Profile from "./Profile";
import Nickname from "./Nickname";
import Password from "./Password";
import AfterPassword from "./AfterPassword";
import Height from "./Height";
import Weight from "./Weight";
import { useForm } from "react-hook-form";

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

const BodyDiv = styled.div`
  margin-top: 7px;
  margin-right: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
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

  const {control, handleSubmit, formState:{errors}, register, getValues} = useForm()
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {profileInfo && (
          <All>
            <Titleul>
              <Backbutton onClick={() => { navigate("/mypage") }}></Backbutton>
              <Title>나의 정보 수정</Title>
            </Titleul>
            <br />
            <Banner register={register} />
            <Profile register={register} />
            <Nickname nickname={profileInfo.nickname} register={register} errors={errors} />
            <Password password={profileInfo.password} register={register} errors={errors} getValues={getValues} />
            <AfterPassword register={register} errors={errors} getValues={getValues} />
            <BodyDiv>
              <Height height={profileInfo.height} register={register} errors={errors} />
              <Weight weight={profileInfo.weight} register={register} errors={errors}/>
            </BodyDiv>
            <CateMod />
            <Button
              name="수정완료"
              img={Image5}
              // onClick={() => navigate("/mypage")}
              mt="10px"
              ml="170px"
            />
          </All>
        )}
      </form>
    </>
  );
};

export default MyProfileModify;