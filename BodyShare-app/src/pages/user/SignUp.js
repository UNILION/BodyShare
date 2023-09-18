import styled from "styled-components";
import interest from "../../assets/Img/interest.png";
import xbutton from "../../assets/Img/xbutton.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: grid;
  width: 390px;
  height: 696px;
  grid-template-rows: auto auto auto 1fr;
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
  width: 250px;
  height: 34px;
  margin: 0 auto;
`;

const SP = styled.p`
  font-size: 14px;
  margin: 5px auto;
  text-align: center;
`;

const InterestDiv = styled.div`
  grid-row: 3;
  width: 300px;
  height: 150px;
  margin : 35px auto 5px auto;
  text-align: center;
`;

const InterestButton = styled.button`
  display: grid;
  width: 298px;
  height: 140px;
  grid-template-columns: auto 1fr;
  background-color: rgba(85, 111, 255, 0.1);
  border-radius: 15px;
  border: 5px solid rgba(85, 111, 255, 0.5);

  &:hover {
    cursor: pointer;
  }
`;

const ButtonPDiv = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 130px;
`;

const ButtonP = styled.p`
  font-size: 25px;
`;

const ButtonLogo = styled.img`
  grid-column: 2;
  width: 130px;
  height: 130px;
  justify-content: end;
`;

const SelectedDiv = styled.div`
  grid-row: 4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 300px;
  height: 25px;
  margin: 0 auto;
`;

const Select = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

`;

const SelectCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 23px;
  border-radius: 23px;
  background-color: rgba(85, 111, 255, 0.3);
`;

const SelectP = styled.p`
  font-size: 11px;
  font-weight: bold;
  color: #656565;
`;
const DeleteButtonDiv = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const DeleteButton = styled.button`
//   width: 19px;
//   height: 19px;
//   background-color: rgba(85, 111, 255, 0.3);
//   border-radius: 50%;
//   border: none;
//   background: url(${xbutton}) no-repeat center center;
//   background-size: cover;

//   &:hover {
//     cursor: pointer;
//   }

// `;

const Xbutton = styled.img`
  width: 25px;
  height: 25px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px;
  margin-left: 3px;
  cursor: pointer;
`;

const ButtonDiv = styled.div`
  grid-row: 5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 330px;
  height: 96px;
  margin: 0 auto;
  text-align: center;
`;

const PreviousDiv = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const PreviousButton = styled.button`
  width: 150px;
  height: 43.88px;
  border-radius: 15px;
  color: white;
  background-color: #556fff;
  border: 1px solid rgba(135, 135, 135, 0.3);

  &:hover {
    cursor: pointer;
  }
`;

const NextDiv = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const NextButton = styled.button`
  width: 150px;
  height: 43.88px;
  border-radius: 15px;
  color: white;
  background-color: #556fff;
  border: 1px solid rgba(135, 135, 135, 0.3);

  &:hover {
    cursor: pointer;
  }
`;

const NextButtonNot = styled.button`
  width: 150px;
  height: 43.88px;
  border-radius: 15px;
  color: white;
  background-color: #878787;
  border: 1px solid rgba(135, 135, 135, 0.3);
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const SignUp = function() {
  const navigate = useNavigate();

  return (
    <Container>
      <Intro>
        <BP>안녕하세요.</BP>
        <BP><B>BODY SHARE</B> 입니다.</BP>
      </Intro>

      <Message>
        <SP>회원 서비스 이용을 위해</SP>
        <SP>최대 3개의 관심사를 등록해주세요.</SP>
      </Message>

      <InterestDiv>
        <InterestButton onClick={()=> navigate("/signup/interestList")}>
          <ButtonPDiv>
            <ButtonP>나의 관심사</ButtonP>
            <ButtonP>선택하러가기</ButtonP>
          </ButtonPDiv>
          <ButtonLogo src={interest}></ButtonLogo>
        </InterestButton>
      </InterestDiv>

      <SelectedDiv>
        <Select>
          <SelectCircle>
            <SelectP>요가</SelectP>
          </SelectCircle>
          <DeleteButtonDiv>
            <Xbutton src={xbutton} ></Xbutton>
          </DeleteButtonDiv>
        </Select>
        <Select>
          <SelectCircle>
            <SelectP>수영</SelectP>
          </SelectCircle>
          <DeleteButtonDiv>
            <Xbutton src={xbutton}></Xbutton>
          </DeleteButtonDiv>
        </Select>
        <Select>
          <SelectCircle>
            <SelectP>달리기</SelectP>
          </SelectCircle>
          <DeleteButtonDiv>
            <Xbutton src={xbutton}></Xbutton>
          </DeleteButtonDiv>
        </Select>
      </SelectedDiv>

      <ButtonDiv>
        <PreviousDiv>
          <PreviousButton onClick={() => navigate("/") }>이전</PreviousButton>
        </PreviousDiv>
        <NextDiv>
          <NextButtonNot>다음</NextButtonNot>
          <NextButton onClick={() => navigate("/signup/userInfo") }>다음</NextButton>
        </NextDiv>
      </ButtonDiv>
    </Container>
  );
};

export default SignUp;