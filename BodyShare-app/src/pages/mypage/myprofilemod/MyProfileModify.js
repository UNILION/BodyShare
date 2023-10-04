import styled from "styled-components";
import backButton from "assets/Img/back.png";
import { useNavigate } from "react-router-dom";
import Button from "components/commons/Button";
import Image5 from "assets/Img/right.png";
import CateMod from "pages/mypage/myprofilemod/CateMod";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { userSelector } from "recoil/userRecoil";
import { interestSelector } from "recoil/userRecoil";
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
  const interest = useRecoilValue(interestSelector);
  const [list, setList] = useState(interest);
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

  const { control, handleSubmit, formState: { errors }, register, getValues } = useForm({ mode: "onChange" })

  const onSubmit = async (data) => {
    // FormData 생성 및 데이터 추가
    const formData = new FormData();
    if (data.profileImg[0]) {
      formData.append('profileImg', data.profileImg[0]);
    }
    if (data.bannerImg[0]){
      formData.append('bannerImg', data.bannerImg[0]);
    }
    formData.append('nickname', data.nickname);
    formData.append('password', data.afterpassword);
    formData.append('height', data.height);
    formData.append('weight', data.weight);

    try {
      // 사용자가 입력한 정보를 서버로 전송합니다.
      const response = await instance.put(`/users/useredit/${userNo}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // 업데이트가 성공하면 사용자를 리디렉션하거나 성공 메시지를 표시할 수 있습니다.
      if (response.status === 200) {
        navigate("/mypage"); // 성공적으로 업데이트된 경우 메인 페이지로 이동
      } else {
        console.error("업데이트 실패");
      }
    } catch (error) {
      console.error(error);
    }

    // 유저 관심사 정보 전부 삭제
    try{
      await instance.delete(`/users/interestdel/${userNo}`);
    }catch(error){
      console.error(error);
    }

    // 관심사 정보 모두 등록
    for(let i=0; i<list.length; i++){
      const data = {
        userNo,
        sportsNo: list[i].no
      }
      try{
        await instance.post("/users/interestadd", data )
      }catch(error){
        console.error(error);
      }
    }
  };

  // console.log(interest);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {profileInfo && (
          <All>
            {/* {interest.map(item => {
              return <input {...register('sportsNo')}
                type="hidden"
                value={item.no}
              />;
            })} */}
          

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
              <Weight weight={profileInfo.weight} register={register} errors={errors} />
            </BodyDiv>
            <CateMod usersList={list} interest={interest} />
            <Button
              name="수정완료"
              img={Image5}
              type="submit"
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