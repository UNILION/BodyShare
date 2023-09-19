import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import checkButton from "assets/Img/circletcheck.png";
import ButtonTT from "pages/mypage/newverst/ButtonTT";
import React, { useState } from "react";

const Titleo = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;

const BannerPic = styled.button`
  margin-top: 7px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  border-style: dashed;
  width: 372px;
  height: 60px;
  background-color: #FFFFFF;
  color: #878787;
  font-size: 13px; 
`;

const PicInput = styled.input`
  cursor: pointer;
`

const TitleT = styled.p`
  margin-top: 7px;
  font-size: 18px;
`;

const ProfilePic = styled.button`
  margin-top: 7px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-style: dashed;
  border-radius: 15px;
  width: 372px;
  height: 60px;
  background-color: #FFFFFF;
  color: #878787;
  font-size: 13px;
`;

const Idul = styled.ul`
  margin-top: 7px;
  display: grid;
  grid-template-columns: 60px auto;
`;

const Titlej = styled.div`
  border-radius: 15px 0px 0px 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  width: 60px;
  text-align: center;
  line-height: 45px;
`;

const Titlen = styled.div`
  width: 230px;
  height: 45px;
  color: #808080;
  border-radius: 0px 15px 15px 0px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
  line-height: 45px;
`;

const Nickul = styled.ul`
  display: grid;
  grid-template-columns: 60px auto auto;
  margin-top: 7px;
`;

const Nickdiv = styled.div`
  border-radius: 15px 0px 0px 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  width: 60px;
  text-align: center;
  line-height: 45px;
`;

const Nickname = styled.input`
  width: 230px;
  height: 45px;
  color: #808080;
  border-radius: 0px 15px 15px 0px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
`;

const Nickbutton = styled.button`
  background-image: url(${checkButton});
  background-size: cover;
  margin-top: 7px;
  margin-left: 10px;
  width: 34px;
  height: 34px;
  border-radius: 34px;
  border: none;
  cursor: pointer;
`;

const Nickwarnig = styled.p`
  margin-top: 5px;
  font-size: 11px;
  color: red;
`;

const Pwul = styled.ul`
  margin-top: 7px;
  display: grid;
  grid-template-columns: 60px auto auto;
`;

const BodyDiv = styled.div`
  margin-top: 7px;
  margin-right: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeightDiv = styled.div`
  display: grid;
  grid-template-columns: 60px auto 50px;
  justify-content: center;
  margin-right: 15px;
`;

const BInput = styled.input`
  width: 50px;
  height: 43px;
  color: #808080;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const BodyP = styled.div`
  border-radius: 0px 15px 15px 0px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  width: 50px;
  text-align: center;
  line-height: 45px;
`;

const WeigthDiv = styled.div`
  display: grid;
  grid-template-columns: 60px auto 50px;
  justify-content: center;
  margin-right: 20px;
`;

const ProfileMod = function ({ id, password, nickname, height, weight }) {
  const navigate = useNavigate();

  const [heightInput, setHeightInput] = useState(height);
  const [weightInput, setWeightInput] = useState(weight);

  const handleHeightChange = (event) => {
    // 숫자와 3자리까지만 입력되도록 정규 표현식 검사
    const value = event.target.value.replace(/\D/g, "").slice(0, 3);
    setHeightInput(value);
  };

  const handleWeightChange = (event) => {
    // 숫자와 3자리까지만 입력되도록 정규 표현식 검사
    const value = event.target.value.replace(/\D/g, "").slice(0, 3);
    setWeightInput(value);
  };

  return (
    <>
      <Titleo>배너사진</Titleo>
      <BannerPic>
        <PicInput type="file"
          accept="image/gif, image/jpeg, image/png, image/jpg">
        </PicInput>
      </BannerPic>
      <TitleT>프로필 사진</TitleT>
      <ProfilePic>
        <PicInput type="file"
          accept="image/gif, image/jpeg, image/png, image/jpg">
        </PicInput>
      </ProfilePic>
      <Idul>
        <Titlej>아이디</Titlej>
        <Titlen>{id}</Titlen>
      </Idul>
      <Nickul>
        <Nickdiv>닉네임</Nickdiv>
        <Nickname placeholder={nickname}></Nickname>
        <Nickbutton></Nickbutton>
      </Nickul>
      <Nickwarnig>중복된 닉네임입니다.</Nickwarnig>
      <Pwul>
        <Titlej>비밀번호</Titlej>
        <Titlen>{password}</Titlen>
        <ButtonTT
          name="변경"
          onClick={() => navigate("/mypage/modify/password")}
          width="65px"
          height="31px"
          fs="15px"
          mt="8px"
          ml="5px"
        />
      </Pwul>
      <BodyDiv>
        <HeightDiv>
          <Titlej>키</Titlej>
          <BInput 
            placeholder={height}
            value={heightInput}
            onChange={handleHeightChange} // 값이 변경될 때 실행될 함수 설정
            type="text" // 숫자만 입력되도록 설정
          />
          <BodyP>cm</BodyP>
        </HeightDiv>
        <WeigthDiv>
          <Titlej>몸무게</Titlej>
          <BInput 
            placeholder={weight}
            value={weightInput}
            onChange={handleWeightChange} // 값이 변경될 때 실행될 함수 설정
            type="text" // 숫자만 입력되도록 설정
          />
          <BodyP>kg</BodyP>
        </WeigthDiv>
      </BodyDiv>
    </>
  );
};

export default ProfileMod;