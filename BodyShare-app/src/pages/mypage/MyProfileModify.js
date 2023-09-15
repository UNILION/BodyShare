import styled from "styled-components";
import backButton from "../../assets/Img/back.png"
import checkButton from "../../assets/Img/circletcheck.png"
import delButton from "../../assets/Img/xbutton.png"
import { useNavigate } from "react-router-dom";
import Tag from "../../components/commons/Tag";
import Button from "../../components/commons/Button"
import Image5 from "../../assets/Img/right.png"
import ButtonTT from "./NewVer/ButtonTT"

const All = styled.div`
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 19px;
`;

const Titleul = styled.ul`
  display: flex;
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

const Titleo = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;

const BannerPic = styled.button`
  margin-top: 7px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  border-style: dashed;
  cursor: pointer;
  width: 372px;
  height: 60px;
  background-color: #FFFFFF;
  color: #878787;
  font-size: 13px; 
`;

const TitleT = styled.p`
  margin-top: 7px;
  font-size: 18px;
`;

const ProfilePic = styled.button`
  margin-top: 7px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-style: dashed;
  border-radius: 15px;
  cursor: pointer;
  width: 372px;
  height: 60px;
  background-color: #FFFFFF;
  color: #878787;
  font-size: 13px;
`;

const Idul = styled.ul`
  margin-top: 7px;
  display: flex;
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
  display: flex;
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
  display: flex;
`;

const BodyDiv = styled.div`
  margin-top: 7px;
  grid-row: 5;
  display: flex;
`;

const HeightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const Bodywarnig = styled.p`
  margin-top: 5px;
  font-size: 11px;
  color: red;
`;

const Cateckul = styled.div`
  margin-top: 7px;
  display: flex;
`;

const Catetitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #000000;
`;

const Cateul = styled.div`
  margin-top: 3px;
  display: flex;
`;

const Catedel = styled.button`
  background-image: url(${delButton});
  background-size: cover;
  border: 0px solid ;
  border-radius: 24.85px;
  width: 22px;
  height: 22px;
  font-size: 13px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
  margin-left: 3px;
`;

const Catewarnig = styled.p`
  margin-top: 5px;
  font-size: 11px;
  color: red;
`;

const MyProfileModify = function () {
  const navigate = useNavigate();
  return (
    <>
      <All>
      <Titleul>
          <Backbutton onClick={() => {navigate("/mypage")}}></Backbutton>
          <Title>나의 정보 수정</Title>
        </Titleul>
        <Titleo>배너사진</Titleo>
        <BannerPic>
          <input type="file"
            accept="image/gif, image/jpeg, image/png, image/jpg">
          </input>
        </BannerPic>
        <TitleT>프로필 사진</TitleT>
        <ProfilePic>
          <input type="file"
            accept="image/gif, image/jpeg, image/png, image/jpg">
          </input>
        </ProfilePic>
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
        <Cateckul>
          <Catetitle>나의 관심 카테고리</Catetitle>
          <ButtonTT
            name="검색"
            onClick={() => navigate("/mypage/modify/interest")}
            width="65px"
            height="31px"
            fs="15px"
            mt="8px"
            ml="175px"
          />
        </Cateckul>
        <Cateul>
          <Tag 
            tagName="요가"
          />
          <Catedel></Catedel>
        </Cateul>
        <Catewarnig>한 개 이상의 카테고리를 선택해주세요!</Catewarnig>
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