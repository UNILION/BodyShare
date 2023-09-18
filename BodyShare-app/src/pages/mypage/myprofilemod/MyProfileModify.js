import styled from "styled-components";
import backButton from "assets/Img/back.png"
import { useNavigate } from "react-router-dom";
import Button from "components/commons/Button"
import Image5 from "assets/Img/right.png"
import Pic from "pages/mypage/myprofilemod/Pic"
import ProfileMod from "pages/mypage/myprofilemod/ProfileMod"
import CateMod from "pages/mypage/myprofilemod/CateMod";

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
  return (
    <>
      <All>
        <Titleul>
          <Backbutton onClick={() => { navigate("/mypage") }}></Backbutton>
          <Title>나의 정보 수정</Title>
        </Titleul>
        <br />
        <Pic />
        <ProfileMod />
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
  )
};

export default MyProfileModify;