import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import user from "../../assets/Img/user.png"

const Container = styled.div`
  display: grid;
  width: 390px;
  height: 696px;
  grid-template-rows: auto auto auto auto auto 1fr;
  gap: 10px;
  
`;

const Intro = styled.div`
  grid-row: 1;
  width: 372px;
  height: 48px;
  margin: 35px auto 5px auto;
`;

const BP = styled.p`
  font-size: 20px;
  margin: 0 auto;
  text-align: center;
`;

const B = styled.b`
  font-weight: bold;
`;

const Message = styled.div`
  grid-row: 2;
  width: 372px;
  height: 17px;
  margin: 0 auto 15px auto;
`;

const SP = styled.p`
  font-size: 14px;
  margin: 5px auto;
  text-align: center;
`;

const ProfileDiv = styled.div`
  grid-row: 3;
  width: 372px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 98px;
  height: 98px;
`;

const ProfileButton = styled.button`
  width: 68px;
  height: 25px;
  font-size: 13px;
  color: white;
  border-radius: 15px;
  background-color: #556FFF;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const InputDiv = styled.div`
  grid-row: 4;
  display: grid;
  width: 372px;
  grid-template-rows: auto auto auto auto 1fr;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const IdDiv = styled.div`

`;

const Id = styled.input`
  width: 250px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
`;

const IdButton = styled.button`
  width: 68px;
  height: 25px;
  font-size: 13px;
  color: white;
  border-radius: 15px;
  background-color: #556FFF;
  border: none;
  margin-left: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const NicknameDiv = styled.div`
`;

const Nickname = styled.input`
  width: 250px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
`;

const NicknameButton = styled.button`
  width: 68px;
  height: 25px;
  font-size: 13px;
  color: white;
  border-radius: 15px;
  background-color: #556FFF;
  border: none;
  margin-left: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const Pw = styled.input.attrs({ type: "password" })`
  width: 321px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
`;

const CheckPw = styled.input.attrs({ type: "password" })`
  width: 321px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;

`;

const BodyDiv = styled.div`
  grid-row: 5;
  display: flex;
`;

const HeightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Height = styled.input`
  width: 120px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
`;

const HeightP = styled.p`
  font-size: 13px;
  color: #808080;
  margin-left: 10px
`;

const WeigthDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const Weight = styled.input`
  width: 120px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
`;

const WeigthP = styled.p`
  font-size: 13px;
  color: #808080;
  margin-left: 10px
`;

const ButtonDiv = styled.div`
  grid-row: 6;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px
`;

const PreviousButton = styled.button`
  background-color: #878787;
  width: 150px;
  height: 43.88px;
  border-radius: 15px;
  color: white;
  font-size: 13px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  margin-right: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const NextButton = styled.button`
  background-color: #556fff;
  width: 150px;
  height: 43.88px;
  border-radius: 15px;
  color: white;
  font-size: 13px;
  border: 1px solid rgba(135, 135, 135, 0.3);

  &:hover {
    cursor: pointer;
  }
`;

const UserInfo = function () {
  const navigate = useNavigate();

  return (
    <Container>
      <Intro>
        <BP>안녕하세요.</BP>
        <BP><B>BODY SHARE</B> 입니다.</BP>
      </Intro>

      <Message>
        <SP>회원 서비스 이용을 위해 본인정보를 입력해주세요.</SP>
      </Message>

      <ProfileDiv>
        <ProfileImg src={user}></ProfileImg>
        <ProfileButton>등록하기</ProfileButton>
      </ProfileDiv>

      <InputDiv>
        <IdDiv>
          <Id placeholder="아이디"></Id>
          <IdButton>중복확인</IdButton>
        </IdDiv>

        <NicknameDiv>
          <Nickname placeholder="닉네임"></Nickname>
          <NicknameButton>중복확인</NicknameButton>
        </NicknameDiv>

        <Pw placeholder="비밀번호 영문, 숫자 포함 8~16글자"></Pw>

        <CheckPw placeholder="비밀번호 재확인"></CheckPw>

        <BodyDiv>
          <HeightDiv>
            <Height placeholder="키"></Height>
            <HeightP>cm</HeightP>
          </HeightDiv>
          <WeigthDiv>
            <Weight placeholder="몸무게"></Weight>
            <WeigthP>kg</WeigthP>
          </WeigthDiv>
        </BodyDiv>
      </InputDiv>

      <ButtonDiv>
        <PreviousButton onClick={() => navigate("/signup")}>이전</PreviousButton>
        <NextButton onClick={() => navigate("/")}>회원가입</NextButton>
      </ButtonDiv>
    </Container>
  );
};

export default UserInfo;