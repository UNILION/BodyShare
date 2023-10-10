import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { interestSelector } from "recoil/userRecoil";
import { interestAtom } from "recoil/userRecoil";

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
  
  &:hover {
    cursor: pointer;
  }
`;

const Button = function () {
  const navigate = useNavigate();

  const interestList = useRecoilValue(interestSelector);
  const [interestRecoil, setInterestRecoil] = useRecoilState(interestAtom);
  
  // 로그인 페이지로 돌아갈때 관심사 리코일 초기화
  const previous = function() {
    setInterestRecoil([]);
    navigate("/")
  };

  return (
    <ButtonDiv>
      <PreviousDiv>
        <PreviousButton onClick={previous}>이전</PreviousButton>
      </PreviousDiv>
      <NextDiv>
        {interestList.length == 0 ? <NextButtonNot>다음</NextButtonNot> : <NextButton onClick={() => navigate("/signup/userInfo")}>다음</NextButton> }
      </NextDiv>
    </ButtonDiv>
  );
};

export default Button;