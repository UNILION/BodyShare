import styled from "styled-components";
import plus from "assets/Img/buttonplus.png";
import Button from "components/commons/Button";
import { useNavigate } from "react-router-dom";

const ResultList = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const ResultButton = styled.button`
  background-color: white;
  border: none;
  padding-top: 55px;
  cursor: pointer;
`;

const RP = styled.p`
  font-size: 17px;
  text-align: left;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 360px;
  border: 1px solid rgba(135, 135, 135, 0.3);
`;

const Middle = function () {
  const navigate = useNavigate();
  return (
    <>
      <ResultList>
        <ResultButton>
          <RP>축구</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton>
          <RP>수영</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton>
          <RP>달리기</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton>
          <RP>필라테스</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton>
          <RP>요가</RP>
          <Line></Line>
        </ResultButton>
      </ResultList>

      <Button
        name="선택하기"
        img={plus}
        width="200px"
        display="block"
        ml="auto"
        mt="30px"
        onClick={() => navigate("/community/communityAdd")}
      />
    </>
  );
};

export default Middle;
