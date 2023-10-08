import styled from "styled-components";
import interest from "assets/Img/interest.png";
import { useNavigate } from "react-router-dom";

const InterestDiv = styled.div`
  grid-row: 3;
  width: 300px;
  height: 150px;
  margin : 35px auto 5px auto;
  text-align: center;
`;

const InterestButton = styled.button`
  display: grid;
  width: 300px;
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

const Cover = styled.div`
  background-color: white;
  border-radius: 15px;
`

const Interest = function () {
  const navigate = useNavigate();

  return (
    <InterestDiv>
      <Cover>
        <InterestButton onClick={() => navigate("/signup/interestList")}>
          <ButtonPDiv>
            <ButtonP>나의 관심사</ButtonP>
            <ButtonP>선택하러가기</ButtonP>
          </ButtonPDiv>
          <ButtonLogo src={interest}></ButtonLogo>
        </InterestButton>
      </Cover>
    </InterestDiv>
  );
};

export default Interest;