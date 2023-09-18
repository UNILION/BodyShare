import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import checkButton from "assets/Img/circletcheck.png"
import ButtonTT from "pages/mypage/newverst/ButtonTT"


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

const Bodywarnig = styled.p`
  margin-top: 5px;
  font-size: 11px;
  color: red;
`;

const ProfileMod = function () {
  const navigate = useNavigate();

  return (
    <>
      <Idul>
          <Titlej>아이디</Titlej>
          <Titlen>kimm</Titlen>
        </Idul>
        <Nickul>
          <Nickdiv>닉네임</Nickdiv>
          <Nickname placeholder="변경할 닉네임을 입력해주세요."></Nickname>
          <Nickbutton></Nickbutton>
        </Nickul>
        <Nickwarnig>중복된 닉네임입니다.</Nickwarnig>
        <Pwul>
          <Titlej>비밀번호</Titlej>
          <Titlen>********</Titlen>
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
            <BInput></BInput>
            <BodyP>cm</BodyP>
          </HeightDiv>
          <WeigthDiv>
            <Titlej>몸무게</Titlej>
            <BInput></BInput>
            <BodyP>kg</BodyP>
          </WeigthDiv>
        </BodyDiv>
        <Bodywarnig>필수로 작성해주세요!</Bodywarnig>
    </>
  )
};

export default ProfileMod;